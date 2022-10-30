const circletGhouls = [34,40,108,120,136,143,161,212,222,232,242,252,277,288,299,302,314,344,391,452,547,548,596,634,638,672,771,794,798,805,826,859,899,945,979,999,1001,1050,1107,1121,1130,1227,1305,1335,1342,1357,1405,1574,1617,1618,1636,1690,1694,1740,1746,1781,1785,1795,1820,1852,1893,1897,2003,2006,2025,2185,2204,2209,2294,2346,2368,2414,2416,2432,2561,2564,2618,2675,2685,2708,2734,2778,2880,2948,2952,2958,2986,3109,3110,3200,3218,3262,3269,3309,3330,3419,3485,3529,3725,3758,3877,4033,4037,4039,4059,4060,4063,4109,4199,4262,4324,4381,4416,4457,4484,4499,4649,4656,4662,4781,4841,4865,4882,4943,4972,5101,5152,5190,5258,5291,5297,5322,5353,5386,5434,5441,5476,5540,5575,5600,5616,5660,5667,5796,5807,5820,5845,5930,5950,5979,6018,6091,6117,6289,6378,6464,6497,6547,6560,6577,6617];
const crownGhouls = [44,54,58,95,188,230,312,331,493,496,527,542,546,549,550,630,640,646,655,710,728,735,801,981,1057,1169,1293,1435,1479,1507,1540,1591,1655,1669,1945,1949,2027,2048,2275,2279,2343,2406,2431,2454,2474,2512,2557,2566,2589,2702,2736,2785,2830,2831,2908,2924,2996,3075,3084,3124,3195,3226,3267,3283,3293,3310,3388,3400,3432,3470,3580,3604,3619,3675,3704,3797,3886,3939,3980,4035,4040,4102,4131,4305,4312,4356,4362,4367,4393,4462,4482,4608,4626,4732,4734,4800,4847,4862,4883,4896,4897,4913,5020,5035,5042,5105,5148,5184,5198,5228,5301,5363,5384,5413,5424,5425,5546,5558,5651,5729,5745,5751,5853,5869,5911,6299,6466,6505,6631];


export default function checkGreatness(indices) {
    let isGreat = false;
    let hasCirclet = false;
    let hasCrowned = false;
    indices.forEach((index) => {
        if (circletGhouls.includes(index)) {
            hasCirclet = true;
        }
        if (crownGhouls.includes(index)) {
            hasCrowned = true;
        }
    })
    if (hasCirclet == true && hasCrowned == true) {
        isGreat = true;
    }
    return isGreat;
}