const fleshners = [
  25, 37, 65, 159, 246, 248, 595, 642, 670, 687, 810, 868, 967, 1352, 1396,
  1442, 1476, 1521, 1609, 1628, 1631, 1792, 1825, 1838, 1846, 1888, 1964, 2000,
  2031, 2128, 2170, 2289, 2374, 2459, 2784, 2820, 2941, 3204, 3312, 3362, 3415,
  3473, 3477, 3505, 3571, 3639, 3761, 3822, 4000, 4017, 4126, 4263, 4357, 4418,
  4633, 4665, 4804, 5030, 5092, 5195, 5244, 5357, 5787, 5792, 6096, 6174, 6227,
  6261, 6352, 6375,
];
const basedLoans = [
  124, 169, 247, 298, 382, 520, 569, 626, 866, 888, 892, 1012, 1044, 1256, 1330,
  1345, 1346, 1427, 1617, 1735, 1830, 1838, 1905, 2089, 2177, 2311, 2377, 2645,
  2916, 3016, 3036, 3114, 3121, 3132, 3159, 3321, 3444, 3478, 3600, 3607, 3808,
  4000, 4199, 4205, 4208, 4374, 4725, 5329, 5710, 5713, 5740, 5744, 6139, 6304,
  6316,
];

export default function checkLeverage(indices) {
    let isFleshner = false;
    let isBasedLoans = false;
    let isMoreLeverage = false;
    indices.forEach((index) => {
        if (fleshners.includes(index)) {
            isFleshner = true;
        }
        if (basedLoans.includes(index)) {
            isBasedLoans = true;
        }
    });
    if (isFleshner && isBasedLoans) {
        isMoreLeverage = true;
    }
    return isMoreLeverage;
}