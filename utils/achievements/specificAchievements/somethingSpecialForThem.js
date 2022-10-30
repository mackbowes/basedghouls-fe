const flameGhouls = [483,749,1181,1222,1399,1539,1788,1899,1960,2457,2696,3308,3834,3985,4529,4886,5345,5446,5757,5969];

export default function checkSomethingSpecialForThem(indices) {
    let flameGhoulCount = 0;
    let hasSomethingSpecial = false;
    indices.forEach((index) => {
        if (flameGhouls.includes(index)) {
            flameGhoulCount++;
        }
    });
    if (flameGhoulCount >= 2) {
        hasSomethingSpecial = true;
    }
    return hasSomethingSpecial;
}