let whiteBeamGhouls = [
  260, 923, 974, 1290, 1474, 2686, 2692, 2816, 3132, 3134, 3505, 3829, 3964,
  3998, 4244, 4393, 5054, 5055, 5256, 5678, 5703, 5923, 6214, 6243,
];
let redBeamGhouls = [31,276,1173,1567,1577,1816,2717,3008,3170,4590,4744,5533,5705,5919,6438,6470];
let pinkBeamGhouls = [320,829,857,1870,1986,2799,3278,3663,3932,4015,4202,4544,4614,4792,4796,5069,5266,5736,6536];
let greenBeamGhouls = [353,529,1727,2048,2713,3227,3449,4109,4386,4447,4485,4898,5143,5371,6123,6254,6597];
let goldBeamGhouls = [168,970,1746,1802,1807,2002,2118,2744,3624,5081,5275,5289,5666,5797,6184,6344,6553];
let flameGhouls = [483,749,1181,1222,1399,1539,1788,1899,1960,2457,2696,3308,3834,3985,4529,4886,5345,5446,5757,5969];
let blueBeamGhouls = [159,594,1657,2065,3779,4056,4577,4866,4905,5374,6201];
let allPowerfulGhouls = [...whiteBeamGhouls, ...redBeamGhouls, ...pinkBeamGhouls, ...greenBeamGhouls, ...goldBeamGhouls, ...flameGhouls, ...blueBeamGhouls];

export default function checkPower(indices) {
  let isPowerful = false;
  let powerCount = 0;
  indices.forEach((index) => {
    if (allPowerfulGhouls.includes(index)) {
      powerCount++;
    }
  });
  if (powerCount > 2) {
    isPowerful = true;
  }
  return isPowerful;
}