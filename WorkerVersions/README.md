

# Worker Pool Versions


## Generic Worker

Total: `167`

Count by version:

| Version | Count |
| :--- | ---: |
| 108.0.0 | 128 |
| 83.6.0 | 3 |
| 87.1.1 | 1 |
| 95.1.0 | 1 |
| 99.1.0 | 34 |


Count by image:

| Version | Count |
| :--- | ---: |
| unknown | 11 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 16 |
| ami-00c375abdfcb32eda | 5 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-evnbedjhtgkdippvhgkn-westus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-kkfebxkalecpsfngimdj-eastus2,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sjpmkdqnmxhojkvunjdk-southcentralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-uxyggmhbtcwiwibchrtp-eastus | 4 |
| ami-05fc5e0c31b199d96 | 1 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-10c009c7a14346ef8938 | 121 |
| ami-0afcb836d0b81a957 | 3 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-arm64-9b0cf502dc074faabd33 | 6 |


| Worker Pool | Implementation | Version | Engine | Revision | OS | Arch | GO | Total Workers | Total Capacity |
| --- | --- | --- | --- | --- | --- | --- | --- | ---: | ---: |
| **proj-bors-ng/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-bugbug/batch** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 584 | 584 |
| **proj-bugbug/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 151 | 151 |
| **proj-bugbug/compute-large** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 42 | 42 |
| **proj-bugbug/compute-small** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 13 | 13 |
| **proj-bugbug/compute-smaller** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 413 | 413 |
| **proj-bugbug/compute-super-large** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 16 | 16 |
| **proj-fuzzing/bugmon-monitor** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 40 | 40 |
| **proj-fuzzing/bugmon-pernosco-gw** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-fuzzing/bugmon-pernosco-staging** | generic-worker | 83.6.0 | multiuser | 0150bff352 | linux | amd64 | 1.24.2 | 2 | 2 |
| **proj-fuzzing/bugmon-processor** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 155 | 155 |
| **proj-fuzzing/bugmon-processor-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 8 | 8 |
| **proj-fuzzing/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 25 | 25 |
| **proj-fuzzing/ci-arm64** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-builder** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/ci-clauditor-workers-a10** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 28 | 28 |
| **proj-fuzzing/ci-decision** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2806 | 2806 |
| **proj-fuzzing/ci-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-fuzzing/decision** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 802 | 802 |
| **proj-fuzzing/grizzly-reduce-worker-android** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 341 | 341 |
| **proj-fuzzing/grizzly-reduce-worker-windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 254 | 254 |
| **proj-fuzzing/grizzly-reduce-worker-windows-ngpu** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 462 | 462 |
| **proj-fuzzing/linux-pool10** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 302 | 302 |
| **proj-fuzzing/linux-pool100** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 76 | 76 |
| **proj-fuzzing/linux-pool101** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 77 | 77 |
| **proj-fuzzing/linux-pool102** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 82 | 82 |
| **proj-fuzzing/linux-pool104** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 197 | 197 |
| **proj-fuzzing/linux-pool105** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 141 | 141 |
| **proj-fuzzing/linux-pool106** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 147 | 147 |
| **proj-fuzzing/linux-pool107** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 76 | 76 |
| **proj-fuzzing/linux-pool108** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 80 | 80 |
| **proj-fuzzing/linux-pool109** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 10 | 10 |
| **proj-fuzzing/linux-pool113** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 32 | 32 |
| **proj-fuzzing/linux-pool114** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 15 | 15 |
| **proj-fuzzing/linux-pool115** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 10 | 10 |
| **proj-fuzzing/linux-pool116** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 17 | 17 |
| **proj-fuzzing/linux-pool117** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 12 | 12 |
| **proj-fuzzing/linux-pool118** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 29 | 29 |
| **proj-fuzzing/linux-pool119** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 27 | 27 |
| **proj-fuzzing/linux-pool12** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 23 | 23 |
| **proj-fuzzing/linux-pool120** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 28 | 28 |
| **proj-fuzzing/linux-pool122** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 26 | 26 |
| **proj-fuzzing/linux-pool123** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 7 | 7 |
| **proj-fuzzing/linux-pool124** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 42 | 42 |
| **proj-fuzzing/linux-pool126** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 8 | 8 |
| **proj-fuzzing/linux-pool127** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 145 | 145 |
| **proj-fuzzing/linux-pool129** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool13** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 76 | 76 |
| **proj-fuzzing/linux-pool130** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 83 | 83 |
| **proj-fuzzing/linux-pool131** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 72 | 72 |
| **proj-fuzzing/linux-pool132** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool133** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 36 | 36 |
| **proj-fuzzing/linux-pool15** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 77 | 77 |
| **proj-fuzzing/linux-pool16** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 68 | 68 |
| **proj-fuzzing/linux-pool17** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 280 | 280 |
| **proj-fuzzing/linux-pool18** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool19** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool2** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 42 | 42 |
| **proj-fuzzing/linux-pool20** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool21** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool22** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool23** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool25** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 81 | 81 |
| **proj-fuzzing/linux-pool26** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 88 | 88 |
| **proj-fuzzing/linux-pool27** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 76 | 76 |
| **proj-fuzzing/linux-pool28** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 118 | 118 |
| **proj-fuzzing/linux-pool29** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 140 | 140 |
| **proj-fuzzing/linux-pool3** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 27 | 27 |
| **proj-fuzzing/linux-pool30** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool31** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool32** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool33** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool34** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool35** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool36** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool37** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool38** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool39** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool40** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool41** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 36 | 36 |
| **proj-fuzzing/linux-pool42** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool43** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 44 | 44 |
| **proj-fuzzing/linux-pool44** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 36 | 36 |
| **proj-fuzzing/linux-pool45** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 30 | 30 |
| **proj-fuzzing/linux-pool46** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 72 | 72 |
| **proj-fuzzing/linux-pool47** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 19 | 19 |
| **proj-fuzzing/linux-pool48** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 16 | 16 |
| **proj-fuzzing/linux-pool49** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 33 | 33 |
| **proj-fuzzing/linux-pool5** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 40 | 40 |
| **proj-fuzzing/linux-pool50** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 426 | 426 |
| **proj-fuzzing/linux-pool51** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 47 | 47 |
| **proj-fuzzing/linux-pool52** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 6 | 6 |
| **proj-fuzzing/linux-pool53** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 3 | 3 |
| **proj-fuzzing/linux-pool54** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 4 | 4 |
| **proj-fuzzing/linux-pool57** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 14 | 14 |
| **proj-fuzzing/linux-pool6** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 314 | 314 |
| **proj-fuzzing/linux-pool65** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 8 | 8 |
| **proj-fuzzing/linux-pool66** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 78 | 78 |
| **proj-fuzzing/linux-pool67** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 79 | 79 |
| **proj-fuzzing/linux-pool68** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 77 | 77 |
| **proj-fuzzing/linux-pool69** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 37 | 37 |
| **proj-fuzzing/linux-pool7** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 40 | 40 |
| **proj-fuzzing/linux-pool70** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 5 | 5 |
| **proj-fuzzing/linux-pool72** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 99 | 99 |
| **proj-fuzzing/linux-pool76** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 105 | 105 |
| **proj-fuzzing/linux-pool77** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 5 | 5 |
| **proj-fuzzing/linux-pool78** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 45 | 45 |
| **proj-fuzzing/linux-pool8** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 617 | 617 |
| **proj-fuzzing/linux-pool82** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 38 | 38 |
| **proj-fuzzing/linux-pool83** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 155 | 155 |
| **proj-fuzzing/linux-pool84** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 5 | 5 |
| **proj-fuzzing/linux-pool86** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 3 | 3 |
| **proj-fuzzing/linux-pool9** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 170 | 170 |
| **proj-fuzzing/linux-pool90** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 150 | 150 |
| **proj-fuzzing/linux-pool91** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 81 | 81 |
| **proj-fuzzing/linux-pool92** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 37 | 37 |
| **proj-fuzzing/linux-pool94** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 452 | 452 |
| **proj-fuzzing/linux-pool95** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 5 | 5 |
| **proj-fuzzing/linux-pool96** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | linux | amd64 | 1.26.2 | 33 | 33 |
| **proj-fuzzing/linux-pool97** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 6 | 6 |
| **proj-fuzzing/linux-pool99** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 76 | 76 |
| **proj-fuzzing/nss-corpus-update-worker** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 3 | 3 |
| **proj-fuzzing/windows-pool110** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 11 | 11 |
| **proj-fuzzing/windows-pool111** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 73 | 73 |
| **proj-fuzzing/windows-pool112** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 70 | 70 |
| **proj-fuzzing/windows-pool121** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 53 | 53 |
| **proj-fuzzing/windows-pool55** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 67 | 67 |
| **proj-fuzzing/windows-pool58** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 265 | 265 |
| **proj-fuzzing/windows-pool59** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 65 | 65 |
| **proj-fuzzing/windows-pool60** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 13 | 13 |
| **proj-fuzzing/windows-pool61** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 18 | 18 |
| **proj-fuzzing/windows-pool62** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 55 | 55 |
| **proj-fuzzing/windows-pool63** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 300 | 300 |
| **proj-fuzzing/windows-pool81** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 35 | 35 |
| **proj-fuzzing/windows-pool85** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 57 | 57 |
| **proj-fuzzing/windows-pool87** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 9 | 9 |
| **proj-fuzzing/windows-pool89** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 243 | 243 |
| **proj-fuzzing/windows-pool93** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 762 | 762 |
| **proj-fuzzing/windows-pool98** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 125 | 125 |
| **proj-git-cinnabar/linux** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 36 | 36 |
| **proj-git-cinnabar/windows** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-misc/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 45 | 45 |
| **proj-misc/tutorial** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 8 | 8 |
| **proj-mozci/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-mozci/compute-small** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-mozci/compute-smaller** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 5964 | 5964 |
| **proj-mozci/generic-worker-ubuntu-24-04** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-releng/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-relman/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 62 | 62 |
| **proj-relman/generic-worker-ubuntu-24-04** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 107 | 107 |
| **proj-relman/win2022** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-taskcluster/ci** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 153 | 153 |
| **proj-taskcluster/gw-ci-macos** | generic-worker | 108.0.0 | multiuser | ae7697a544 | darwin | arm64 | 1.27.0 | 2 | 2 |
| **proj-taskcluster/gw-ubuntu-24-04** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 6232 | 6232 |
| **proj-taskcluster/gw-ubuntu-24-04-arm64** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | arm64 | 1.27.0 | 2 | 2 |
| **proj-taskcluster/gw-ubuntu-24-04-gui** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 348 | 348 |
| **proj-taskcluster/gw-ubuntu-24-04-metal** | generic-worker | 83.6.0 | multiuser | 0150bff352 | linux | amd64 | 1.24.2 | 2 | 2 |
| **proj-taskcluster/gw-ubuntu-staging-aws** | generic-worker | 83.6.0 | multiuser | 0150bff352 | linux | amd64 | 1.24.2 | 2 | 2 |
| **proj-taskcluster/gw-windows-2022** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 548 | 548 |
| **proj-taskcluster/gw-windows-2022-gpu** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 2 | 2 |
| **proj-taskcluster/gw-windows-2022-gpu-staging** | generic-worker | 95.1.0 | multiuser | 42f6cb7a8b | windows | amd64 | 1.25.5 | 2 | 2 |
| **proj-taskcluster/gw-windows-2022-gui** | generic-worker | 99.1.0 | multiuser | c76d61efe4 | windows | amd64 | 1.26.2 | 552 | 552 |
| **proj-taskcluster/gw-windows-2025-staging** | generic-worker | 87.1.1 | multiuser | 5600421294 | windows | amd64 | 1.24.5 | 2 | 2 |
| **proj-taskcluster/release** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 3 | 3 |
| **proj-webrender/ci-linux** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |
| **proj-wpt/ci-gw** | generic-worker | 108.0.0 | multiuser | ae7697a544 | linux | amd64 | 1.27.0 | 2 | 2 |


