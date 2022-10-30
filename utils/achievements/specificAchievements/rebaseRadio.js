const ghouls = [170,186,341,380,732,941,987,1495,1543,1546,1802,1916,2049,2058,2170,2400,2491,2514,2637,2665,2709,3017,3045,3214,3398,3561,3666,3783,3910,3915,3982,4129,4422,4662,4700,5466,5557,5640,5643,5820,5874,6123,6156,6227,6257,6272,6299,6508,6554];

export default function checkRebaseRadio(indices) {
    let isRadioFan = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isRadioFan = true;
        }
    });
    return isRadioFan;
}