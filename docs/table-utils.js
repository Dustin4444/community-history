// Generic table usability helpers for the history pages.
//
// enhanceTables(root) walks every <table> under `root` and adds:
//   - a crosshair highlight: hovering a cell highlights its row and its column
//   - sticky header row(s) and sticky first column, for tables big enough to
//     need scrolling (see thresholds below)
//
// Stickiness is relative to the viewport: the page stays the only scroller, so
// wide tables scroll the page horizontally rather than a nested container.
//
// The styling lives in the .tu-* rules in index.html; this module only toggles
// classes. Row highlighting is left entirely to CSS :hover. Column
// highlighting marks the cells of the hovered column instead of setting an
// attribute on the table: an attribute on the table would make the browser
// re-match rules against every cell in it (~23k on the versions table), while
// a class touches only the column's own cells. Writes are batched into one
// animation frame so a fast pointer sweep repaints once per frame.

const STICKY_MIN_ROWS = 12
const STICKY_MIN_COLUMNS = 8
const COLUMN_CLASS = 'tu-col'

// table -> (column index -> cells). Cached because column membership survives
// sorting (sortable.js moves rows, not cells) and hover re-entry is common.
const columnCache = new WeakMap()

let shown = { table: null, index: -1 }
let wanted = { table: null, index: -1 }
let frame = 0

function columnCells(table, index) {
  let byIndex = columnCache.get(table)
  if (!byIndex) {
    byIndex = new Map()
    columnCache.set(table, byIndex)
  }
  let cells = byIndex.get(index)
  if (!cells) {
    cells = []
    // Only single-row headers map cleanly to a column; colspans do not.
    if (table.tHead?.rows.length === 1) {
      const th = table.tHead.rows[0].cells[index]
      if (th) cells.push(th)
    }
    for (const row of table.tBodies[0]?.rows || []) {
      const cell = row.cells[index]
      if (cell) cells.push(cell)
    }
    byIndex.set(index, cells)
  }
  return cells
}

function setColumnClass(state, on) {
  if (!state.table || state.index < 0) return
  for (const cell of columnCells(state.table, state.index)) {
    cell.classList.toggle(COLUMN_CLASS, on)
  }
}

function applyColumn() {
  frame = 0
  if (shown.table === wanted.table && shown.index === wanted.index) return
  setColumnClass(shown, false)
  shown = wanted
  setColumnClass(shown, true)
}

function highlightColumn(table, index) {
  wanted = { table, index }
  if (!frame) frame = requestAnimationFrame(applyColumn)
}

function addCrosshair(table) {
  table.classList.add('tu-crosshair')

  table.addEventListener('pointerover', event => {
    const cell = event.target.closest('td, th')
    if (cell) highlightColumn(table, cell.cellIndex)
  }, { passive: true })

  table.addEventListener('pointerleave', () => {
    highlightColumn(null, -1)
  }, { passive: true })
}

function addSticky(table) {
  table.classList.add('tu-sticky')

  const headerRows = [...(table.tHead?.rows || [])]
  if (headerRows.length < 2) return

  // Stack multi-row headers so each row sticks below the ones above it. Read
  // after layout, since row heights are unknown until the table is rendered.
  requestAnimationFrame(() => {
    const heights = headerRows.map(row => row.getBoundingClientRect().height)
    let offset = 0
    headerRows.forEach((row, i) => {
      const top = offset
      for (const cell of row.cells) cell.style.top = `${top}px`
      offset += heights[i]
    })
  })
}

function columnCount(table) {
  const row = table.tHead?.rows[table.tHead.rows.length - 1] || table.rows[0]
  return row ? row.cells.length : 0
}

export function enhanceTables(root = document) {
  root.querySelectorAll('table').forEach(table => {
    if (table.classList.contains('tu-crosshair')) return
    addCrosshair(table)
    const rows = table.tBodies[0]?.rows.length || 0
    if (rows >= STICKY_MIN_ROWS || columnCount(table) >= STICKY_MIN_COLUMNS) {
      addSticky(table)
    }
  })
}
