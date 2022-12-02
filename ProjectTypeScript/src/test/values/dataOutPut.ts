import { ListData } from "../../interfaces/listData.interface";
export const dataTestOutPut: ListData[] = [
  {
    id: 0,
    image: "blob:http://127.0.0.1:5173/f7f25ab6-0ab0-4216-aeb4-3668a774c27f",
    text: {
      responses: [
        {
          textAnnotations: [
            {
              locale: "es",
              description: "Somos un\nEquipo",
              boundingPoly: {
                vertices: [
                  {
                    x: 70,
                    y: 333,
                  },
                  {
                    x: 464,
                    y: 333,
                  },
                  {
                    x: 464,
                    y: 662,
                  },
                  {
                    x: 70,
                    y: 662,
                  },
                ],
              },
            },
            {
              description: "Somos",
              boundingPoly: {
                vertices: [
                  {
                    x: 160,
                    y: 350,
                  },
                  {
                    x: 354,
                    y: 404,
                  },
                  {
                    x: 336,
                    y: 468,
                  },
                  {
                    x: 142,
                    y: 414,
                  },
                ],
              },
            },
            {
              description: "un",
              boundingPoly: {
                vertices: [
                  {
                    x: 382,
                    y: 413,
                  },
                  {
                    x: 462,
                    y: 435,
                  },
                  {
                    x: 444,
                    y: 498,
                  },
                  {
                    x: 364,
                    y: 476,
                  },
                ],
              },
            },
            {
              description: "Equipo",
              boundingPoly: {
                vertices: [
                  {
                    x: 100,
                    y: 474,
                  },
                  {
                    x: 341,
                    y: 560,
                  },
                  {
                    x: 314,
                    y: 637,
                  },
                  {
                    x: 72,
                    y: 551,
                  },
                ],
              },
            },
          ],
          fullTextAnnotation: {
            pages: [
              {
                property: {
                  detectedLanguages: [
                    {
                      languageCode: "es",
                      confidence: 1,
                    },
                  ],
                },
                width: 541,
                height: 961,
                blocks: [
                  {
                    boundingBox: {
                      vertices: [
                        {
                          x: 142,
                          y: 333,
                        },
                        {
                          x: 464,
                          y: 435,
                        },
                        {
                          x: 392,
                          y: 662,
                        },
                        {
                          x: 70,
                          y: 560,
                        },
                      ],
                    },
                    paragraphs: [
                      {
                        boundingBox: {
                          vertices: [
                            {
                              x: 160,
                              y: 350,
                            },
                            {
                              x: 462,
                              y: 435,
                            },
                            {
                              x: 445,
                              y: 498,
                            },
                            {
                              x: 142,
                              y: 414,
                            },
                          ],
                        },
                        words: [
                          {
                            property: {
                              detectedLanguages: [
                                {
                                  languageCode: "es",
                                  confidence: 1,
                                },
                              ],
                            },
                            boundingBox: {
                              vertices: [
                                {
                                  x: 160,
                                  y: 350,
                                },
                                {
                                  x: 354,
                                  y: 404,
                                },
                                {
                                  x: 336,
                                  y: 468,
                                },
                                {
                                  x: 142,
                                  y: 414,
                                },
                              ],
                            },
                            symbols: [
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 160,
                                      y: 351,
                                    },
                                    {
                                      x: 208,
                                      y: 364,
                                    },
                                    {
                                      x: 191,
                                      y: 427,
                                    },
                                    {
                                      x: 142,
                                      y: 414,
                                    },
                                  ],
                                },
                                text: "S",
                                confidence: 0.47649696,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 190,
                                      y: 359,
                                    },
                                    {
                                      x: 235,
                                      y: 372,
                                    },
                                    {
                                      x: 218,
                                      y: 434,
                                    },
                                    {
                                      x: 172,
                                      y: 422,
                                    },
                                  ],
                                },
                                text: "o",
                                confidence: 0.4930039,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 235,
                                      y: 372,
                                    },
                                    {
                                      x: 290,
                                      y: 387,
                                    },
                                    {
                                      x: 272,
                                      y: 450,
                                    },
                                    {
                                      x: 217,
                                      y: 435,
                                    },
                                  ],
                                },
                                text: "m",
                                confidence: 0.6824408,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 293,
                                      y: 388,
                                    },
                                    {
                                      x: 336,
                                      y: 400,
                                    },
                                    {
                                      x: 319,
                                      y: 463,
                                    },
                                    {
                                      x: 275,
                                      y: 451,
                                    },
                                  ],
                                },
                                text: "o",
                                confidence: 0.5656792,
                              },
                              {
                                property: {
                                  detectedBreak: {
                                    type: "SPACE",
                                  },
                                },
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 319,
                                      y: 395,
                                    },
                                    {
                                      x: 354,
                                      y: 405,
                                    },
                                    {
                                      x: 336,
                                      y: 467,
                                    },
                                    {
                                      x: 301,
                                      y: 458,
                                    },
                                  ],
                                },
                                text: "s",
                                confidence: 0.45193696,
                              },
                            ],
                            confidence: 0.5339116,
                          },
                          {
                            property: {
                              detectedLanguages: [
                                {
                                  languageCode: "es",
                                  confidence: 1,
                                },
                              ],
                            },
                            boundingBox: {
                              vertices: [
                                {
                                  x: 382,
                                  y: 413,
                                },
                                {
                                  x: 462,
                                  y: 435,
                                },
                                {
                                  x: 444,
                                  y: 498,
                                },
                                {
                                  x: 364,
                                  y: 476,
                                },
                              ],
                            },
                            symbols: [
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 382,
                                      y: 413,
                                    },
                                    {
                                      x: 423,
                                      y: 425,
                                    },
                                    {
                                      x: 406,
                                      y: 487,
                                    },
                                    {
                                      x: 364,
                                      y: 476,
                                    },
                                  ],
                                },
                                text: "u",
                                confidence: 0.6783429,
                              },
                              {
                                property: {
                                  detectedBreak: {
                                    type: "LINE_BREAK",
                                  },
                                },
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 422,
                                      y: 424,
                                    },
                                    {
                                      x: 462,
                                      y: 435,
                                    },
                                    {
                                      x: 445,
                                      y: 498,
                                    },
                                    {
                                      x: 404,
                                      y: 487,
                                    },
                                  ],
                                },
                                text: "n",
                                confidence: 0.8453662,
                              },
                            ],
                            confidence: 0.7618545,
                          },
                        ],
                        confidence: 0.5990381,
                      },
                      {
                        boundingBox: {
                          vertices: [
                            {
                              x: 100,
                              y: 474,
                            },
                            {
                              x: 341,
                              y: 560,
                            },
                            {
                              x: 314,
                              y: 637,
                            },
                            {
                              x: 72,
                              y: 551,
                            },
                          ],
                        },
                        words: [
                          {
                            property: {
                              detectedLanguages: [
                                {
                                  languageCode: "es",
                                  confidence: 1,
                                },
                              ],
                            },
                            boundingBox: {
                              vertices: [
                                {
                                  x: 100,
                                  y: 474,
                                },
                                {
                                  x: 341,
                                  y: 560,
                                },
                                {
                                  x: 314,
                                  y: 637,
                                },
                                {
                                  x: 72,
                                  y: 551,
                                },
                              ],
                            },
                            symbols: [
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 100,
                                      y: 475,
                                    },
                                    {
                                      x: 149,
                                      y: 492,
                                    },
                                    {
                                      x: 122,
                                      y: 569,
                                    },
                                    {
                                      x: 73,
                                      y: 551,
                                    },
                                  ],
                                },
                                text: "E",
                                confidence: 0.8676015,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 149,
                                      y: 492,
                                    },
                                    {
                                      x: 189,
                                      y: 506,
                                    },
                                    {
                                      x: 161,
                                      y: 582,
                                    },
                                    {
                                      x: 122,
                                      y: 568,
                                    },
                                  ],
                                },
                                text: "q",
                                confidence: 0.8879288,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 194,
                                      y: 508,
                                    },
                                    {
                                      x: 235,
                                      y: 522,
                                    },
                                    {
                                      x: 207,
                                      y: 599,
                                    },
                                    {
                                      x: 167,
                                      y: 584,
                                    },
                                  ],
                                },
                                text: "u",
                                confidence: 0.9056864,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 223,
                                      y: 519,
                                    },
                                    {
                                      x: 251,
                                      y: 529,
                                    },
                                    {
                                      x: 224,
                                      y: 605,
                                    },
                                    {
                                      x: 196,
                                      y: 595,
                                    },
                                  ],
                                },
                                text: "i",
                                confidence: 0.89112586,
                              },
                              {
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 256,
                                      y: 530,
                                    },
                                    {
                                      x: 296,
                                      y: 544,
                                    },
                                    {
                                      x: 268,
                                      y: 620,
                                    },
                                    {
                                      x: 229,
                                      y: 606,
                                    },
                                  ],
                                },
                                text: "p",
                                confidence: 0.7622548,
                              },
                              {
                                property: {
                                  detectedBreak: {
                                    type: "LINE_BREAK",
                                  },
                                },
                                boundingBox: {
                                  vertices: [
                                    {
                                      x: 292,
                                      y: 543,
                                    },
                                    {
                                      x: 341,
                                      y: 560,
                                    },
                                    {
                                      x: 314,
                                      y: 637,
                                    },
                                    {
                                      x: 265,
                                      y: 619,
                                    },
                                  ],
                                },
                                text: "o",
                                confidence: 0.90635043,
                              },
                            ],
                            confidence: 0.87015796,
                          },
                        ],
                        confidence: 0.87015796,
                      },
                    ],
                    blockType: "TEXT",
                    confidence: 0.7241703,
                  },
                ],
                confidence: 0.7241703,
              },
            ],
            text: "Somos un\nEquipo",
          },
        },
      ],
    },
    color: false,
  },
];
