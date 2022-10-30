const plaguedGhouls = [
  20, 22, 45, 46, 49, 67, 71, 82, 95, 97, 104, 110, 117, 122, 124, 133, 155,
  159, 161, 171, 195, 202, 213, 221, 230, 236, 239, 256, 258, 268, 278, 287,
  291, 314, 319, 323, 329, 337, 361, 375, 378, 420, 435, 441, 442, 444, 448,
  466, 467, 471, 474, 476, 480, 485, 486, 504, 506, 509, 523, 525, 532, 535,
  537, 571, 576, 582, 589, 592, 598, 601, 604, 611, 617, 618, 621, 622, 623,
  634, 640, 647, 661, 671, 675, 676, 692, 706, 710, 717, 718, 723, 726, 739,
  742, 746, 747, 749, 751, 755, 760, 761, 763, 765, 789, 797, 816, 842, 854,
  857, 877, 878, 882, 889, 891, 910, 918, 921, 922, 923, 925, 935, 937, 945,
  946, 950, 952, 960, 961, 968, 980, 982, 992, 1001, 1003, 1007, 1016, 1017,
  1027, 1040, 1042, 1043, 1048, 1052, 1057, 1059, 1060, 1063, 1066, 1067, 1068,
  1076, 1080, 1083, 1085, 1087, 1090, 1091, 1097, 1098, 1100, 1107, 1111, 1120,
  1137, 1161, 1182, 1190, 1197, 1203, 1205, 1208, 1213, 1214, 1217, 1218, 1239,
  1253, 1266, 1283, 1284, 1306, 1312, 1313, 1319, 1342, 1350, 1352, 1357, 1358,
  1360, 1365, 1378, 1389, 1393, 1395, 1397, 1407, 1412, 1414, 1416, 1423, 1425,
  1445, 1447, 1451, 1475, 1476, 1487, 1495, 1496, 1507, 1535, 1539, 1554, 1556,
  1572, 1576, 1581, 1585, 1597, 1600, 1604, 1612, 1620, 1621, 1623, 1626, 1631,
  1633, 1642, 1644, 1646, 1648, 1653, 1654, 1665, 1671, 1677, 1679, 1706, 1720,
  1724, 1728, 1731, 1740, 1741, 1745, 1749, 1752, 1756, 1757, 1761, 1763, 1785,
  1792, 1795, 1809, 1816, 1818, 1827, 1849, 1860, 1882, 1889, 1910, 1916, 1927,
  1928, 1942, 1944, 1945, 1950, 1951, 1952, 1954, 1955, 1959, 1970, 1983, 1990,
  1995, 2024, 2032, 2048, 2054, 2057, 2061, 2064, 2068, 2070, 2080, 2083, 2091,
  2115, 2129, 2130, 2131, 2141, 2142, 2143, 2154, 2155, 2161, 2164, 2171, 2183,
  2192, 2196, 2205, 2208, 2209, 2214, 2222, 2238, 2263, 2274, 2276, 2277, 2285,
  2286, 2287, 2288, 2291, 2326, 2329, 2333, 2347, 2348, 2354, 2358, 2361, 2364,
  2378, 2383, 2385, 2386, 2393, 2396, 2405, 2408, 2417, 2424, 2428, 2443, 2444,
  2448, 2450, 2458, 2462, 2467, 2480, 2483, 2486, 2498, 2506, 2508, 2529, 2547,
  2549, 2552, 2553, 2561, 2566, 2571, 2578, 2579, 2580, 2589, 2594, 2596, 2598,
  2600, 2609, 2612, 2615, 2619, 2625, 2629, 2636, 2651, 2658, 2660, 2668, 2669,
  2671, 2673, 2685, 2687, 2690, 2698, 2703, 2704, 2708, 2709, 2723, 2727, 2730,
  2738, 2751, 2761, 2767, 2773, 2776, 2779, 2789, 2795, 2802, 2814, 2824, 2828,
  2833, 2836, 2837, 2863, 2865, 2870, 2872, 2876, 2891, 2895, 2896, 2898, 2908,
  2911, 2929, 2944, 2950, 2976, 2987, 2994, 2996, 2998, 2999, 3010, 3022, 3025,
  3040, 3043, 3044, 3076, 3077, 3080, 3083, 3087, 3106, 3115, 3116, 3118, 3125,
  3126, 3129, 3135, 3148, 3170, 3184, 3188, 3206, 3219, 3220, 3222, 3224, 3268,
  3269, 3272, 3277, 3278, 3280, 3294, 3297, 3309, 3316, 3319, 3325, 3344, 3346,
  3347, 3349, 3361, 3363, 3370, 3387, 3392, 3400, 3434, 3435, 3446, 3449, 3453,
  3465, 3468, 3476, 3477, 3482, 3489, 3491, 3492, 3494, 3498, 3502, 3503, 3506,
  3510, 3511, 3514, 3533, 3538, 3556, 3567, 3568, 3578, 3580, 3594, 3595, 3602,
  3607, 3658, 3659, 3667, 3670, 3674, 3677, 3690, 3707, 3713, 3714, 3717, 3724,
  3731, 3753, 3779, 3783, 3787, 3797, 3799, 3800, 3803, 3804, 3805, 3810, 3812,
  3822, 3823, 3842, 3843, 3855, 3868, 3873, 3879, 3881, 3884, 3885, 3887, 3891,
  3899, 3900, 3902, 3909, 3929, 3945, 3951, 3953, 3956, 3962, 3966, 3972, 3995,
  3997, 4003, 4005, 4007, 4016, 4019, 4021, 4024, 4025, 4028, 4030, 4031, 4041,
  4049, 4050, 4058, 4060, 4061, 4065, 4108, 4115, 4116, 4120, 4124, 4128, 4149,
  4151, 4159, 4161, 4168, 4177, 4178, 4192, 4198, 4217, 4235, 4240, 4244, 4248,
  4250, 4257, 4261, 4272, 4275, 4279, 4295, 4305, 4327, 4338, 4339, 4355, 4356,
  4358, 4365, 4367, 4381, 4390, 4412, 4419, 4424, 4443, 4475, 4476, 4482, 4487,
  4505, 4512, 4515, 4522, 4538, 4566, 4567, 4570, 4572, 4573, 4577, 4580, 4585,
  4588, 4591, 4600, 4603, 4615, 4617, 4623, 4628, 4634, 4639, 4643, 4650, 4651,
  4662, 4667, 4676, 4689, 4692, 4709, 4712, 4713, 4715, 4716, 4720, 4731, 4747,
  4760, 4771, 4773, 4777, 4784, 4818, 4840, 4843, 4844, 4851, 4861, 4863, 4865,
  4866, 4875, 4878, 4884, 4901, 4904, 4917, 4919, 4923, 4929, 4935, 4937, 4942,
  4955, 4956, 4965, 4968, 4971, 4975, 4997, 5001, 5014, 5059, 5071, 5073, 5086,
  5092, 5099, 5104, 5111, 5117, 5118, 5127, 5132, 5148, 5150, 5152, 5158, 5166,
  5177, 5179, 5181, 5188, 5213, 5225, 5227, 5240, 5242, 5248, 5256, 5259, 5262,
  5264, 5267, 5271, 5288, 5299, 5304, 5317, 5321, 5324, 5343, 5346, 5349, 5353,
  5355, 5359, 5363, 5366, 5368, 5372, 5375, 5378, 5393, 5410, 5417, 5429, 5434,
  5436, 5458, 5463, 5465, 5474, 5489, 5502, 5509, 5510, 5511, 5514, 5515, 5519,
  5523, 5527, 5535, 5545, 5550, 5557, 5570, 5571, 5573, 5575, 5579, 5582, 5599,
  5602, 5603, 5634, 5637, 5640, 5642, 5649, 5656, 5664, 5670, 5676, 5686, 5687,
  5696, 5701, 5704, 5730, 5746, 5768, 5774, 5777, 5784, 5792, 5796, 5797, 5800,
  5807, 5811, 5814, 5821, 5823, 5827, 5835, 5840, 5841, 5847, 5861, 5863, 5868,
  5869, 5878, 5880, 5881, 5897, 5905, 5907, 5908, 5913, 5921, 5922, 5926, 5937,
  5940, 5948, 5951, 5952, 5957, 5958, 5962, 5967, 5968, 5981, 5983, 5984, 5992,
  5996, 5998, 6004, 6013, 6014, 6016, 6030, 6046, 6048, 6051, 6052, 6068, 6071,
  6072, 6073, 6076, 6089, 6095, 6108, 6117, 6132, 6145, 6146, 6149, 6150, 6161,
  6167, 6172, 6178, 6195, 6201, 6202, 6218, 6230, 6234, 6238, 6247, 6250, 6251,
  6255, 6263, 6265, 6270, 6276, 6280, 6283, 6288, 6304, 6305, 6309, 6311, 6328,
  6331, 6341, 6349, 6354, 6361, 6363, 6367, 6376, 6398, 6414, 6416, 6431, 6433,
  6455, 6473, 6474, 6489, 6493, 6506, 6526, 6528, 6549, 6563, 6573, 6581, 6590,
  6594, 6598, 6603, 6626, 6632, 6636, 6638, 6639, 6655, 6659, 6664, 6665,
];

export default function checkItAintEasyBeing(indices) {
  let greenCount = 0;
  let isGreen = false;
  indices.forEach((index) => {
    if (plaguedGhouls.includes(index)) {
      greenCount++;
    }
  });
  if (greenCount >= 2) {
    isGreen = true;
  }
  return isGreen;
}