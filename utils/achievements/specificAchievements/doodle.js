const ghouls = [33,198,215,776,887,1434,1534,1658,2660,2983,3058,3291,3554,3797,3800,3918,3939,4199,4295,5462,5704,6139,6550];

export default function checkDoodles(indices) {
    let isDoodle = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isDoodle = true;
        }
    });
    return isDoodle;
}