## Docker Worker

Total: `3`

Count by version:

| Version | Count |
| :--- | ---: |
| 44.23.4 | 1 |
| 46.1.0 | 2 |


Count by image:

| Version | Count |
| :--- | ---: |
| projects/community-tc-workers/global/images/docker-worker-sfwv7ea5qm9wuoig3274 | 2 |
| ami-03f677a21b2fadb15,ami-071b3ff08f2d9c1dd,ami-0de87470eb34a8e36,ami-0ec6d5fc54628fa9b | 1 |


| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **proj-fuzzing/bugmon-pernosco** | docker-worker | 44.23.4 | 2 | 2 |
| **proj-taskcluster/old-docker-worker** | docker-worker | 46.1.0 | 2 | 2 |
| **proj-wpt/ci** | docker-worker | 46.1.0 | 2657 | 2657 |


## Script Worker

Total: `0`




## No artifacts found [^1]

Total: `2`



| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **built-in/fail** |  | No artifacts found | 0 | 0 |
| **built-in/succeed** |  | No artifacts found | 0 | 0 |


## Version not determined [^2]

Total: `14`


Count by image:

| Version | Count |
| :--- | ---: |
| unknown | 3 |
| /subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-oaxghwhodsowiviicqrw-centralus,/subscriptions/8a205152-b25a-417f-a676-80465535a6c9/resourceGroups/rg-tc-eng-images/providers/Microsoft.Compute/images/imageset-sdxshifxkmcogvpvcftj-eastus | 1 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-10c009c7a14346ef8938 | 9 |
| projects/taskcluster-imaging/global/images/generic-worker-ubuntu-24-04-staging-iuujjhskyujdtccoemka | 1 |


