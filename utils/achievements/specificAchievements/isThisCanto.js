const ghouls = [2,17,44,86,120,126,137,153,202,277,286,317,320,328,346,356,393,414,438,515,538,551,563,607,679,690,718,753,795,811,820,830,852,890,897,922,1086,1117,1161,1240,1248,1258,1284,1299,1321,1343,1396,1399,1440,1467,1479,1508,1538,1559,1605,1611,1661,1680,1724,1725,1789,1794,1805,1829,1839,1840,1925,1963,2030,2037,2099,2117,2226,2284,2312,2336,2339,2343,2352,2415,2469,2507,2519,2527,2577,2595,2596,2621,2687,2706,2721,2777,2791,2817,2831,2861,2886,2909,2928,2932,2947,2991,3008,3043,3076,3109,3138,3143,3233,3244,3246,3251,3268,3274,3292,3389,3431,3436,3457,3474,3494,3508,3582,3594,3613,3619,3622,3644,3645,3662,3738,3763,3797,3809,3849,3864,3871,3884,3890,3922,3960,3999,4016,4052,4069,4089,4118,4242,4245,4298,4300,4338,4361,4376,4379,4398,4504,4568,4578,4611,4630,4691,4715,4716,4755,4840,4871,4879,4924,4932,5003,5049,5056,5104,5137,5161,5165,5207,5232,5246,5282,5307,5440,5486,5534,5565,5575,5622,5630,5664,5684,5695,5697,5718,5732,5739,5768,5780,5781,5799,5823,5830,5900,5911,5924,5935,5959,5970,5990,6029,6074,6089,6110,6117,6121,6181,6202,6219,6248,6352,6388,6406,6421,6445,6481,6495,6496,6515,6516,6534,6538,6572,6581,6653,6661];

export default function checkCanto(indices) {
    let chainGhoulCount = 0;
    let isCanto = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            chainGhoulCount++;
        }
    });
    if (chainGhoulCount >= 2) {
        isCanto = true;
    }
    return isCanto;
}