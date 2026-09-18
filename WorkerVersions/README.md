

# Worker Pool Versions


## Generic Worker

Total: `157`

Count by version:

| Version | Count |
| :--- | ---: |
| 108.0.0 | 5 |
| 108.1.0 | 121 |
| 99.1.0 | 31 |


Count by image:

| Version | Count |
| :--- | ---: |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-arm64-9b0cf502dc074faabd33 | 5 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 16 |
| ami-00c375abdfcb32eda | 5 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-evnbedjhtgkdippvhgkn-westus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-kkfebxkalecpsfngimdj-eastus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sjpmkdqnmxhojkvunjdk-southcentralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-uxyggmhbtcwiwibchrtp-eastus | 4 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-9ed5a812d3d844ac9e4e | 121 |
| unknown | 6 |


| Worker Pool | Implementation | Version | Engine | Revision | OS | Arch | GO | Total Workers | Total Capacity |
| --- | --- | --- | --- | --- | --- | --- | --- | ---: | ---: |
| **proj-bors-ng/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-bugbug/batch** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 522 | 522 |
| **proj-bugbug/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 111 | 111 |
| **proj-bugbug/compute-large** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 31 | 31 |
| **proj-bugbug/compute-small** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 13 | 13 |
| **proj-bugbug/compute-smaller** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 368 | 368 |
| **proj-bugbug/compute-super-large** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/bugmon-monitor** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 64 | 64 |
| **proj-fuzzing/bugmon-processor** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 165 | 165 |
| **proj-fuzzing/bugmon-processor-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 6 | 6 |
| **proj-fuzzing/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 29 | 29 |
| **proj-fuzzing/ci-arm64** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-builder** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers-a10** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 44 | 44 |
| **proj-fuzzing/ci-decision** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2807 | 2807 |
| **proj-fuzzing/ci-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/decision** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 630 | 630 |
| **proj-fuzzing/grizzly-reduce-worker-android** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 248 | 248 |
| **proj-fuzzing/grizzly-reduce-worker-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 81 | 81 |
| **proj-fuzzing/grizzly-reduce-worker-windows-ngpu** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 362 | 362 |
| **proj-fuzzing/linux-pool1** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 41 | 41 |
| **proj-fuzzing/linux-pool10** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 320 | 320 |
| **proj-fuzzing/linux-pool100** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 78 | 78 |
| **proj-fuzzing/linux-pool101** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 78 | 78 |
| **proj-fuzzing/linux-pool102** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 83 | 83 |
| **proj-fuzzing/linux-pool103** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 193 | 193 |
| **proj-fuzzing/linux-pool104** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 188 | 188 |
| **proj-fuzzing/linux-pool105** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 138 | 138 |
| **proj-fuzzing/linux-pool106** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 138 | 138 |
| **proj-fuzzing/linux-pool107** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 75 | 75 |
| **proj-fuzzing/linux-pool108** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 89 | 89 |
| **proj-fuzzing/linux-pool109** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 10 | 10 |
| **proj-fuzzing/linux-pool11** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 24 | 24 |
| **proj-fuzzing/linux-pool113** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 35 | 35 |
| **proj-fuzzing/linux-pool114** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 7 | 7 |
| **proj-fuzzing/linux-pool115** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 13 | 13 |
| **proj-fuzzing/linux-pool116** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 12 | 12 |
| **proj-fuzzing/linux-pool117** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 14 | 14 |
| **proj-fuzzing/linux-pool118** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 38 | 38 |
| **proj-fuzzing/linux-pool119** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 21 | 21 |
| **proj-fuzzing/linux-pool12** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 15 | 15 |
| **proj-fuzzing/linux-pool120** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 22 | 22 |
| **proj-fuzzing/linux-pool122** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 26 | 26 |
| **proj-fuzzing/linux-pool123** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool124** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 46 | 46 |
| **proj-fuzzing/linux-pool125** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 46 | 46 |
| **proj-fuzzing/linux-pool126** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-fuzzing/linux-pool127** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 119 | 119 |
| **proj-fuzzing/linux-pool129** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 40 | 40 |
| **proj-fuzzing/linux-pool13** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 42 | 42 |
| **proj-fuzzing/linux-pool130** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 92 | 92 |
| **proj-fuzzing/linux-pool131** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 74 | 74 |
| **proj-fuzzing/linux-pool132** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool133** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool14** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 51 | 51 |
| **proj-fuzzing/linux-pool15** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 52 | 52 |
| **proj-fuzzing/linux-pool16** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 44 | 44 |
| **proj-fuzzing/linux-pool17** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 283 | 283 |
| **proj-fuzzing/linux-pool18** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool19** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool2** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 40 | 40 |
| **proj-fuzzing/linux-pool20** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool21** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool22** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool23** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool25** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 81 | 81 |
| **proj-fuzzing/linux-pool26** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 79 | 79 |
| **proj-fuzzing/linux-pool27** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 77 | 77 |
| **proj-fuzzing/linux-pool28** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 119 | 119 |
| **proj-fuzzing/linux-pool29** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 143 | 143 |
| **proj-fuzzing/linux-pool3** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool30** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool31** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool32** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool33** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool34** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 20 | 20 |
| **proj-fuzzing/linux-pool35** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool36** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool37** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool38** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool39** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool40** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool41** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool42** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool43** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool44** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool45** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool46** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 72 | 72 |
| **proj-fuzzing/linux-pool47** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool48** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 8 | 8 |
| **proj-fuzzing/linux-pool49** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 10 | 10 |
| **proj-fuzzing/linux-pool5** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 43 | 43 |
| **proj-fuzzing/linux-pool50** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 429 | 429 |
| **proj-fuzzing/linux-pool51** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 65 | 65 |
| **proj-fuzzing/linux-pool52** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-fuzzing/linux-pool53** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-fuzzing/linux-pool54** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 7 | 7 |
| **proj-fuzzing/linux-pool57** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 14 | 14 |
| **proj-fuzzing/linux-pool6** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 333 | 333 |
| **proj-fuzzing/linux-pool65** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 6 | 6 |
| **proj-fuzzing/linux-pool66** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 77 | 77 |
| **proj-fuzzing/linux-pool67** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 76 | 76 |
| **proj-fuzzing/linux-pool68** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 83 | 83 |
| **proj-fuzzing/linux-pool69** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool7** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 44 | 44 |
| **proj-fuzzing/linux-pool70** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-fuzzing/linux-pool72** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 40 | 40 |
| **proj-fuzzing/linux-pool76** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 92 | 92 |
| **proj-fuzzing/linux-pool77** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-fuzzing/linux-pool78** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 44 | 44 |
| **proj-fuzzing/linux-pool8** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 656 | 656 |
| **proj-fuzzing/linux-pool82** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool83** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 164 | 164 |
| **proj-fuzzing/linux-pool84** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool86** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-fuzzing/linux-pool9** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 162 | 162 |
| **proj-fuzzing/linux-pool90** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 156 | 156 |
| **proj-fuzzing/linux-pool91** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 82 | 82 |
| **proj-fuzzing/linux-pool92** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 39 | 39 |
| **proj-fuzzing/linux-pool94** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 459 | 459 |
| **proj-fuzzing/linux-pool95** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 5 | 5 |
| **proj-fuzzing/linux-pool96** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 39 | 39 |
| **proj-fuzzing/linux-pool97** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 6 | 6 |
| **proj-fuzzing/linux-pool99** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 83 | 83 |
| **proj-fuzzing/nss-corpus-update-worker** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-fuzzing/windows-pool110** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 11 | 11 |
| **proj-fuzzing/windows-pool111** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 56 | 56 |
| **proj-fuzzing/windows-pool112** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 58 | 58 |
| **proj-fuzzing/windows-pool121** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 56 | 56 |
| **proj-fuzzing/windows-pool55** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 69 | 69 |
| **proj-fuzzing/windows-pool58** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 252 | 252 |
| **proj-fuzzing/windows-pool59** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 61 | 61 |
| **proj-fuzzing/windows-pool60** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 14 | 14 |
| **proj-fuzzing/windows-pool61** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 15 | 15 |
| **proj-fuzzing/windows-pool62** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 64 | 64 |
| **proj-fuzzing/windows-pool63** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 268 | 268 |
| **proj-fuzzing/windows-pool81** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 38 | 38 |
| **proj-fuzzing/windows-pool85** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 67 | 67 |
| **proj-fuzzing/windows-pool87** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 9 | 9 |
| **proj-fuzzing/windows-pool89** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 263 | 263 |
| **proj-fuzzing/windows-pool93** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 738 | 738 |
| **proj-fuzzing/windows-pool98** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 118 | 118 |
| **proj-git-cinnabar/linux** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-git-cinnabar/windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-misc/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 30 | 30 |
| **proj-misc/tutorial** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-mozci/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-mozci/compute-small** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-mozci/compute-smaller** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19659 | 19659 |
| **proj-mozci/generic-worker-ubuntu-24-04** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-releng/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-relman/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 60 | 60 |
| **proj-relman/generic-worker-ubuntu-24-04** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 573 | 573 |
| **proj-relman/win2022** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-webrender/ci-linux** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-wpt/ci-gw** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 1858 | 1858 |


## Docker Worker

Total: `0`




## Script Worker

Total: `0`




## No artifacts found [^1]

Total: `2`



| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **built-in/fail** |  | No artifacts found | 0 | 0 |
| **built-in/succeed** |  | No artifacts found | 0 | 0 |


## Version not determined [^2]

Total: `7`


Count by image:

| Version | Count |
| :--- | ---: |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 1 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-9ed5a812d3d844ac9e4e | 5 |
| unknown | 1 |


| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **proj-fuzzing/bugmon-pernosco** |  | Version not determined; task not (yet) claimed | 2 | 2 |
| **proj-fuzzing/grizzly-reduce-worker** |  | Version not determined; task not (yet) claimed | 223 | 223 |
| **proj-fuzzing/linux-pool128** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool4** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool64** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/windows-pool79** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-taskcluster/gw-ci-macos** |  | Version not determined; task not (yet) claimed | 2 | 2 |



[^1]: Those are the pools whose tasks were claimed and resolved by a worker as expected, but the worker did not publish either artifact `public/logs/live_backing.log` nor `public/logs/chain_of_trust.log`, which is the source used to identify the worker implementation.

[^2]: Probing task remains pending after two hours. Those are the pools that were not able to start any worker to claim the task within two hours.
