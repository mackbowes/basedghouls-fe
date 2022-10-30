let ghoulList = [
  70, 207, 1134, 1244, 1328, 1404, 1480, 1814, 2181, 2418, 2446, 2482, 3006,
  3096, 3451, 3668, 3687, 3895, 4120, 4543, 4791, 4878, 4980, 5113, 5378, 5505,
  5828, 5977, 5997, 6083, 6160, 6337, 6412, 6600,
];

export default function checkRobBased(indices) {
  let isRobBased = false;
  indices.forEach((index) => {
    if (ghoulList.includes(index)) {
        isRobBased = true;
    }
  });
  return isRobBased;
}
