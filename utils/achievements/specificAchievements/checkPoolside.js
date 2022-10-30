let ghouls = [1483,2641,2809,3451,3561,3773,5874,6080,6253,6409,6635];

export default function checkPoolside(indices) {
    let isPoolside = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isPoolside = true;
        }
    });
    return isPoolside;
}