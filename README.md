# community-history
Taskcluster history from https://community-tc.services.mozilla.com deployment for:

* [Clients](/Clients)
* [Hooks](/Hooks)
* [Roles](/Roles)
* [Worker Pools](/WorkerPools)
* [Worker Versions](/WorkerVersions)

## Entity filenames

The files are named after the entities themselves, except for the following character conversions:

  1. `*` -> `★`

This conversion avoids illegal filenames.

  2. `/` -> `⁄`

Rather than creating nested subdirectories, this conversion avoids directory names colliding with entity filenames.

## Entity update cadence

The `mozilla-history` command is run every 5 mins from a [crontab entry on
@petemoore's
iMac](https://github.com/petemoore/myscrapbook/blob/432cbedb7af093ed45c2d8440864f3d6c5c70fde/sync-community-history.sh#L8-L9),
with the results committed to this repository and pushed to github. The
mozilla-history command takes around 4-5 seconds to run.

## Installing

```
go get github.com/taskcluster/mozilla-history
```

## Running

```
unset TASKCLUSTER_CLIENT_ID TASKCLUSTER_ACCESS_TOKEN TASKCLUSTER_CERTIFICATE
export TASKCLUSTER_ROOT_URL='https://community-tc.services.mozilla.com'
mozilla-history
```

This will populate subdirectories `Clients`, `Hooks`, `Roles` and `WorkerPools` of the current directory.

## Worker Versions Audit

Worker versions audit is a two step process:

1. Create dummy task for each worker pool
2. Collect information from resolved tasks

Workers would pick up a job but will fail with exception because of the malformed payload. However, it would be enough, because workers log information about themselves in the task artifacts.

Both steps are accomplished by the [audit-worker-versions](https://github.com/taskcluster/mozilla-history/blob/master/audit-worker-versions/main.go) tool.

To be able to run it you will need a client that is capable to create tasks on all pools.

```sh
export TASKCLUSTER_ROOT_URL=https://community-tc.services.mozilla.com/
export TASKCLUSTER_CLIENT_ID=%audit-workers-clientId%
export TASKCLUSTER_ACCESS_TOKEN=%token%

# Step 1: Trigger task creation process
REPORT_PREFIX=https://github.com/taskcluster/community-history/blob/master/WorkerVersions/ audit-worker-versions

# this will return task definitions and TaskGroupID
# tasks are created with 3h deadline, and reports should be collected before this
# but not too soon, because we want to give workers enough time to process existing load

# sleep 1h-2h

# Step 2: Collect the audit information and write findings into WorkerVersions/
# Run this from the repository root.
REPORT_PREFIX=https://github.com/taskcluster/community-history/blob/master/WorkerVersions/ audit-worker-versions "$TaskGroupID" # passing TaskGroupID returned from the first step
```
