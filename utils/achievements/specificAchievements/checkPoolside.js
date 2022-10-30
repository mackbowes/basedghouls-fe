let ghouls = [2641,3451,3773,5874,6253,6635];

export default function checkPoolside(indices) {
    let isPoolside = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isPoolside = true;
        }
    });
    return isPoolside;
}