| Worker Pool | Implementation | Version | Total Workers | Total Capacity |
| --- | --- | --- | ---: | ---: |
| **proj-fuzzing/grizzly-reduce-worker** |  | Version not determined; task not (yet) claimed | 240 | 240 |
| **proj-fuzzing/linux-pool1** |  | Version not determined; task not (yet) claimed | 59 | 59 |
| **proj-fuzzing/linux-pool103** |  | Version not determined; task not (yet) claimed | 184 | 184 |
| **proj-fuzzing/linux-pool11** |  | Version not determined; task not (yet) claimed | 48 | 48 |
| **proj-fuzzing/linux-pool125** |  | Version not determined; task not (yet) claimed | 41 | 41 |
| **proj-fuzzing/linux-pool128** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool14** |  | Version not determined; task not (yet) claimed | 72 | 72 |
| **proj-fuzzing/linux-pool4** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/linux-pool64** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-fuzzing/windows-pool79** |  | Version not determined; task not (yet) claimed | 0 | 0 |
| **proj-taskcluster/gw-ci-freebsd** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-ubuntu-staging-google** |  | Version not determined; task not (yet) claimed | 1 | 1 |
| **proj-taskcluster/gw-windows-11-24h2-staging** |  | Version not determined; task not (yet) claimed | 90 | 90 |
| **proj-taskcluster/gw-windows-2022-staging** |  | Version not determined; task not (yet) claimed | 4 | 4 |



[^1]: Those are the pools whose tasks were claimed and resolved by a worker as expected, but the worker did not publish either artifact `public/logs/live_backing.log` nor `public/logs/chain_of_trust.log`, which is the source used to identify the worker implementation.

[^2]: Probing task remains pending after two hours. Those are the pools that were not able to start any worker to claim the task within two hours.
