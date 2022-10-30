const neonPalmGhouls = [3,27,64,83,205,366,378,440,441,466,475,678,765,997,1032,1094,1141,1215,1229,1282,1365,1463,1492,1552,1622,1662,1665,1691,1835,1858,1861,1882,1923,1987,1994,2021,2038,2076,2090,2224,2334,2342,2348,2361,2401,2694,2742,2904,2914,2973,2985,3061,3084,3094,3307,3314,3324,3396,3496,3554,3664,3668,3674,3767,3817,3838,3900,3945,4053,4076,4139,4246,4307,4319,4479,4551,4593,4733,4788,4851,4889,4940,4957,5034,5144,5154,5189,5192,5321,5508,5550,5596,5645,5681,5711,5733,5742,5764,5819,5835,5852,5870,5877,6039,6192,6473,6486,6584,6586,6601,6606];
const neonSunsetGhouls = [12,26,45,52,113,118,171,183,203,296,353,361,363,417,463,474,522,597,599,647,714,786,921,935,962,1027,1098,1100,1124,1162,1165,1181,1225,1270,1288,1379,1473,1486,1664,1693,1723,1727,1730,1767,1820,1824,1833,1937,1995,2045,2092,2094,2101,2294,2425,2604,2685,2750,2875,2954,3051,3054,3091,3107,3257,3395,3402,3459,3490,3571,3575,3580,3590,3623,3627,3679,3740,3741,3875,3932,3943,3985,4134,4143,4170,4201,4204,4291,4321,4351,4505,4508,4527,4652,4658,4701,4818,4830,4853,4882,4931,4983,5007,5097,5184,5247,5330,5360,5392,5442,5476,5492,5559,5570,5619,5798,5816,5845,5961,6113,6184,6191,6359,6385,6479,6518,6523,6528,6577,6579,6591,6636,6644];


export default function checkHumanity(indices) {
    let hasPalms = false;
    let hasSunset = false;
    let isARealHumanBeing = false;
    indices.forEach((index) => {
        if (neonPalmGhouls.includes(index)) {
            hasPalms = true;
        }
        if (neonSunsetGhouls.includes(index)) {
            hasSunset = true;
        }
    });
    if (hasPalms == true && hasSunset == true) {
        isARealHumanBeing = true;
    }
    return isARealHumanBeing;
}