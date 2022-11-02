const basedClassicGhouls = [72,82,87,143,174,180,238,299,350,357,371,376,429,453,516,637,673,755,776,782,877,899,939,954,976,1006,1076,1093,1144,1179,1245,1257,1296,1337,1342,1373,1432,1453,1472,1483,1507,1606,1658,1778,1809,1845,1854,1856,1864,1874,1898,1919,1927,1948,1949,1960,1970,2066,2114,2153,2192,2215,2260,2273,2280,2291,2293,2332,2353,2390,2399,2455,2511,2568,2593,2624,2626,2654,2689,2730,2752,2771,2779,2786,2794,2809,2852,2887,2908,2918,2939,2945,2959,2974,3024,3056,3075,3120,3146,3151,3254,3276,3295,3331,3333,3399,3414,3421,3442,3482,3492,3501,3515,3598,3618,3620,3634,3669,3677,3721,3766,3887,3892,3944,3953,3954,3967,4018,4042,4175,4332,4369,4439,4490,4525,4530,4564,4687,4732,4773,4808,4817,4857,4860,4872,4893,4922,4999,5039,5098,5150,5166,5224,5248,5262,5264,5268,5278,5297,5311,5405,5472,5474,5482,5493,5506,5516,5521,5523,5545,5561,5562,5566,5607,5620,5677,5765,5770,5784,5790,5858,5886,5919,5929,5930,5985,6106,6125,6126,6160,6177,6198,6253,6262,6265,6285,6298,6312,6410,6414,6435,6453,6472,6493,6504,6560,6565,6605,6620,6631,6633];
const moonbasedGhouls = [18,288,291,501,706,743,788,818,957,971,1002,1021,1036,1080,1338,1457,1619,1909,1956,2104,2489,2610,2962,2994,3283,3286,3428,3652,3695,3845,4046,4054,4070,4173,4183,4194,4223,4273,4288,4391,4406,4524,4764,4815,5020,5067,5205,5252,5341,5433,5465,5605,5635,5825,6013,6362,6448];
const basedLoanGhouls = [124,169,247,298,382,520,569,626,866,888,892,1012,1044,1256,1330,1345,1346,1427,1617,1735,1830,1838,1905,2089,2177,2311,2377,2645,2916,3016,3036,3114,3121,3132,3159,3321,3444,3478,3600,3607,3808,4000,4199,4205,4208,4374,4725,5329,5710,5713,5740,5744,6139,6304,6316];

export default function checkBasedDevelopmentCycle(indices) {
    let hasBasedClassic = false;
    let hasMoonbasedGhouls = false;
    let hasBasedLoanGhouls = false;
    let isBasedDevelopmentCycle = false;
    indices.forEach((index) => {
        if (basedClassicGhouls.includes(index)) {
            hasBasedClassic = true;
        }
        if (moonbasedGhouls.includes(index)) {
            hasMoonbasedGhouls = true;
        }
        if (basedLoanGhouls.includes(index)) {
            hasBasedLoanGhouls = true;
        }
    });
    if (hasBasedClassic == true && hasMoonbasedGhouls == true && hasBasedLoanGhouls == true) {
        isBasedDevelopmentCycle = true;
    }
    return isBasedDevelopmentCycle;
}