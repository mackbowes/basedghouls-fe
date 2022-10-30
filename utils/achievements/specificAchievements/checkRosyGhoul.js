const ghouls = [298,899,1617,1686,2778,3328,3501,3910,4207,4868,5765,6033,6508];

export default function checkRosy(indices) {
    let isRosy = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isRosy = true;
        }
    });
    return isRosy;
}