

# Worker Pool Versions


## Generic Worker

Total: `160`

Count by version:

| Version | Count |
| :--- | ---: |
| 108.0.0 | 5 |
| 108.1.0 | 122 |
| 83.6.0 | 1 |
| 99.1.0 | 32 |


Count by image:

| Version | Count |
| :--- | ---: |
| ami-0afcb836d0b81a957 | 1 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-9ed5a812d3d844ac9e4e | 122 |
| unknown | 7 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 16 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-evnbedjhtgkdippvhgkn-westus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-kkfebxkalecpsfngimdj-eastus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sjpmkdqnmxhojkvunjdk-southcentralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-uxyggmhbtcwiwibchrtp-eastus | 4 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-arm64-9b0cf502dc074faabd33 | 5 |
| ami-00c375abdfcb32eda | 5 |


| Worker Pool | Implementation | Version | Engine | Revision | OS | Arch | GO | Total Workers | Total Capacity |
| --- | --- | --- | --- | --- | --- | --- | --- | ---: | ---: |
| **proj-bors-ng/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-bugbug/batch** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 521 | 521 |
| **proj-bugbug/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 119 | 119 |
| **proj-bugbug/compute-large** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 35 | 35 |
| **proj-bugbug/compute-small** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-bugbug/compute-smaller** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 359 | 359 |
| **proj-bugbug/compute-super-large** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 13 | 13 |
| **proj-fuzzing/bugmon-monitor** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 55 | 55 |
| **proj-fuzzing/bugmon-pernosco-gw** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-fuzzing/bugmon-pernosco-staging** | generic-worker | 83.6.0 | multiuser | 0150bff352 | linux | amd64 | 1.24.2 | 2 | 2 |
| **proj-fuzzing/bugmon-processor** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 138 | 138 |
| **proj-fuzzing/bugmon-processor-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 8 | 8 |
| **proj-fuzzing/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 24 | 24 |
| **proj-fuzzing/ci-arm64** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-builder** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers-a10** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 43 | 43 |
| **proj-fuzzing/ci-decision** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2813 | 2813 |
| **proj-fuzzing/ci-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/decision** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 726 | 726 |
| **proj-fuzzing/grizzly-reduce-worker-android** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 306 | 306 |
| **proj-fuzzing/grizzly-reduce-worker-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 129 | 129 |
| **proj-fuzzing/grizzly-reduce-worker-windows-ngpu** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 434 | 434 |
| **proj-fuzzing/linux-pool1** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 55 | 55 |
| **proj-fuzzing/linux-pool10** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 301 | 301 |
| **proj-fuzzing/linux-pool100** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 76 | 76 |
| **proj-fuzzing/linux-pool101** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 80 | 80 |
| **proj-fuzzing/linux-pool102** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 79 | 79 |
| **proj-fuzzing/linux-pool103** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 194 | 194 |
| **proj-fuzzing/linux-pool104** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 200 | 200 |
| **proj-fuzzing/linux-pool105** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 138 | 138 |
| **proj-fuzzing/linux-pool106** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 143 | 143 |
| **proj-fuzzing/linux-pool107** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 76 | 76 |
| **proj-fuzzing/linux-pool108** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 81 | 81 |
| **proj-fuzzing/linux-pool109** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 11 | 11 |
| **proj-fuzzing/linux-pool11** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 51 | 51 |
| **proj-fuzzing/linux-pool113** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 33 | 33 |
| **proj-fuzzing/linux-pool114** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 18 | 18 |
| **proj-fuzzing/linux-pool115** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 10 | 10 |
| **proj-fuzzing/linux-pool116** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 11 | 11 |
| **proj-fuzzing/linux-pool117** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 12 | 12 |
| **proj-fuzzing/linux-pool118** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 32 | 32 |
| **proj-fuzzing/linux-pool119** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 25 | 25 |
| **proj-fuzzing/linux-pool12** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 29 | 29 |
| **proj-fuzzing/linux-pool120** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 23 | 23 |
| **proj-fuzzing/linux-pool122** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 24 | 24 |
| **proj-fuzzing/linux-pool123** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool124** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 45 | 45 |
| **proj-fuzzing/linux-pool125** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 44 | 44 |
| **proj-fuzzing/linux-pool126** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 8 | 8 |
| **proj-fuzzing/linux-pool127** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 127 | 127 |
| **proj-fuzzing/linux-pool129** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 40 | 40 |
| **proj-fuzzing/linux-pool13** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 70 | 70 |
| **proj-fuzzing/linux-pool130** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 85 | 85 |
| **proj-fuzzing/linux-pool131** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 73 | 73 |
| **proj-fuzzing/linux-pool132** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool133** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool14** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 69 | 69 |
| **proj-fuzzing/linux-pool15** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 72 | 72 |
| **proj-fuzzing/linux-pool16** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 75 | 75 |
| **proj-fuzzing/linux-pool17** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 288 | 288 |
| **proj-fuzzing/linux-pool18** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool19** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool2** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool20** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool21** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool22** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool23** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool25** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 80 | 80 |
| **proj-fuzzing/linux-pool26** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 87 | 87 |
| **proj-fuzzing/linux-pool27** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 78 | 78 |
| **proj-fuzzing/linux-pool28** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 123 | 123 |
| **proj-fuzzing/linux-pool29** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 136 | 136 |
| **proj-fuzzing/linux-pool3** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 17 | 17 |
| **proj-fuzzing/linux-pool30** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool31** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 20 | 20 |
| **proj-fuzzing/linux-pool32** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool33** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool34** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool35** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool36** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool37** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 19 | 19 |
| **proj-fuzzing/linux-pool38** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool39** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool40** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 39 | 39 |
| **proj-fuzzing/linux-pool41** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 36 | 36 |
| **proj-fuzzing/linux-pool42** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 41 | 41 |
| **proj-fuzzing/linux-pool43** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 50 | 50 |
| **proj-fuzzing/linux-pool44** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool45** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 37 | 37 |
| **proj-fuzzing/linux-pool46** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 72 | 72 |
| **proj-fuzzing/linux-pool47** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 20 | 20 |
| **proj-fuzzing/linux-pool48** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 14 | 14 |
| **proj-fuzzing/linux-pool49** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 12 | 12 |
| **proj-fuzzing/linux-pool5** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 41 | 41 |
| **proj-fuzzing/linux-pool50** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 433 | 433 |
| **proj-fuzzing/linux-pool51** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 55 | 55 |
| **proj-fuzzing/linux-pool52** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 4 | 4 |
| **proj-fuzzing/linux-pool53** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-fuzzing/linux-pool54** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 7 | 7 |
| **proj-fuzzing/linux-pool57** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 13 | 13 |
| **proj-fuzzing/linux-pool6** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 307 | 307 |
| **proj-fuzzing/linux-pool65** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool66** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 81 | 81 |
| **proj-fuzzing/linux-pool67** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 75 | 75 |
| **proj-fuzzing/linux-pool68** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 82 | 82 |
| **proj-fuzzing/linux-pool69** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 40 | 40 |
| **proj-fuzzing/linux-pool7** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 42 | 42 |
| **proj-fuzzing/linux-pool70** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool72** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 86 | 86 |
| **proj-fuzzing/linux-pool76** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 113 | 113 |
| **proj-fuzzing/linux-pool77** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool78** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 41 | 41 |
| **proj-fuzzing/linux-pool8** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 613 | 613 |
| **proj-fuzzing/linux-pool82** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 38 | 38 |
| **proj-fuzzing/linux-pool83** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 161 | 161 |
| **proj-fuzzing/linux-pool84** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 5 | 5 |
| **proj-fuzzing/linux-pool86** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 3 | 3 |
| **proj-fuzzing/linux-pool9** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 174 | 174 |
| **proj-fuzzing/linux-pool90** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 152 | 152 |
| **proj-fuzzing/linux-pool91** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 80 | 80 |
| **proj-fuzzing/linux-pool92** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 33 | 33 |
| **proj-fuzzing/linux-pool94** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 446 | 446 |
| **proj-fuzzing/linux-pool95** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 5 | 5 |
| **proj-fuzzing/linux-pool96** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 27 | 27 |
| **proj-fuzzing/linux-pool97** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 6 | 6 |
| **proj-fuzzing/linux-pool99** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 79 | 79 |
| **proj-fuzzing/nss-corpus-update-worker** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-fuzzing/windows-pool110** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 12 | 12 |
| **proj-fuzzing/windows-pool111** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 68 | 68 |
| **proj-fuzzing/windows-pool112** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 61 | 61 |
| **proj-fuzzing/windows-pool121** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 49 | 49 |
| **proj-fuzzing/windows-pool55** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 60 | 60 |
| **proj-fuzzing/windows-pool58** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 283 | 283 |
| **proj-fuzzing/windows-pool59** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 72 | 72 |
| **proj-fuzzing/windows-pool60** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 18 | 18 |
| **proj-fuzzing/windows-pool61** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 15 | 15 |
| **proj-fuzzing/windows-pool62** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 54 | 54 |
| **proj-fuzzing/windows-pool63** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 291 | 291 |
| **proj-fuzzing/windows-pool81** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 39 | 39 |
| **proj-fuzzing/windows-pool85** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 71 | 71 |
| **proj-fuzzing/windows-pool87** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 9 | 9 |
| **proj-fuzzing/windows-pool89** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 282 | 282 |
| **proj-fuzzing/windows-pool93** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 801 | 801 |
| **proj-fuzzing/windows-pool98** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 128 | 128 |
| **proj-git-cinnabar/linux** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 8 | 8 |
| **proj-git-cinnabar/windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-misc/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 79 | 79 |
| **proj-misc/tutorial** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 9 | 9 |
| **proj-mozci/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-mozci/compute-small** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-mozci/compute-smaller** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 14766 | 14766 |
| **proj-mozci/generic-worker-ubuntu-24-04** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-releng/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-relman/ci** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 54 | 54 |
| **proj-relman/generic-worker-ubuntu-24-04** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 373 | 373 |
| **proj-relman/win2022** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-taskcluster/gw-windows-2022-gui** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 80 | 80 |
| **proj-webrender/ci-linux** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 2 | 2 |
| **proj-wpt/ci-gw** | generic-worker | 108.1.0 | multiuser | f86624a8bf | linux | amd64 | 1.27.1 | 84 | 84 |


