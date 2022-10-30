const ghouls = [269,289,341,504,563,721,724,1256,1450,1528,1607,1632,1644,1854,1911,1979,2121,2254,2598,2608,2691,2735,2942,3172,3254,3340,3369,3561,3610,4046,4078,4124,4146,4157,4158,4480,4664,4722,4806,4937,5055,5426,5437,5572,5785,5842,6106,6158,6334,6623];

export default function checkTallAndFit(indices) {
    let isTallAndFit = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isTallAndFit = true;
        }
    });
    return isTallAndFit;
}