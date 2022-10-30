const moonbasedGhouls = [18,288,291,501,706,743,788,818,957,971,1002,1021,1036,1080,1338,1457,1619,1909,1956,2104,2489,2610,2962,2994,3283,3286,3428,3652,3695,3845,4046,4054,4070,4173,4183,4194,4223,4273,4288,4391,4406,4524,4764,4815,5020,5067,5205,5252,5341,5433,5465,5605,5635,5825,6013,6362,6448];

export default function checkRoverDrivingClub(indices) {
    let moonbasedCount = 0;
    let hasRoverDrivingClub = false;
    indices.forEach((index) => {
        if (moonbasedGhouls.includes(index)) {
            moonbasedCount++;
        }
    });
    if (moonbasedCount >= 2) {
        hasRoverDrivingClub = true;
    }
    return hasRoverDrivingClub;
}