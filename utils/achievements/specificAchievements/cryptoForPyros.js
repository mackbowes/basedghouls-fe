const flameGhouls = [483,749,1181,1222,1399,1539,1788,1899,1960,2457,2696,3308,3834,3985,4529,4886,5345,5446,5757,5969];
const torchGhouls = [30,33,75,127,146,154,158,177,199,240,243,250,299,318,323,377,385,395,398,402,452,457,484,495,500,510,511,520,526,606,679,743,779,841,883,985,1063,1081,1136,1144,1167,1195,1196,1205,1317,1318,1320,1338,1350,1450,1470,1491,1495,1505,1513,1629,1637,1702,1734,1740,1748,1770,1837,1847,1854,1871,1874,1877,1879,1883,1888,1889,1966,1974,2056,2065,2070,2130,2147,2158,2168,2171,2198,2202,2245,2291,2311,2356,2377,2414,2426,2429,2450,2453,2463,2474,2477,2480,2486,2536,2547,2557,2572,2574,2577,2602,2609,2667,2678,2791,2793,2842,2867,2907,2916,2964,3030,3033,3064,3108,3137,3140,3145,3196,3219,3238,3299,3304,3328,3356,3370,3385,3429,3431,3447,3504,3508,3529,3577,3583,3589,3622,3684,3737,3739,3750,3752,3753,3850,3876,3889,3891,3894,3909,3935,3970,4075,4078,4116,4187,4222,4239,4244,4260,4263,4267,4286,4287,4300,4302,4360,4378,4381,4385,4426,4515,4526,4529,4552,4581,4610,4676,4718,4823,4837,4842,4866,4897,4900,4910,4945,4948,4977,4996,5019,5032,5070,5075,5093,5111,5162,5165,5167,5239,5254,5324,5341,5358,5370,5377,5399,5412,5651,5686,5700,5763,5764,5789,5819,5825,5857,5867,5873,5875,5909,5938,5943,5965,5973,5995,6018,6028,6117,6124,6143,6149,6165,6211,6278,6286,6350,6355,6403,6419,6425,6441,6449,6513,6530,6532,6568,6571,6578,6579,6594,6660];
const candleGhouls = [8,12,13,18,20,22,38,51,57,62,78,86,103,112,132,198,210,217,237,271,282,290,300,330,345,361,394,431,433,450,451,462,481,505,519,599,605,652,656,666,667,680,693,709,719,731,733,745,755,774,777,804,824,845,861,901,905,912,939,943,975,980,994,1024,1036,1037,1038,1053,1059,1068,1076,1082,1100,1102,1118,1139,1153,1165,1193,1236,1249,1260,1288,1294,1297,1367,1371,1387,1390,1477,1478,1488,1491,1493,1499,1500,1517,1519,1527,1537,1568,1569,1596,1610,1635,1643,1662,1680,1750,1756,1770,1777,1780,1789,1791,1811,1835,1870,1895,1931,1940,1966,1998,2007,2034,2043,2054,2071,2080,2086,2096,2101,2114,2115,2118,2143,2145,2149,2153,2186,2187,2192,2207,2234,2250,2280,2286,2320,2324,2339,2340,2347,2348,2352,2361,2370,2376,2388,2395,2407,2412,2426,2439,2462,2485,2496,2499,2523,2540,2549,2551,2565,2567,2584,2609,2627,2638,2647,2686,2711,2759,2773,2796,2801,2813,2836,2839,2845,2852,2903,2944,2988,2992,3008,3009,3030,3042,3048,3071,3086,3098,3103,3104,3107,3114,3121,3122,3137,3209,3221,3227,3253,3256,3265,3320,3337,3389,3392,3401,3439,3463,3493,3499,3511,3530,3546,3564,3566,3607,3634,3636,3653,3660,3663,3674,3684,3698,3712,3714,3716,3751,3760,3762,3785,3802,3814,3851,3858,3889,3892,3893,3926,3933,3946,4009,4010,4016,4036,4053,4075,4087,4147,4161,4164,4193,4218,4231,4240,4258,4292,4363,4364,4392,4403,4447,4450,4460,4470,4501,4505,4520,4545,4551,4555,4560,4574,4595,4609,4634,4638,4650,4667,4670,4673,4692,4696,4703,4729,4730,4735,4741,4752,4758,4762,4767,4773,4775,4802,4837,4843,4850,4870,4877,4892,4900,4902,4934,4940,4955,4982,4992,4993,5004,5040,5050,5061,5064,5072,5118,5128,5132,5169,5176,5204,5208,5220,5250,5275,5284,5306,5333,5334,5347,5360,5364,5370,5376,5377,5400,5411,5416,5473,5474,5525,5527,5528,5536,5552,5577,5584,5589,5595,5596,5597,5601,5606,5634,5649,5677,5681,5695,5704,5705,5720,5727,5746,5783,5819,5826,5836,5855,5864,5894,5952,5954,5980,5981,5989,6013,6027,6038,6043,6047,6053,6058,6066,6077,6118,6130,6153,6154,6157,6164,6168,6173,6175,6179,6186,6187,6195,6230,6238,6259,6267,6293,6301,6322,6333,6341,6345,6348,6356,6358,6401,6407,6428,6436,6445,6446,6448,6501,6506,6509,6539,6546,6555,6568,6573,6595,6612,6613];

export default function checkPyrophilia(indices) {
    let hasFlameGhoul = false;
    let hasTorchGhoul = false;
    let hasCandleGhoul = false;
    let isPyrophilic = false;
    indices.forEach((index) => {
        if (flameGhouls.includes(index)) {
            hasFlameGhoul = true;
        }
        if (torchGhouls.includes(index)) {
            hasTorchGhoul = true;
        }
        if (candleGhouls.includes(index)) {
            hasCandleGhoul = true;
        }
    });
    if (hasFlameGhoul == true && hasTorchGhoul == true && hasCandleGhoul == true) {
        isPyrophilic = true;
    }
    return isPyrophilic;
}