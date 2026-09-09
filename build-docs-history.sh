#!/bin/bash -e

# This script collects all revisions of the "WorkerVersions/workers.json" file
# to extract statistics by date of the commit
# Result is placed in docs/history.json file that be displayed on the github page

# node script assigned to variable that will extract stats from json files
{ nodescript=$(cat) ; } <<'HEREDOC'
	const path = require('path')
	if (process.argv.length < 3) {
		console.error('Expected some arguments')
		process.exit(1)
	}
	const runStats = (data) => {
		const implementations = {}
		const versions = {}
		const imagesets = {}
		const inc = (dict, key) => dict[key] = (dict[key] || 0) + 1
		data.forEach(worker => {
			inc(implementations, worker.Implementation)
			inc(versions, worker.Version)
			inc(imagesets, worker.Imageset)
		})
		return { implementations, versions, imagesets }
	}

	const out = {}
	for (i = 2; i < process.argv.length; i++) {
		const m = process.argv[i].match(/([0-9-]+).json/)
		const file = require(path.join(process.argv[1], process.argv[i]))
		out[m[1]] = runStats(file)
	}
	console.log(JSON.stringify(out))
HEREDOC

# build a revision history for public website

PUBLIC_DIR="./docs"
WORKERS_FILES=(
	"WorkerVersions/workers.json"
	"WorkerVersions/WorkerVersions/workers.json"
)
HISTORICAL_DATA="./${PUBLIC_DIR}/history.json"

mkdir -p "${PUBLIC_DIR}/data/"

# Grab all versions by date. The nested path contains reports generated between
# November 2024 and September 2026 due to audit.sh running from the wrong directory.
for workers_file in "${WORKERS_FILES[@]}";
do
	while IFS= read -r rev;
	do
		if ! git cat-file -e "${rev}:${workers_file}" 2>/dev/null; then
			echo "Skipping ${rev}: ${workers_file} does not exist"
			continue
		fi

		revdate=$(git show --no-patch --no-notes --date=short --pretty='%cd' "$rev")
		echo "Fetching ${revdate} version ${rev}"
		git show "${rev}:${workers_file}" > "${PUBLIC_DIR}/data/${revdate}.json"
	done < <(git rev-list master -- "${workers_file}")
done

node -e "${nodescript}" "${PWD}" ${PUBLIC_DIR}/data/*.json > $HISTORICAL_DATA
rm -rf "${PUBLIC_DIR}/data/"

echo "Done"
