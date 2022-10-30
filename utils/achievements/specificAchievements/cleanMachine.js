
const ghouls = [9,10,61,70,79,87,91,92,108,126,128,136,144,147,207,252,274,281,313,321,352,357,365,419,516,521,549,591,659,690,710,780,885,890,905,1005,1058,1097,1108,1112,1119,1134,1142,1149,1150,1151,1237,1239,1244,1261,1281,1286,1328,1377,1381,1383,1404,1412,1445,1451,1457,1466,1471,1480,1489,1496,1522,1555,1576,1589,1604,1616,1640,1647,1664,1674,1699,1700,1733,1735,1756,1778,1782,1793,1814,1819,1919,1929,1946,2002,2004,2099,2106,2137,2161,2181,2251,2364,2365,2369,2397,2398,2404,2416,2418,2425,2446,2482,2487,2488,2491,2503,2509,2511,2553,2592,2617,2642,2649,2677,2696,2709,2788,2805,2819,2837,2843,2865,2873,2900,2971,2973,2992,2999,3006,3027,3028,3040,3077,3081,3092,3096,3134,3148,3180,3197,3225,3246,3268,3277,3332,3404,3451,3516,3528,3545,3608,3630,3632,3634,3659,3668,3687,3691,3726,3768,3777,3778,3789,3857,3895,3947,3971,3989,3997,4012,4015,4027,4041,4062,4068,4107,4115,4120,4153,4204,4208,4217,4229,4235,4282,4285,4310,4319,4337,4347,4371,4389,4406,4425,4434,4467,4468,4472,4474,4486,4517,4520,4522,4543,4607,4619,4639,4651,4658,4697,4701,4706,4776,4791,4812,4835,4848,4855,4862,4875,4878,4916,4942,4960,4964,4980,5014,5028,5037,5052,5057,5058,5088,5109,5113,5116,5164,5183,5192,5215,5217,5273,5280,5289,5312,5322,5328,5332,5378,5420,5460,5484,5489,5505,5554,5608,5612,5620,5636,5653,5686,5712,5756,5760,5810,5828,5865,5926,5936,5963,5967,5977,5989,5997,6004,6014,6020,6083,6093,6110,6160,6185,6214,6246,6247,6288,6315,6337,6400,6402,6405,6412,6429,6440,6467,6487,6496,6512,6523,6565,6573,6577,6582,6588,6600,6612,6635,6639,6647,6650,6661];

export default function checkCleanness(indices) {
    let isClean = false;
    let cleanCount = 0;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            cleanCount++;
        }
    });
    if (cleanCount >= 2) {
        isClean = true;
    }
    return isClean;
}