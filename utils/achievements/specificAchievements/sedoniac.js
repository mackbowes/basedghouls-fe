const sedoniacGhouls = [3,77,111,265,310,317,338,358,368,401,519,541,563,565,696,807,836,876,925,927,963,999,1029,1034,1059,1174,1198,1276,1280,1319,1326,1333,1339,1356,1385,1622,1684,1690,2037,2041,2043,2067,2073,2122,2167,2174,2198,2250,2261,2321,2374,2379,2405,2441,2471,2575,2651,2676,2677,2739,2757,3004,3021,3033,3034,3038,3049,3124,3191,3198,3237,3312,3396,3459,3477,3510,3540,3601,3626,3688,3693,3760,3842,3887,3976,3996,4020,4045,4075,4089,4146,4215,4219,4243,4245,4340,4354,4403,4420,4465,4550,4575,4597,4609,4648,4721,4889,4908,4935,5000,5191,5193,5200,5203,5211,5248,5265,5303,5413,5426,5528,5577,5598,5614,5667,5697,5859,5939,6021,6037,6169,6189,6277,6385,6451,6548];

export default function checkSedoniacs(indices) {
    let isSedoniac = false;
    indices.forEach((index) => {
        if (sedoniacGhouls.includes(index)) {
            isSedoniac = true;
        }
    });
    return isSedoniac;
}