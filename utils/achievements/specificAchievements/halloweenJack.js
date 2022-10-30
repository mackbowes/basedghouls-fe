const ghouls = [669,860,886,971,1009,1141,1166,1219,1642,1672,1689,1726,2074,2415,2479,2732,2764,2995,3692,3809,3909,4471,4885,5452,5544,5571,5715,6079,6101,6111,6417,6453,6625];

export default function checkHalloweenJack(indices) {
    let isHalloweenJack = false;
    indices.forEach((index) => {
        if (ghouls.includes(index)) {
            isHalloweenJack = true;
        }
    });
    return isHalloweenJack;
}