## Docker Worker

Total: `2`

Count by version:

| Version | Count |
| :--- | ---: |
| 44.23.4 | 1 |
| 46.1.0 | 1 |


Count by image:

| Version | Count |
| :--- | ---: |
| projects/community-tc-workers/global/images/docker-worker-sfwv7ea5qm9wuoig3274 | 1 |
| ami-03f677a21b2fadb15,ami-071b3ff08f2d9c1dd,ami-0de87470eb34a8e36,ami-0ec6d5fc54628fa9b | 1 |


| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **proj-fuzzing/bugmon-pernosco** | docker-worker | 44.23.4 | 2 | 2 |
| **proj-wpt/ci** | docker-worker | 46.1.0 | 2175 | 2175 |


## Script Worker

Total: `0`




## No artifacts found [^1]

Total: `2`



| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **built-in/fail** |  | No artifacts found | 0 | 0 |
| **built-in/succeed** |  | No artifacts found | 0 | 0 |


## Version not determined [^2]

Total: `22`


Count by image:

| Version | Count |
| :--- | ---: |
| unknown | 17 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-9ed5a812d3d844ac9e4e | 4 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 1 |


| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **proj-fuzzing/grizzly-reduce-worker** |  | Version not determined; task not (yet) claimed | 185 | 185 |
| **proj-fuzzing/linux-pool128** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool4** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool64** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/windows-pool79** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-taskcluster/ci** |  | Version not determined; task not (yet) claimed | 137 | 137 |
| **proj-taskcluster/gw-ci-freebsd** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-ci-macos** |  | Version not determined; task not (yet) claimed | 2 | 2 |
| **proj-taskcluster/gw-ubuntu-24-04** |  | Version not determined; task not (yet) claimed | 3486 | 3486 |
| **proj-taskcluster/gw-ubuntu-24-04-arm64** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-ubuntu-24-04-gui** |  | Version not determined; task not (yet) claimed | 149 | 149 |
| **proj-taskcluster/gw-ubuntu-24-04-metal** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-ubuntu-staging-aws** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-ubuntu-staging-google** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-taskcluster/gw-windows-11-24h2-staging** |  | Version not determined; task not (yet) claimed | 56 | 56 |
| **proj-taskcluster/gw-windows-2022** |  | Version not determined; task not (yet) claimed | 79 | 79 |
| **proj-taskcluster/gw-windows-2022-gpu** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-windows-2022-gpu-staging** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-windows-2022-staging** |  | Version not determined; task not (yet) claimed | 3 | 3 |
| **proj-taskcluster/gw-windows-2025-staging** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/old-docker-worker** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/release** |  | Version not determined; task not (yet) claimed | 2 | 2 |



[^1]: Those are the pools whose tasks were claimed and resolved by a worker as expected, but the worker did not publish either artifact `public/logs/live_backing.log` nor `public/logs/chain_of_trust.log`, which is the source used to identify the worker implementation.

[^2]: Probing task remains pending after two hours. Those are the pools that were not able to start any worker to claim the task within two hours.
