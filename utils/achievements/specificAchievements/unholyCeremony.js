const idolGhouls = [116,167,302,328,600,705,772,784,929,946,1141,1386,1418,1461,1520,2013,2139,2231,2374,2393,2464,2565,2573,2855,2952,2962,3308,3397,3415,3452,3763,3790,3810,3846,3994,4111,4213,4279,4483,4691,4765,4828,4976,5138,5231,5288,5410,5624,5633,5741,5839,5887,6147,6216,6238,6522,6526,6552,6607];
const infernalGhouls = [724,742,930,933,1348,2384,2484,2687,2875,3063,3289,3417,4324,4326,4388,4415,4867,5160,5453,5908,6172,6231];

export default function checkUnholiness(indices) {
    let hasIdol = false;
    let hasInfernalFlame = false;
    let isUnholy = false;
    indices.forEach((index) => {
        if (idolGhouls.includes(index)) {
            hasIdol = true;
        }
        if (infernalGhouls.includes(index)) {
            hasInfernalFlame = true;
        }
    });
    if (hasIdol == true && hasInfernalFlame == true) {
        isUnholy = true;
    }
    return isUnholy;
}