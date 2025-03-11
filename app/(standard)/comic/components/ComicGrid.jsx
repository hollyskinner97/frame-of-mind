import { Grid2 as Grid } from "@mui/material";
import Panel from "./Panel";

export default function ComicGrid({ panels }) {
  panels = [
    [
      {
        id: 0,
        x1: 315,
        y1: 19,
        x2: 315,
        y2: 19,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 212,
        y1: 136,
        x2: 212,
        y2: 136,
        text: "test",
      },
      {
        id: 2,
        type: "pencil",
        points: [
          {
            x: 292,
            y: 114,
          },
          {
            x: 292,
            y: 114,
          },
          {
            x: 291,
            y: 111,
          },
          {
            x: 290,
            y: 107,
          },
          {
            x: 287,
            y: 103,
          },
          {
            x: 281,
            y: 96,
          },
          {
            x: 267,
            y: 86,
          },
          {
            x: 253,
            y: 81,
          },
          {
            x: 238,
            y: 79,
          },
          {
            x: 222,
            y: 81,
          },
          {
            x: 204,
            y: 92,
          },
          {
            x: 189,
            y: 119,
          },
          {
            x: 186,
            y: 136,
          },
          {
            x: 186,
            y: 156,
          },
          {
            x: 191,
            y: 175,
          },
          {
            x: 203,
            y: 196,
          },
          {
            x: 207,
            y: 201,
          },
          {
            x: 224,
            y: 211,
          },
          {
            x: 238,
            y: 212,
          },
          {
            x: 261,
            y: 208,
          },
          {
            x: 277,
            y: 200,
          },
          {
            x: 293,
            y: 191,
          },
          {
            x: 308,
            y: 183,
          },
          {
            x: 322,
            y: 167,
          },
          {
            x: 324,
            y: 151,
          },
          {
            x: 318,
            y: 131,
          },
          {
            x: 305,
            y: 110,
          },
          {
            x: 287,
            y: 93,
          },
          {
            x: 269,
            y: 85,
          },
          {
            x: 257,
            y: 88,
          },
        ],
      },
    ],
    [
      {
        id: 0,
        x1: 138,
        y1: 102,
        x2: 337,
        y2: 236,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [139.06448718636662, 102.72271115950413],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.01318023219346, 102.46481199078268, 294.2542909940159,
                    104.63482389310835, 338.0045579874147, 102.64027939221813,
                  ],
                },
                {
                  op: "move",
                  data: [137.71312967841058, 102.56811666211925],
                },
                {
                  op: "bcurveTo",
                  data: [
                    209.09825596151285, 102.74558396783152, 280.0239200238867,
                    102.73923958201482, 337.6659182161031, 102.10022460483178,
                  ],
                },
                {
                  op: "move",
                  data: [338.29698718046404, 101.27565172922107],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.1216854870928, 132.79034108462199, 334.2869744879995,
                    164.36424113199703, 335.98181160671675, 237.93893719573717,
                  ],
                },
                {
                  op: "move",
                  data: [336.3984854826663, 102.64430131242437],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.8019874449785, 144.21190041487097, 337.60404088555254,
                    185.01862590063675, 337.1077613607852, 236.2406628874091,
                  ],
                },
                {
                  op: "move",
                  data: [336.5976340465085, 237.66479603134914],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.7736879931298, 235.48048200458268, 248.6058428635274,
                    234.78731024288922, 139.18855388451294, 237.73881256420225,
                  ],
                },
                {
                  op: "move",
                  data: [336.5161879960835, 235.09016635280102],
                },
                {
                  op: "bcurveTo",
                  data: [
                    287.17431378877905, 235.3777171339082, 238.53639526562822,
                    234.80224940070048, 137.46219768582705, 235.7219684191019,
                  ],
                },
                {
                  op: "move",
                  data: [136.71757653596885, 236.6389603561307],
                },
                {
                  op: "bcurveTo",
                  data: [
                    139.13833083614475, 191.10080964665391, 140.52202110561802,
                    141.80466630742697, 137.91888911202858, 102.45728789189042,
                  ],
                },
                {
                  op: "move",
                  data: [138.14418278611268, 235.36796216384428],
                },
                {
                  op: "bcurveTo",
                  data: [
                    137.49997031671904, 202.26279110127007, 136.65612598476943,
                    168.42481531176887, 137.54403664549397, 102.07731204416365,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 215,
        y1: 156,
        x2: 215,
        y2: 156,
        text: "",
      },
    ],
    [
      {
        id: 0,
        x1: 90,
        y1: 140,
        x2: 207,
        y2: 85,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [89.19976876759425, 141.8721580476117],
                },
                {
                  op: "bcurveTo",
                  data: [
                    115.40634838728295, 125.74746805138099, 143.49449913738118,
                    112.65773025219721, 208.37370704252072, 86.06818638290295,
                  ],
                },
                {
                  op: "move",
                  data: [89.32251282747218, 139.6658388116389],
                },
                {
                  op: "bcurveTo",
                  data: [
                    135.37523787037432, 118.67190352254144, 181.50918258895666,
                    96.63941188934221, 206.52265327913514, 84.48427704114003,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        x1: 157,
        y1: 114,
        x2: 166,
        y2: 210,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [155.47610959590324, 112.25674741413394],
                },
                {
                  op: "bcurveTo",
                  data: [
                    159.7885963613179, 135.19895744193676, 160.06402674546806,
                    151.94439876117545, 165.65199875748397, 209.30248149359159,
                  ],
                },
                {
                  op: "move",
                  data: [157.5372989329747, 113.19575023074877],
                },
                {
                  op: "bcurveTo",
                  data: [
                    159.5965672520064, 140.6222224930581, 161.4249295815254,
                    167.855439266024, 166.3490660213469, 209.03087060039402,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 2,
        x1: 199,
        y1: 138,
        x2: 242,
        y2: 122,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [199.80112890911585, 136.0797441861035],
                },
                {
                  op: "bcurveTo",
                  data: [
                    211.573422433671, 133.38899778271372, 224.8718761017557,
                    129.0786409088964, 241.02413419603442, 123.27555434564583,
                  ],
                },
                {
                  op: "move",
                  data: [199.31645905878085, 137.34543809680287],
                },
                {
                  op: "bcurveTo",
                  data: [
                    211.91158357168356, 132.51045012042428, 226.44089505299561,
                    128.21236754545302, 242.43920699046362, 122.65339209437956,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 3,
        x1: 199,
        y1: 139,
        x2: 209,
        y2: 202,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [200.75423655542036, 137.1025383037906],
                },
                {
                  op: "bcurveTo",
                  data: [
                    200.5136323052721, 153.82805733711504, 204.50493965392545,
                    166.33284888450748, 207.11483076587632, 200.72753087664637,
                  ],
                },
                {
                  op: "move",
                  data: [199.53101141183993, 139.1680432214979],
                },
                {
                  op: "bcurveTo",
                  data: [
                    202.67014372563716, 160.04910803050095, 204.80410105959191,
                    179.06564778036608, 208.70444093241332, 202.10945305603073,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 4,
        x1: 205,
        y1: 200,
        x2: 257,
        y2: 195,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [203.61764579470568, 198.07225874695064],
                },
                {
                  op: "bcurveTo",
                  data: [
                    219.1217758284304, 199.22550410000304, 231.0522744981055,
                    198.90566018914888, 255.4797177205129, 194.4386054710253,
                  ],
                },
                {
                  op: "move",
                  data: [204.8080256129885, 200.42084364167252],
                },
                {
                  op: "bcurveTo",
                  data: [
                    217.31405540607614, 199.3426576259163, 231.23304399951212,
                    197.913705633347, 257.55999526483555, 194.26423421931855,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 5,
        x1: 202,
        y1: 165,
        x2: 243,
        y2: 157,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [203.54703056324698, 165.35713948568502],
                },
                {
                  op: "bcurveTo",
                  data: [
                    217.27602594727594, 160.03348145879545, 232.78217524831345,
                    160.39210427559394, 242.61236813993565, 156.85441712336203,
                  ],
                },
                {
                  op: "move",
                  data: [201.00662674294003, 164.9841292144121],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.23454182820834, 162.00449030974792, 229.5489490699249,
                    159.7633334263381, 243.05938143913738, 157.6907556813588,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 6,
        x1: 306,
        y1: 93,
        x2: 328,
        y2: 103,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [307.98544957294916, 92.04798186386364],
                },
                {
                  op: "bcurveTo",
                  data: [
                    313.07862842483235, 96.47441124844926, 317.73592303593136,
                    99.9849522408238, 329.6468100851867, 102.50234310942724,
                  ],
                },
                {
                  op: "move",
                  data: [305.18482310993, 93.7643614695552],
                },
                {
                  op: "bcurveTo",
                  data: [
                    312.04940988404087, 95.42948136154293, 317.68289510207285,
                    99.5592715868406, 328.5494993180824, 103.62571638885342,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 7,
        x1: 278,
        y1: 114,
        x2: 306,
        y2: 92,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [278.47623824260046, 115.59664023933712],
                },
                {
                  op: "bcurveTo",
                  data: [
                    288.1297337040648, 106.21203462519092, 301.5500638150386,
                    95.23041317579842, 306.1534410872312, 90.49652352627442,
                  ],
                },
                {
                  op: "move",
                  data: [277.49264902562726, 114.43459978547823],
                },
                {
                  op: "bcurveTo",
                  data: [
                    284.85395300739987, 108.82141811134515, 293.6820299911947,
                    103.05937269431388, 305.96337432510944, 92.91371995206188,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 8,
        x1: 279,
        y1: 113,
        x2: 291,
        y2: 137,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [280.8148988070397, 112.71878095600387],
                },
                {
                  op: "bcurveTo",
                  data: [
                    284.6650796584585, 120.93592051313462, 289.1345865316577,
                    128.71756679158716, 289.87025282690337, 136.45063878046778,
                  ],
                },
                {
                  op: "move",
                  data: [279.08817029015904, 113.42156481497463],
                },
                {
                  op: "bcurveTo",
                  data: [
                    281.3247042297338, 119.33229629660572, 285.26200232832156,
                    125.5906418188687, 290.12498107204374, 137.39072847090503,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 9,
        x1: 292,
        y1: 136,
        x2: 321,
        y2: 135,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [291.97183192412206, 135.70933916214233],
                },
                {
                  op: "bcurveTo",
                  data: [
                    303.95519691894856, 134.49283575649554, 315.7475814933685,
                    136.24800387707688, 320.60031035126934, 135.79748160744265,
                  ],
                },
                {
                  op: "move",
                  data: [292.014560284853, 135.2984446145237],
                },
                {
                  op: "bcurveTo",
                  data: [
                    301.0759597365734, 136.12268639361085, 310.3429098097865,
                    136.26133880223915, 320.81223897774174, 134.45571599790682,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 10,
        x1: 321,
        y1: 133,
        x2: 344,
        y2: 163,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [321.5066322278337, 131.40539341397326],
                },
                {
                  op: "bcurveTo",
                  data: [
                    328.5890823447756, 144.2275843105264, 336.03405515666157,
                    154.92683323637473, 344.93736634444406, 161.62575054602866,
                  ],
                },
                {
                  op: "move",
                  data: [321.6650787394845, 133.23099362099725],
                },
                {
                  op: "bcurveTo",
                  data: [
                    329.22154295528827, 143.4272411610334, 337.7349490385409,
                    154.16944449319342, 344.28034562129176, 162.8067564514752,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 11,
        x1: 326,
        y1: 187,
        x2: 343,
        y2: 162,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [326.6601394789286, 188.43487991970113],
                },
                {
                  op: "bcurveTo",
                  data: [
                    331.2109786328111, 178.8869245697971, 337.67239657884704,
                    171.26009983220214, 341.47067499534575, 162.37264351347287,
                  ],
                },
                {
                  op: "move",
                  data: [325.2057228474549, 187.9680372830669],
                },
                {
                  op: "bcurveTo",
                  data: [
                    330.64639542236057, 181.36825600524787, 335.38979526020654,
                    173.5048483140377, 342.8515755366856, 162.0446002234891,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 12,
        x1: 282,
        y1: 178,
        x2: 326,
        y2: 187,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [281.12623822559675, 176.6340626964834],
                },
                {
                  op: "bcurveTo",
                  data: [
                    291.9426277162914, 179.3656886822685, 300.35712444685606,
                    180.54793378773974, 325.8749345101211, 185.81679273839566,
                  ],
                },
                {
                  op: "move",
                  data: [282.61433031423985, 178.3228675656236],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.2210167300956, 179.1946212370035, 305.8949773020723,
                    182.1258496391375, 325.5847626334218, 186.62568960238391,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 13,
        x1: 347,
        y1: 96,
        x2: 414,
        y2: 80,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [346.39322608936214, 94.6328830120888],
                },
                {
                  op: "bcurveTo",
                  data: [
                    371.29641762337985, 90.4310372607419, 395.69061464822454,
                    84.59432720671565, 413.79648880811953, 80.60030478152808,
                  ],
                },
                {
                  op: "move",
                  data: [346.07995561465714, 96.36156589323372],
                },
                {
                  op: "bcurveTo",
                  data: [
                    370.25946654278914, 88.97141100179637, 396.1200978709679,
                    83.72874732702677, 413.25462930706493, 79.53629668197742,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 14,
        x1: 381,
        y1: 91,
        x2: 384,
        y2: 193,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [380.4482854307574, 89.55146534723507],
                },
                {
                  op: "bcurveTo",
                  data: [
                    381.4099328377237, 129.91169331634114, 383.50660175286043,
                    168.0622882683739, 385.707005354304, 193.04376299586733,
                  ],
                },
                {
                  op: "move",
                  data: [380.2835792788342, 91.37044139983625],
                },
                {
                  op: "bcurveTo",
                  data: [
                    382.8018885899413, 129.01979753535124, 383.9356462419421,
                    167.43499985823587, 383.32448413251973, 192.68341363514702,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 15,
        x1: 62,
        y1: 44,
        x2: 470,
        y2: 242,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [61.761843989, 44.10738386482837],
                },
                {
                  op: "bcurveTo",
                  data: [
                    205.29341825688988, 45.02167903201634, 351.11412290559196,
                    44.38614789930623, 469.98849964957446, 44.255013689987535,
                  ],
                },
                {
                  op: "move",
                  data: [61.74513056867098, 44.39826761866417],
                },
                {
                  op: "bcurveTo",
                  data: [
                    168.3676463659021, 46.48790734123053, 274.66448840443593,
                    46.28434586090158, 469.63573453394906, 43.80643309332108,
                  ],
                },
                {
                  op: "move",
                  data: [469.3134156347866, 44.53124640561603],
                },
                {
                  op: "bcurveTo",
                  data: [
                    470.37302545166534, 90.25728119875909, 470.47739517648785,
                    136.24443078644467, 470.44681141483045, 241.59467331125944,
                  ],
                },
                {
                  op: "move",
                  data: [469.6505075718703, 44.61895099052109],
                },
                {
                  op: "bcurveTo",
                  data: [
                    471.11523558708524, 92.45256808864467, 471.22772097801516,
                    139.39253725294478, 470.2292762625406, 241.91298520235887,
                  ],
                },
                {
                  op: "move",
                  data: [469.97021421775844, 241.13229226358922],
                },
                {
                  op: "bcurveTo",
                  data: [
                    327.802373716166, 240.28796478511967, 185.06712008980736,
                    239.27719812937406, 61.09536734366035, 241.23582423124742,
                  ],
                },
                {
                  op: "move",
                  data: [469.9944443979223, 241.66907053319534],
                },
                {
                  op: "bcurveTo",
                  data: [
                    326.04735357070507, 242.5003625988671, 182.536190354549,
                    242.32022130609698, 61.753498653119564, 242.14389082939437,
                  ],
                },
                {
                  op: "move",
                  data: [60.852017251920344, 243.49440251417963],
                },
                {
                  op: "bcurveTo",
                  data: [
                    62.37625037916231, 177.26284062752748, 62.4561998946993,
                    112.5332904528612, 62.0825806120181, 42.52296753974216,
                  ],
                },
                {
                  op: "move",
                  data: [62.93708077998314, 241.0288269943608],
                },
                {
                  op: "bcurveTo",
                  data: [
                    60.96074859182149, 191.09421934543266, 61.85254816373504,
                    141.21651632110198, 61.17828862468318, 43.55372843956675,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
    ],
    [
      {
        id: 0,
        x1: 138,
        y1: 102,
        x2: 337,
        y2: 236,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [139.06448718636662, 102.72271115950413],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.01318023219346, 102.46481199078268, 294.2542909940159,
                    104.63482389310835, 338.0045579874147, 102.64027939221813,
                  ],
                },
                {
                  op: "move",
                  data: [137.71312967841058, 102.56811666211925],
                },
                {
                  op: "bcurveTo",
                  data: [
                    209.09825596151285, 102.74558396783152, 280.0239200238867,
                    102.73923958201482, 337.6659182161031, 102.10022460483178,
                  ],
                },
                {
                  op: "move",
                  data: [338.29698718046404, 101.27565172922107],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.1216854870928, 132.79034108462199, 334.2869744879995,
                    164.36424113199703, 335.98181160671675, 237.93893719573717,
                  ],
                },
                {
                  op: "move",
                  data: [336.3984854826663, 102.64430131242437],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.8019874449785, 144.21190041487097, 337.60404088555254,
                    185.01862590063675, 337.1077613607852, 236.2406628874091,
                  ],
                },
                {
                  op: "move",
                  data: [336.5976340465085, 237.66479603134914],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.7736879931298, 235.48048200458268, 248.6058428635274,
                    234.78731024288922, 139.18855388451294, 237.73881256420225,
                  ],
                },
                {
                  op: "move",
                  data: [336.5161879960835, 235.09016635280102],
                },
                {
                  op: "bcurveTo",
                  data: [
                    287.17431378877905, 235.3777171339082, 238.53639526562822,
                    234.80224940070048, 137.46219768582705, 235.7219684191019,
                  ],
                },
                {
                  op: "move",
                  data: [136.71757653596885, 236.6389603561307],
                },
                {
                  op: "bcurveTo",
                  data: [
                    139.13833083614475, 191.10080964665391, 140.52202110561802,
                    141.80466630742697, 137.91888911202858, 102.45728789189042,
                  ],
                },
                {
                  op: "move",
                  data: [138.14418278611268, 235.36796216384428],
                },
                {
                  op: "bcurveTo",
                  data: [
                    137.49997031671904, 202.26279110127007, 136.65612598476943,
                    168.42481531176887, 137.54403664549397, 102.07731204416365,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 215,
        y1: 156,
        x2: 215,
        y2: 156,
        text: "",
      },
    ],
    [
      {
        id: 0,
        x1: 315,
        y1: 19,
        x2: 315,
        y2: 19,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
                {
                  op: "move",
                  data: [315, 19],
                },
                {
                  op: "bcurveTo",
                  data: [315, 19, 315, 19, 315, 19],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 212,
        y1: 136,
        x2: 212,
        y2: 136,
        text: "test",
      },
      {
        id: 2,
        type: "pencil",
        points: [
          {
            x: 292,
            y: 114,
          },
          {
            x: 292,
            y: 114,
          },
          {
            x: 291,
            y: 111,
          },
          {
            x: 290,
            y: 107,
          },
          {
            x: 287,
            y: 103,
          },
          {
            x: 281,
            y: 96,
          },
          {
            x: 267,
            y: 86,
          },
          {
            x: 253,
            y: 81,
          },
          {
            x: 238,
            y: 79,
          },
          {
            x: 222,
            y: 81,
          },
          {
            x: 204,
            y: 92,
          },
          {
            x: 189,
            y: 119,
          },
          {
            x: 186,
            y: 136,
          },
          {
            x: 186,
            y: 156,
          },
          {
            x: 191,
            y: 175,
          },
          {
            x: 203,
            y: 196,
          },
          {
            x: 207,
            y: 201,
          },
          {
            x: 224,
            y: 211,
          },
          {
            x: 238,
            y: 212,
          },
          {
            x: 261,
            y: 208,
          },
          {
            x: 277,
            y: 200,
          },
          {
            x: 293,
            y: 191,
          },
          {
            x: 308,
            y: 183,
          },
          {
            x: 322,
            y: 167,
          },
          {
            x: 324,
            y: 151,
          },
          {
            x: 318,
            y: 131,
          },
          {
            x: 305,
            y: 110,
          },
          {
            x: 287,
            y: 93,
          },
          {
            x: 269,
            y: 85,
          },
          {
            x: 257,
            y: 88,
          },
        ],
      },
    ],
    [
      {
        id: 0,
        x1: 138,
        y1: 102,
        x2: 337,
        y2: 236,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [139.06448718636662, 102.72271115950413],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.01318023219346, 102.46481199078268, 294.2542909940159,
                    104.63482389310835, 338.0045579874147, 102.64027939221813,
                  ],
                },
                {
                  op: "move",
                  data: [137.71312967841058, 102.56811666211925],
                },
                {
                  op: "bcurveTo",
                  data: [
                    209.09825596151285, 102.74558396783152, 280.0239200238867,
                    102.73923958201482, 337.6659182161031, 102.10022460483178,
                  ],
                },
                {
                  op: "move",
                  data: [338.29698718046404, 101.27565172922107],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.1216854870928, 132.79034108462199, 334.2869744879995,
                    164.36424113199703, 335.98181160671675, 237.93893719573717,
                  ],
                },
                {
                  op: "move",
                  data: [336.3984854826663, 102.64430131242437],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.8019874449785, 144.21190041487097, 337.60404088555254,
                    185.01862590063675, 337.1077613607852, 236.2406628874091,
                  ],
                },
                {
                  op: "move",
                  data: [336.5976340465085, 237.66479603134914],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.7736879931298, 235.48048200458268, 248.6058428635274,
                    234.78731024288922, 139.18855388451294, 237.73881256420225,
                  ],
                },
                {
                  op: "move",
                  data: [336.5161879960835, 235.09016635280102],
                },
                {
                  op: "bcurveTo",
                  data: [
                    287.17431378877905, 235.3777171339082, 238.53639526562822,
                    234.80224940070048, 137.46219768582705, 235.7219684191019,
                  ],
                },
                {
                  op: "move",
                  data: [136.71757653596885, 236.6389603561307],
                },
                {
                  op: "bcurveTo",
                  data: [
                    139.13833083614475, 191.10080964665391, 140.52202110561802,
                    141.80466630742697, 137.91888911202858, 102.45728789189042,
                  ],
                },
                {
                  op: "move",
                  data: [138.14418278611268, 235.36796216384428],
                },
                {
                  op: "bcurveTo",
                  data: [
                    137.49997031671904, 202.26279110127007, 136.65612598476943,
                    168.42481531176887, 137.54403664549397, 102.07731204416365,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 215,
        y1: 156,
        x2: 215,
        y2: 156,
        text: "",
      },
    ],
    [
      {
        id: 0,
        x1: 90,
        y1: 140,
        x2: 207,
        y2: 85,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [89.19976876759425, 141.8721580476117],
                },
                {
                  op: "bcurveTo",
                  data: [
                    115.40634838728295, 125.74746805138099, 143.49449913738118,
                    112.65773025219721, 208.37370704252072, 86.06818638290295,
                  ],
                },
                {
                  op: "move",
                  data: [89.32251282747218, 139.6658388116389],
                },
                {
                  op: "bcurveTo",
                  data: [
                    135.37523787037432, 118.67190352254144, 181.50918258895666,
                    96.63941188934221, 206.52265327913514, 84.48427704114003,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        x1: 157,
        y1: 114,
        x2: 166,
        y2: 210,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [155.47610959590324, 112.25674741413394],
                },
                {
                  op: "bcurveTo",
                  data: [
                    159.7885963613179, 135.19895744193676, 160.06402674546806,
                    151.94439876117545, 165.65199875748397, 209.30248149359159,
                  ],
                },
                {
                  op: "move",
                  data: [157.5372989329747, 113.19575023074877],
                },
                {
                  op: "bcurveTo",
                  data: [
                    159.5965672520064, 140.6222224930581, 161.4249295815254,
                    167.855439266024, 166.3490660213469, 209.03087060039402,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 2,
        x1: 199,
        y1: 138,
        x2: 242,
        y2: 122,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [199.80112890911585, 136.0797441861035],
                },
                {
                  op: "bcurveTo",
                  data: [
                    211.573422433671, 133.38899778271372, 224.8718761017557,
                    129.0786409088964, 241.02413419603442, 123.27555434564583,
                  ],
                },
                {
                  op: "move",
                  data: [199.31645905878085, 137.34543809680287],
                },
                {
                  op: "bcurveTo",
                  data: [
                    211.91158357168356, 132.51045012042428, 226.44089505299561,
                    128.21236754545302, 242.43920699046362, 122.65339209437956,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 3,
        x1: 199,
        y1: 139,
        x2: 209,
        y2: 202,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [200.75423655542036, 137.1025383037906],
                },
                {
                  op: "bcurveTo",
                  data: [
                    200.5136323052721, 153.82805733711504, 204.50493965392545,
                    166.33284888450748, 207.11483076587632, 200.72753087664637,
                  ],
                },
                {
                  op: "move",
                  data: [199.53101141183993, 139.1680432214979],
                },
                {
                  op: "bcurveTo",
                  data: [
                    202.67014372563716, 160.04910803050095, 204.80410105959191,
                    179.06564778036608, 208.70444093241332, 202.10945305603073,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 4,
        x1: 205,
        y1: 200,
        x2: 257,
        y2: 195,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [203.61764579470568, 198.07225874695064],
                },
                {
                  op: "bcurveTo",
                  data: [
                    219.1217758284304, 199.22550410000304, 231.0522744981055,
                    198.90566018914888, 255.4797177205129, 194.4386054710253,
                  ],
                },
                {
                  op: "move",
                  data: [204.8080256129885, 200.42084364167252],
                },
                {
                  op: "bcurveTo",
                  data: [
                    217.31405540607614, 199.3426576259163, 231.23304399951212,
                    197.913705633347, 257.55999526483555, 194.26423421931855,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 5,
        x1: 202,
        y1: 165,
        x2: 243,
        y2: 157,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [203.54703056324698, 165.35713948568502],
                },
                {
                  op: "bcurveTo",
                  data: [
                    217.27602594727594, 160.03348145879545, 232.78217524831345,
                    160.39210427559394, 242.61236813993565, 156.85441712336203,
                  ],
                },
                {
                  op: "move",
                  data: [201.00662674294003, 164.9841292144121],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.23454182820834, 162.00449030974792, 229.5489490699249,
                    159.7633334263381, 243.05938143913738, 157.6907556813588,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 6,
        x1: 306,
        y1: 93,
        x2: 328,
        y2: 103,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [307.98544957294916, 92.04798186386364],
                },
                {
                  op: "bcurveTo",
                  data: [
                    313.07862842483235, 96.47441124844926, 317.73592303593136,
                    99.9849522408238, 329.6468100851867, 102.50234310942724,
                  ],
                },
                {
                  op: "move",
                  data: [305.18482310993, 93.7643614695552],
                },
                {
                  op: "bcurveTo",
                  data: [
                    312.04940988404087, 95.42948136154293, 317.68289510207285,
                    99.5592715868406, 328.5494993180824, 103.62571638885342,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 7,
        x1: 278,
        y1: 114,
        x2: 306,
        y2: 92,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [278.47623824260046, 115.59664023933712],
                },
                {
                  op: "bcurveTo",
                  data: [
                    288.1297337040648, 106.21203462519092, 301.5500638150386,
                    95.23041317579842, 306.1534410872312, 90.49652352627442,
                  ],
                },
                {
                  op: "move",
                  data: [277.49264902562726, 114.43459978547823],
                },
                {
                  op: "bcurveTo",
                  data: [
                    284.85395300739987, 108.82141811134515, 293.6820299911947,
                    103.05937269431388, 305.96337432510944, 92.91371995206188,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 8,
        x1: 279,
        y1: 113,
        x2: 291,
        y2: 137,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [280.8148988070397, 112.71878095600387],
                },
                {
                  op: "bcurveTo",
                  data: [
                    284.6650796584585, 120.93592051313462, 289.1345865316577,
                    128.71756679158716, 289.87025282690337, 136.45063878046778,
                  ],
                },
                {
                  op: "move",
                  data: [279.08817029015904, 113.42156481497463],
                },
                {
                  op: "bcurveTo",
                  data: [
                    281.3247042297338, 119.33229629660572, 285.26200232832156,
                    125.5906418188687, 290.12498107204374, 137.39072847090503,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 9,
        x1: 292,
        y1: 136,
        x2: 321,
        y2: 135,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [291.97183192412206, 135.70933916214233],
                },
                {
                  op: "bcurveTo",
                  data: [
                    303.95519691894856, 134.49283575649554, 315.7475814933685,
                    136.24800387707688, 320.60031035126934, 135.79748160744265,
                  ],
                },
                {
                  op: "move",
                  data: [292.014560284853, 135.2984446145237],
                },
                {
                  op: "bcurveTo",
                  data: [
                    301.0759597365734, 136.12268639361085, 310.3429098097865,
                    136.26133880223915, 320.81223897774174, 134.45571599790682,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 10,
        x1: 321,
        y1: 133,
        x2: 344,
        y2: 163,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [321.5066322278337, 131.40539341397326],
                },
                {
                  op: "bcurveTo",
                  data: [
                    328.5890823447756, 144.2275843105264, 336.03405515666157,
                    154.92683323637473, 344.93736634444406, 161.62575054602866,
                  ],
                },
                {
                  op: "move",
                  data: [321.6650787394845, 133.23099362099725],
                },
                {
                  op: "bcurveTo",
                  data: [
                    329.22154295528827, 143.4272411610334, 337.7349490385409,
                    154.16944449319342, 344.28034562129176, 162.8067564514752,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 11,
        x1: 326,
        y1: 187,
        x2: 343,
        y2: 162,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [326.6601394789286, 188.43487991970113],
                },
                {
                  op: "bcurveTo",
                  data: [
                    331.2109786328111, 178.8869245697971, 337.67239657884704,
                    171.26009983220214, 341.47067499534575, 162.37264351347287,
                  ],
                },
                {
                  op: "move",
                  data: [325.2057228474549, 187.9680372830669],
                },
                {
                  op: "bcurveTo",
                  data: [
                    330.64639542236057, 181.36825600524787, 335.38979526020654,
                    173.5048483140377, 342.8515755366856, 162.0446002234891,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 12,
        x1: 282,
        y1: 178,
        x2: 326,
        y2: 187,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [281.12623822559675, 176.6340626964834],
                },
                {
                  op: "bcurveTo",
                  data: [
                    291.9426277162914, 179.3656886822685, 300.35712444685606,
                    180.54793378773974, 325.8749345101211, 185.81679273839566,
                  ],
                },
                {
                  op: "move",
                  data: [282.61433031423985, 178.3228675656236],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.2210167300956, 179.1946212370035, 305.8949773020723,
                    182.1258496391375, 325.5847626334218, 186.62568960238391,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 13,
        x1: 347,
        y1: 96,
        x2: 414,
        y2: 80,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [346.39322608936214, 94.6328830120888],
                },
                {
                  op: "bcurveTo",
                  data: [
                    371.29641762337985, 90.4310372607419, 395.69061464822454,
                    84.59432720671565, 413.79648880811953, 80.60030478152808,
                  ],
                },
                {
                  op: "move",
                  data: [346.07995561465714, 96.36156589323372],
                },
                {
                  op: "bcurveTo",
                  data: [
                    370.25946654278914, 88.97141100179637, 396.1200978709679,
                    83.72874732702677, 413.25462930706493, 79.53629668197742,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 14,
        x1: 381,
        y1: 91,
        x2: 384,
        y2: 193,
        type: "line",
        roughElement: {
          shape: "line",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [380.4482854307574, 89.55146534723507],
                },
                {
                  op: "bcurveTo",
                  data: [
                    381.4099328377237, 129.91169331634114, 383.50660175286043,
                    168.0622882683739, 385.707005354304, 193.04376299586733,
                  ],
                },
                {
                  op: "move",
                  data: [380.2835792788342, 91.37044139983625],
                },
                {
                  op: "bcurveTo",
                  data: [
                    382.8018885899413, 129.01979753535124, 383.9356462419421,
                    167.43499985823587, 383.32448413251973, 192.68341363514702,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 15,
        x1: 62,
        y1: 44,
        x2: 470,
        y2: 242,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [61.761843989, 44.10738386482837],
                },
                {
                  op: "bcurveTo",
                  data: [
                    205.29341825688988, 45.02167903201634, 351.11412290559196,
                    44.38614789930623, 469.98849964957446, 44.255013689987535,
                  ],
                },
                {
                  op: "move",
                  data: [61.74513056867098, 44.39826761866417],
                },
                {
                  op: "bcurveTo",
                  data: [
                    168.3676463659021, 46.48790734123053, 274.66448840443593,
                    46.28434586090158, 469.63573453394906, 43.80643309332108,
                  ],
                },
                {
                  op: "move",
                  data: [469.3134156347866, 44.53124640561603],
                },
                {
                  op: "bcurveTo",
                  data: [
                    470.37302545166534, 90.25728119875909, 470.47739517648785,
                    136.24443078644467, 470.44681141483045, 241.59467331125944,
                  ],
                },
                {
                  op: "move",
                  data: [469.6505075718703, 44.61895099052109],
                },
                {
                  op: "bcurveTo",
                  data: [
                    471.11523558708524, 92.45256808864467, 471.22772097801516,
                    139.39253725294478, 470.2292762625406, 241.91298520235887,
                  ],
                },
                {
                  op: "move",
                  data: [469.97021421775844, 241.13229226358922],
                },
                {
                  op: "bcurveTo",
                  data: [
                    327.802373716166, 240.28796478511967, 185.06712008980736,
                    239.27719812937406, 61.09536734366035, 241.23582423124742,
                  ],
                },
                {
                  op: "move",
                  data: [469.9944443979223, 241.66907053319534],
                },
                {
                  op: "bcurveTo",
                  data: [
                    326.04735357070507, 242.5003625988671, 182.536190354549,
                    242.32022130609698, 61.753498653119564, 242.14389082939437,
                  ],
                },
                {
                  op: "move",
                  data: [60.852017251920344, 243.49440251417963],
                },
                {
                  op: "bcurveTo",
                  data: [
                    62.37625037916231, 177.26284062752748, 62.4561998946993,
                    112.5332904528612, 62.0825806120181, 42.52296753974216,
                  ],
                },
                {
                  op: "move",
                  data: [62.93708077998314, 241.0288269943608],
                },
                {
                  op: "bcurveTo",
                  data: [
                    60.96074859182149, 191.09421934543266, 61.85254816373504,
                    141.21651632110198, 61.17828862468318, 43.55372843956675,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
    ],
    [
      {
        id: 0,
        x1: 138,
        y1: 102,
        x2: 337,
        y2: 236,
        type: "rectangle",
        roughElement: {
          shape: "rectangle",
          sets: [
            {
              type: "path",
              ops: [
                {
                  op: "move",
                  data: [139.06448718636662, 102.72271115950413],
                },
                {
                  op: "bcurveTo",
                  data: [
                    216.01318023219346, 102.46481199078268, 294.2542909940159,
                    104.63482389310835, 338.0045579874147, 102.64027939221813,
                  ],
                },
                {
                  op: "move",
                  data: [137.71312967841058, 102.56811666211925],
                },
                {
                  op: "bcurveTo",
                  data: [
                    209.09825596151285, 102.74558396783152, 280.0239200238867,
                    102.73923958201482, 337.6659182161031, 102.10022460483178,
                  ],
                },
                {
                  op: "move",
                  data: [338.29698718046404, 101.27565172922107],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.1216854870928, 132.79034108462199, 334.2869744879995,
                    164.36424113199703, 335.98181160671675, 237.93893719573717,
                  ],
                },
                {
                  op: "move",
                  data: [336.3984854826663, 102.64430131242437],
                },
                {
                  op: "bcurveTo",
                  data: [
                    337.8019874449785, 144.21190041487097, 337.60404088555254,
                    185.01862590063675, 337.1077613607852, 236.2406628874091,
                  ],
                },
                {
                  op: "move",
                  data: [336.5976340465085, 237.66479603134914],
                },
                {
                  op: "bcurveTo",
                  data: [
                    294.7736879931298, 235.48048200458268, 248.6058428635274,
                    234.78731024288922, 139.18855388451294, 237.73881256420225,
                  ],
                },
                {
                  op: "move",
                  data: [336.5161879960835, 235.09016635280102],
                },
                {
                  op: "bcurveTo",
                  data: [
                    287.17431378877905, 235.3777171339082, 238.53639526562822,
                    234.80224940070048, 137.46219768582705, 235.7219684191019,
                  ],
                },
                {
                  op: "move",
                  data: [136.71757653596885, 236.6389603561307],
                },
                {
                  op: "bcurveTo",
                  data: [
                    139.13833083614475, 191.10080964665391, 140.52202110561802,
                    141.80466630742697, 137.91888911202858, 102.45728789189042,
                  ],
                },
                {
                  op: "move",
                  data: [138.14418278611268, 235.36796216384428],
                },
                {
                  op: "bcurveTo",
                  data: [
                    137.49997031671904, 202.26279110127007, 136.65612598476943,
                    168.42481531176887, 137.54403664549397, 102.07731204416365,
                  ],
                },
              ],
            },
          ],
          options: {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: 0.95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            randomizer: {
              seed: 0,
            },
          },
        },
      },
      {
        id: 1,
        type: "text",
        x1: 215,
        y1: 156,
        x2: 215,
        y2: 156,
        text: "",
      },
    ],
  ];

  return (
    <Grid container spacing={2}>
      {panels.map((panel, i) => (
        <Grid
          key={i}
          size={3}
          sx={{
            border: "1px solid",
            borderRadius: 3,
            bgcolor: "primary.light",
            aspectRatio: "1/1",
          }}
        >
          <Panel panelData={panel} />
        </Grid>
      ))}
    </Grid>
  );
}
