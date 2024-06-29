P5Capture.setDefaultOptions({
  format: "mp4",
  framerate: 60,
  bitrate: 15000,
  disableScaling: true
});

let pMapper;
let MapMain, MapSide;
let ShaderMain, ShaderSide;
let pgMain, pgSide;
let texture;
let customFont;
let dataMock = [
  { timestamp: "2024-06-27 09:35:51.000000", bikes: [{ id: "aaa", x: -93, y: 14 }, { id: "bbb", x: -85, y: -79 }, { id: "ccc", x: -47, y: -70 }, { id: "ddd", x: 61, y: 23 }, { id: "eee", x: 38, y: 23 }] },
  { timestamp: "2024-06-27 09:36:51.000000", bikes: [{ id: "aaa", x: 92, y: 11 }, { id: "bbb", x: -5, y: -40 }, { id: "ccc", x: -37, y: 8 }, { id: "ddd", x: -70, y: -43 }] },
  { timestamp: "2024-06-27 09:37:51.000000", bikes: [{ id: "aaa", x: 71, y: -21 }, { id: "bbb", x: -67, y: -30 }, { id: "ccc", x: -40, y: 1 }, { id: "ddd", x: 43, y: 91 }, { id: "eee", x: -98, y: -21 }, { id: "fff", x: -6, y: -45 }] },
];

//let loadedData;

let loadedData = [
    {
        "timestamp": "2024-06-27 09:35:51",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.30923,
                "lon": 18.568945,
                "x": 471962.8643649461,
                "y": 716207.187259932
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.410887,
                "lon": 18.573028,
                "x": 472296.91653281084,
                "y": 727513.1641106503
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.40177,
                "lon": 18.563343,
                "x": 471662.24692376313,
                "y": 726502.8987269858
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354192,
                "lon": 18.650198,
                "x": 477272.590625854,
                "y": 721179.177834318
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.331968,
                "lon": 18.670817,
                "x": 478600.70766688266,
                "y": 718700.687705948
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.346995,
                "lon": 18.571857,
                "x": 472177.76908743876,
                "y": 720406.7177543733
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.374955,
                "lon": 18.464083,
                "x": 465197.93823099625,
                "y": 723564.6486962596
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1P5jRKSUV5vVOGOs5fjc02Af",
                "lat": 54.370743,
                "lon": 18.597772,
                "x": 473876.8782354689,
                "y": 723038.3602352273
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.548848,
                "lon": 18.449642,
                "x": 464411.35359490797,
                "y": 742914.6901517259
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452643,
                "lon": 18.563887,
                "x": 471732.5856580736,
                "y": 732161.4866822278
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.44161,
                "lon": 18.560058,
                "x": 471476.7372132746,
                "y": 730935.7820471069
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.42492,
                "lon": 18.598767,
                "x": 473975.8126938588,
                "y": 729064.2949334141
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.2649,
                "lon": 18.16267,
                "x": 445479.4369456305,
                "y": 711513.9859208735
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309857,
                "lon": 18.470317,
                "x": 465548.3740325879,
                "y": 716320.6121758958
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402623,
                "lon": 18.57212,
                "x": 472232.4210974453,
                "y": 726594.2866456946
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.591212,
                "lon": 18.46452,
                "x": 465409.31057945115,
                "y": 747619.6690086871
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412953,
                "lon": 18.625038,
                "x": 475672.6706889308,
                "y": 727723.7686946169
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26442,
                "lon": 18.654617,
                "x": 477510.8132482138,
                "y": 711192.225726706
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.368073,
                "lon": 18.392213,
                "x": 460524.20477918163,
                "y": 722837.0148240943
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402648,
                "lon": 18.571998,
                "x": 472224.5207588706,
                "y": 726597.1155690644
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1FHF9rY5dc34JP8w54GQ2MLe",
                "lat": 54.537288,
                "lon": 18.484617,
                "x": 466663.55333001254,
                "y": 741611.6705317665
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523072,
                "lon": 18.538727,
                "x": 470153.1483119878,
                "y": 740006.0461136131
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.089505,
                "lon": 18.784693,
                "x": 485921.2535490856,
                "y": 691702.7672325438
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.354103,
                "lon": 18.623777,
                "x": 475555.91462883836,
                "y": 721178.116539848
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329582,
                "lon": 18.655195,
                "x": 477583.8701637497,
                "y": 718440.1393554788
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.369888,
                "lon": 18.610728,
                "x": 474717.7899083319,
                "y": 722938.5318678459
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:36:57",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.30923,
                "lon": 18.568945,
                "x": 471962.8643649461,
                "y": 716207.187259932
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.410887,
                "lon": 18.573028,
                "x": 472296.91653281084,
                "y": 727513.1641106503
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.40177,
                "lon": 18.563343,
                "x": 471662.24692376313,
                "y": 726502.8987269858
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354192,
                "lon": 18.650198,
                "x": 477272.590625854,
                "y": 721179.177834318
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.331968,
                "lon": 18.670817,
                "x": 478600.70766688266,
                "y": 718700.687705948
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.346995,
                "lon": 18.571857,
                "x": 472177.76908743876,
                "y": 720406.7177543733
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.374955,
                "lon": 18.464083,
                "x": 465197.93823099625,
                "y": 723564.6486962596
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1P5jRKSUV5vVOGOs5fjc02Af",
                "lat": 54.370743,
                "lon": 18.597772,
                "x": 473876.8782354689,
                "y": 723038.3602352273
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.548848,
                "lon": 18.449642,
                "x": 464411.35359490797,
                "y": 742914.6901517259
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452643,
                "lon": 18.563887,
                "x": 471732.5856580736,
                "y": 732161.4866822278
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.44161,
                "lon": 18.560058,
                "x": 471476.7372132746,
                "y": 730935.7820471069
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.42492,
                "lon": 18.598767,
                "x": 473975.8126938588,
                "y": 729064.2949334141
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.2649,
                "lon": 18.16267,
                "x": 445479.4369456305,
                "y": 711513.9859208735
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309857,
                "lon": 18.470317,
                "x": 465548.3740325879,
                "y": 716320.6121758958
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402623,
                "lon": 18.57212,
                "x": 472232.4210974453,
                "y": 726594.2866456946
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.591212,
                "lon": 18.46452,
                "x": 465409.31057945115,
                "y": 747619.6690086871
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412953,
                "lon": 18.625038,
                "x": 475672.6706889308,
                "y": 727723.7686946169
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26442,
                "lon": 18.654617,
                "x": 477510.8132482138,
                "y": 711192.225726706
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.368073,
                "lon": 18.392213,
                "x": 460524.20477918163,
                "y": 722837.0148240943
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402648,
                "lon": 18.571998,
                "x": 472224.5207588706,
                "y": 726597.1155690644
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1FHF9rY5dc34JP8w54GQ2MLe",
                "lat": 54.537288,
                "lon": 18.484617,
                "x": 466663.55333001254,
                "y": 741611.6705317665
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523072,
                "lon": 18.538727,
                "x": 470153.1483119878,
                "y": 740006.0461136131
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.089505,
                "lon": 18.784693,
                "x": 485921.2535490856,
                "y": 691702.7672325438
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.354103,
                "lon": 18.623777,
                "x": 475555.91462883836,
                "y": 721178.116539848
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329582,
                "lon": 18.655195,
                "x": 477583.8701637497,
                "y": 718440.1393554788
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.369888,
                "lon": 18.610728,
                "x": 474717.7899083319,
                "y": 722938.5318678459
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:37:46",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.30923,
                "lon": 18.568945,
                "x": 471962.8643649461,
                "y": 716207.187259932
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.410887,
                "lon": 18.573028,
                "x": 472296.91653281084,
                "y": 727513.1641106503
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.40177,
                "lon": 18.563343,
                "x": 471662.24692376313,
                "y": 726502.8987269858
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354192,
                "lon": 18.650198,
                "x": 477272.590625854,
                "y": 721179.177834318
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.331968,
                "lon": 18.670817,
                "x": 478600.70766688266,
                "y": 718700.687705948
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.346995,
                "lon": 18.571857,
                "x": 472177.76908743876,
                "y": 720406.7177543733
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.374955,
                "lon": 18.464083,
                "x": 465197.93823099625,
                "y": 723564.6486962596
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1P5jRKSUV5vVOGOs5fjc02Af",
                "lat": 54.370743,
                "lon": 18.597772,
                "x": 473876.8782354689,
                "y": 723038.3602352273
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.548848,
                "lon": 18.449642,
                "x": 464411.35359490797,
                "y": 742914.6901517259
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452643,
                "lon": 18.563887,
                "x": 471732.5856580736,
                "y": 732161.4866822278
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.44161,
                "lon": 18.560058,
                "x": 471476.7372132746,
                "y": 730935.7820471069
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.42492,
                "lon": 18.598767,
                "x": 473975.8126938588,
                "y": 729064.2949334141
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.2649,
                "lon": 18.16267,
                "x": 445479.4369456305,
                "y": 711513.9859208735
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309857,
                "lon": 18.470317,
                "x": 465548.3740325879,
                "y": 716320.6121758958
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402623,
                "lon": 18.57212,
                "x": 472232.4210974453,
                "y": 726594.2866456946
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.591212,
                "lon": 18.46452,
                "x": 465409.31057945115,
                "y": 747619.6690086871
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26442,
                "lon": 18.654617,
                "x": 477510.8132482138,
                "y": 711192.225726706
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402648,
                "lon": 18.571998,
                "x": 472224.5207588706,
                "y": 726597.1155690644
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1FHF9rY5dc34JP8w54GQ2MLe",
                "lat": 54.537288,
                "lon": 18.484617,
                "x": 466663.55333001254,
                "y": 741611.6705317665
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523072,
                "lon": 18.538727,
                "x": 470153.1483119878,
                "y": 740006.0461136131
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.089505,
                "lon": 18.784693,
                "x": 485921.2535490856,
                "y": 691702.7672325438
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.354103,
                "lon": 18.623777,
                "x": 475555.91462883836,
                "y": 721178.116539848
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329582,
                "lon": 18.655195,
                "x": 477583.8701637497,
                "y": 718440.1393554788
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.369888,
                "lon": 18.610728,
                "x": 474717.7899083319,
                "y": 722938.5318678459
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:38:51",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.30923,
                "lon": 18.568945,
                "x": 471962.8643649461,
                "y": 716207.187259932
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.410887,
                "lon": 18.573028,
                "x": 472296.91653281084,
                "y": 727513.1641106503
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354192,
                "lon": 18.650198,
                "x": 477272.590625854,
                "y": 721179.177834318
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.548848,
                "lon": 18.449642,
                "x": 464411.35359490797,
                "y": 742914.6901517259
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.44161,
                "lon": 18.560058,
                "x": 471476.7372132746,
                "y": 730935.7820471069
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.2649,
                "lon": 18.16267,
                "x": 445479.4369456305,
                "y": 711513.9859208735
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.591212,
                "lon": 18.46452,
                "x": 465409.31057945115,
                "y": 747619.6690086871
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26442,
                "lon": 18.654617,
                "x": 477510.8132482138,
                "y": 711192.225726706
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1FHF9rY5dc34JP8w54GQ2MLe",
                "lat": 54.537288,
                "lon": 18.484617,
                "x": 466663.55333001254,
                "y": 741611.6705317665
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.354103,
                "lon": 18.623777,
                "x": 475555.91462883836,
                "y": 721178.116539848
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.369888,
                "lon": 18.610728,
                "x": 474717.7899083319,
                "y": 722938.5318678459
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:39:57",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.410887,
                "lon": 18.573028,
                "x": 472296.91653281084,
                "y": 727513.1641106503
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354192,
                "lon": 18.650198,
                "x": 477272.590625854,
                "y": 721179.177834318
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.44161,
                "lon": 18.560058,
                "x": 471476.7372132746,
                "y": 730935.7820471069
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.2649,
                "lon": 18.16267,
                "x": 445479.4369456305,
                "y": 711513.9859208735
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26442,
                "lon": 18.654617,
                "x": 477510.8132482138,
                "y": 711192.225726706
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:40:46",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.41068,
                "lon": 18.57326,
                "x": 472311.8297598541,
                "y": 727490.0475311475
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230852,
                "lon": 18.636695,
                "x": 476324.6350822306,
                "y": 707464.2822728567
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354252,
                "lon": 18.650195,
                "x": 477272.42882230424,
                "y": 721185.8527819104
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.424278,
                "lon": 18.592623,
                "x": 473576.8987282371,
                "y": 728995.169852009
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628652,
                "x": 475888.9694344386,
                "y": 724273.725230014
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_16CtTIT1WB0lBWACxqSdBRIi",
                "lat": 54.348958,
                "lon": 18.662707,
                "x": 478082.53986904945,
                "y": 720593.02410967
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.4416,
                "lon": 18.559887,
                "x": 471465.64369393815,
                "y": 730934.7389728185
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.26489,
                "lon": 18.162592,
                "x": 445474.34509651683,
                "y": 711512.9338920116
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611317,
                "x": 474760.2360440549,
                "y": 723698.5997400647
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26452,
                "lon": 18.654823,
                "x": 477524.28102687944,
                "y": 711203.2832490066
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402642,
                "lon": 18.572045,
                "x": 472227.56678392057,
                "y": 726596.4296418205
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:41:54",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.571897,
                "x": 472218.00282885483,
                "y": 726603.1619996261
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.41068,
                "lon": 18.57326,
                "x": 472311.8297598541,
                "y": 727490.0475311475
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401485,
                "lon": 18.577293,
                "x": 472567.3652861321,
                "y": 726465.6765954262
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230863,
                "lon": 18.636735,
                "x": 476327.2480309645,
                "y": 707465.4924000222
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354252,
                "lon": 18.650195,
                "x": 477272.42882230424,
                "y": 721185.8527819104
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.42414,
                "lon": 18.592562,
                "x": 473572.85341069964,
                "y": 728979.8424338158
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406725,
                "x": 461677.1157126053,
                "y": 747789.244075086
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413502,
                "lon": 18.623568,
                "x": 475577.6246187934,
                "y": 727785.344736102
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628648,
                "x": 475888.70972201554,
                "y": 724273.7265983922
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.297277,
                "lon": 18.572822,
                "x": 472206.9843909827,
                "y": 714876.1003073994
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269447,
                "lon": 18.465685,
                "x": 465213.06580000056,
                "y": 711828.0420384891
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304545,
                "lon": 18.568677,
                "x": 471942.24678944115,
                "y": 715686.1728668315
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.4416,
                "lon": 18.559887,
                "x": 471465.64369393815,
                "y": 730934.7389728185
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362893,
                "lon": 18.705073,
                "x": 480841.9784249941,
                "y": 722130.7171839308
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377132,
                "lon": 18.611013,
                "x": 474740.74647676887,
                "y": 723744.2030481724
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.26489,
                "lon": 18.162592,
                "x": 445474.34509651683,
                "y": 711512.9338920116
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260823,
                "lon": 18.646965,
                "x": 477010.5636292956,
                "y": 710794.5917515922
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.522033,
                "lon": 18.529385,
                "x": 469547.90182133456,
                "y": 739894.475569006
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508462,
                "lon": 18.532335,
                "x": 469728.7528333031,
                "y": 738383.6264548842
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363978,
                "lon": 18.637665,
                "x": 476463.89173310634,
                "y": 722271.8168438198
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530277,
                "lon": 18.455828,
                "x": 464795.383446133,
                "y": 740845.8237357838
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611315,
                "x": 474760.10617143504,
                "y": 723698.6004562359
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248088,
                "lon": 18.64169,
                "x": 476659.87022062216,
                "y": 709379.7941020466
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518243,
                "lon": 18.540748,
                "x": 470280.4108038117,
                "y": 739468.0339606144
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26452,
                "lon": 18.654823,
                "x": 477524.28102687944,
                "y": 711203.2832490066
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402653,
                "lon": 18.571842,
                "x": 472214.40047347546,
                "y": 726597.7332414221
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347963,
                "lon": 18.641335,
                "x": 476693.21975708014,
                "y": 720489.2011700058
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382105,
                "lon": 18.711772,
                "x": 481285.87253824587,
                "y": 724265.93654624
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:42:59",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267335,
                "lon": 18.460022,
                "x": 464842.57858773775,
                "y": 711595.9291347675
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.40604,
                "lon": 18.675905,
                "x": 478969.34442329145,
                "y": 726938.4344385546
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.5719,
                "x": 472218.19751446246,
                "y": 726603.1608167887
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.41068,
                "lon": 18.57326,
                "x": 472311.8297598541,
                "y": 727490.0475311475
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401505,
                "lon": 18.57739,
                "x": 472573.67365125724,
                "y": 726467.8635075884
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230863,
                "lon": 18.636735,
                "x": 476327.2480309645,
                "y": 707465.4924000222
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354252,
                "lon": 18.650195,
                "x": 477272.42882230424,
                "y": 721185.8527819104
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413507,
                "lon": 18.623377,
                "x": 475565.2358397118,
                "y": 727785.9671324175
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560013,
                "lon": 18.405902,
                "x": 461593.4499157448,
                "y": 744179.645523889
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.42414,
                "lon": 18.592562,
                "x": 473572.85341069964,
                "y": 728979.8424338158
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520598,
                "lon": 18.548482,
                "x": 470782.57906529517,
                "y": 739726.7545822663
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1hPoBTZGE8ZCxQ6lp2r1KSdO",
                "lat": 54.346023,
                "lon": 18.45476,
                "x": 464567.6256334175,
                "y": 720351.1225738674
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406727,
                "x": 461677.24490205426,
                "y": 747789.2429847494
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413297,
                "lon": 18.623497,
                "x": 475572.8964008047,
                "y": 727762.5663810885
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628648,
                "x": 475888.70972201554,
                "y": 724273.7265983922
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.29723,
                "lon": 18.572837,
                "x": 472207.9286625887,
                "y": 714870.8665120434
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269388,
                "lon": 18.46576,
                "x": 465217.8990052484,
                "y": 711821.4424721561
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304542,
                "lon": 18.568677,
                "x": 471942.24474928377,
                "y": 715685.8391715884
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.52783,
                "lon": 18.509315,
                "x": 468253.7392524619,
                "y": 740548.179711787
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_18Xgoba6hEbOX3vknF8RSBat",
                "lat": 54.402627,
                "lon": 18.571992,
                "x": 472224.11719816097,
                "y": 726594.7820291966
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.4416,
                "lon": 18.559887,
                "x": 471465.64369393815,
                "y": 730934.7389728185
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362895,
                "lon": 18.70507,
                "x": 480841.7844806805,
                "y": 722130.940465916
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377087,
                "lon": 18.610745,
                "x": 474723.3160759383,
                "y": 723739.2936251219
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.26489,
                "lon": 18.162592,
                "x": 445474.34509651683,
                "y": 711512.9338920116
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260822,
                "lon": 18.64697,
                "x": 477010.88866881793,
                "y": 710794.4788919119
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.521992,
                "lon": 18.529397,
                "x": 469548.6477947578,
                "y": 739889.9097172916
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508482,
                "lon": 18.532367,
                "x": 469730.838914049,
                "y": 738385.8373962529
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363975,
                "lon": 18.63764,
                "x": 476462.26610574697,
                "y": 722271.491491192
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530213,
                "lon": 18.455937,
                "x": 464802.37995679595,
                "y": 740838.6501361905
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611315,
                "x": 474760.10617143504,
                "y": 723698.6004562359
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341348,
                "lon": 18.660937,
                "x": 477963.4545458811,
                "y": 719747.0935132308
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248103,
                "lon": 18.64171,
                "x": 476661.181472448,
                "y": 709381.4559554597
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518242,
                "lon": 18.540848,
                "x": 470286.8813359969,
                "y": 739467.8804909093
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26452,
                "lon": 18.654823,
                "x": 477524.28102687944,
                "y": 711203.2832490066
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553177,
                "lon": 18.418138,
                "x": 462378.168064483,
                "y": 743412.6255827863
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.379878,
                "lon": 18.622955,
                "x": 475517.8423026836,
                "y": 724045.4359544832
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402653,
                "lon": 18.571842,
                "x": 472214.40047347546,
                "y": 726597.7332414221
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347843,
                "lon": 18.641572,
                "x": 476708.55258252873,
                "y": 720475.7749145878
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382222,
                "lon": 18.71164,
                "x": 481277.3552839185,
                "y": 724278.9859502576
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.415072,
                "lon": 18.601065,
                "x": 474118.65809362027,
                "y": 727968.0157413911
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:43:48",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267425,
                "lon": 18.46007,
                "x": 464845.7803701407,
                "y": 711605.9159710426
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.406122,
                "lon": 18.676118,
                "x": 478983.20795941766,
                "y": 726947.4920770032
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.5719,
                "x": 472218.19751446246,
                "y": 726603.1608167887
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.41068,
                "lon": 18.57326,
                "x": 472311.8297598541,
                "y": 727490.0475311475
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401505,
                "lon": 18.57739,
                "x": 472573.67365125724,
                "y": 726467.8635075884
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230863,
                "lon": 18.636735,
                "x": 476327.2480309645,
                "y": 707465.4924000222
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553632,
                "lon": 18.41671,
                "x": 462286.25773980893,
                "y": 743464.0025499882
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354252,
                "lon": 18.650195,
                "x": 477272.42882230424,
                "y": 721185.8527819104
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413512,
                "lon": 18.623583,
                "x": 475578.60373608745,
                "y": 727786.4518764904
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560015,
                "lon": 18.405902,
                "x": 461593.4517952119,
                "y": 744179.8679949492
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.42414,
                "lon": 18.592562,
                "x": 473572.85341069964,
                "y": 728979.8424338158
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520332,
                "lon": 18.548837,
                "x": 470805.36098523164,
                "y": 739697.0185444215
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1hPoBTZGE8ZCxQ6lp2r1KSdO",
                "lat": 54.346023,
                "lon": 18.45476,
                "x": 464567.6256334175,
                "y": 720351.1225738674
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406727,
                "x": 461677.24490205426,
                "y": 747789.2429847494
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413297,
                "lon": 18.623497,
                "x": 475572.8964008047,
                "y": 727762.5663810885
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628648,
                "x": 475888.70972201554,
                "y": 724273.7265983922
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1GTKawMteQ93Oc5T4Xsxg2kB",
                "lat": 54.468988,
                "lon": 18.56179,
                "x": 471607.98117349396,
                "y": 733980.4599483041
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.29723,
                "lon": 18.572837,
                "x": 472207.9286625887,
                "y": 714870.8665120434
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269388,
                "lon": 18.46576,
                "x": 465217.8990052484,
                "y": 711821.4424721561
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304542,
                "lon": 18.568677,
                "x": 471942.24474928377,
                "y": 715685.8391715884
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402593,
                "lon": 18.571925,
                "x": 472219.7462354209,
                "y": 726591.0265008034
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.527817,
                "lon": 18.509312,
                "x": 468253.5350745302,
                "y": 740546.7350032497
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_18Xgoba6hEbOX3vknF8RSBat",
                "lat": 54.402627,
                "lon": 18.571992,
                "x": 472224.11719816097,
                "y": 726594.7820291966
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355703,
                "lon": 18.379273,
                "x": 459671.6463712434,
                "y": 721468.4019802324
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.450993,
                "lon": 18.549267,
                "x": 470783.79665082425,
                "y": 731983.9171051467
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.4416,
                "lon": 18.559887,
                "x": 471465.64369393815,
                "y": 730934.7389728185
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362895,
                "lon": 18.70507,
                "x": 480841.7844806805,
                "y": 722130.940465916
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377087,
                "lon": 18.610745,
                "x": 474723.3160759383,
                "y": 723739.2936251219
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.26489,
                "lon": 18.162592,
                "x": 445474.34509651683,
                "y": 711512.9338920116
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260822,
                "lon": 18.64697,
                "x": 477010.88866881793,
                "y": 710794.4788919119
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.521992,
                "lon": 18.529397,
                "x": 469548.6477947578,
                "y": 739889.9097172916
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508482,
                "lon": 18.532367,
                "x": 469730.838914049,
                "y": 738385.8373962529
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363975,
                "lon": 18.63764,
                "x": 476462.26610574697,
                "y": 722271.491491192
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530213,
                "lon": 18.455937,
                "x": 464802.37995679595,
                "y": 740838.6501361905
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611315,
                "x": 474760.10617143504,
                "y": 723698.6004562359
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341347,
                "lon": 18.660918,
                "x": 477962.219158489,
                "y": 719746.9882180868
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248103,
                "lon": 18.64171,
                "x": 476661.181472448,
                "y": 709381.4559554597
            },
            {
                "vehicle_id": "vloc_1hdBAHw79jJX2VQGJHN4vBVw",
                "lat": 54.40262,
                "lon": 18.572132,
                "x": 472233.19781504624,
                "y": 726593.9482161375
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518242,
                "lon": 18.540848,
                "x": 470286.8813359969,
                "y": 739467.8804909093
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26452,
                "lon": 18.654823,
                "x": 477524.28102687944,
                "y": 711203.2832490066
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553253,
                "lon": 18.418152,
                "x": 462379.1432025506,
                "y": 743421.071990692
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.3799,
                "lon": 18.622998,
                "x": 475520.647440546,
                "y": 724047.8681535823
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402653,
                "lon": 18.571842,
                "x": 472214.40047347546,
                "y": 726597.7332414221
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347843,
                "lon": 18.641572,
                "x": 476708.55258252873,
                "y": 720475.7749145878
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382222,
                "lon": 18.71164,
                "x": 481277.3552839185,
                "y": 724278.9859502576
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.41507,
                "lon": 18.601065,
                "x": 474118.6568338831,
                "y": 727967.7932735253
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    },
    {
        "timestamp": "2024-06-27 09:44:39",
        "bikes": [
            {
                "vehicle_id": "vloc_1RRC8GHvQZWOdcwJgCtGDp2m",
                "lat": 54.267425,
                "lon": 18.46007,
                "x": 464845.7803701407,
                "y": 711605.9159710426
            },
            {
                "vehicle_id": "vloc_1SO8PZ402XkhLWqP33rEiy3A",
                "lat": 54.381898,
                "lon": 18.629028,
                "x": 475913.353128775,
                "y": 724268.0349964304
            },
            {
                "vehicle_id": "vloc_1JTHrXjacZRgJpaRoDW7lv26",
                "lat": 54.494002,
                "lon": 18.530265,
                "x": 469584.02982496767,
                "y": 736776.0581555683
            },
            {
                "vehicle_id": "vloc_1jjhgkzX9gtOIGrB9HRpP7yg",
                "lat": 54.369463,
                "lon": 18.403025,
                "x": 461227.745876642,
                "y": 722985.6264177738
            },
            {
                "vehicle_id": "vloc_1Nv4kYFX3BFEjmqJjRFkcZWP",
                "lat": 54.584455,
                "lon": 18.393525,
                "x": 460816.77692595497,
                "y": 746905.2977861967
            },
            {
                "vehicle_id": "vloc_1t10oVanOT1aM7Tv8Jsa5W1l",
                "lat": 54.32644,
                "lon": 18.675048,
                "x": 478872.91943689046,
                "y": 718084.5181358224
            },
            {
                "vehicle_id": "vloc_1NQhveougVjPzyYufWgA4Uom",
                "lat": 54.07029,
                "lon": 18.806365,
                "x": 487332.51644982374,
                "y": 689561.4178797426
            },
            {
                "vehicle_id": "vloc_1OJyWJJRpDfeic3m6DJ6ra5d",
                "lat": 54.54423,
                "lon": 18.480882,
                "x": 466427.6638825432,
                "y": 742385.6447905442
            },
            {
                "vehicle_id": "vloc_1oXD9Us3cfHfx9rQIB3PsI9N",
                "lat": 54.087113,
                "lon": 18.79872,
                "x": 486837.70924161264,
                "y": 691434.0079233181
            },
            {
                "vehicle_id": "vloc_1BUhLGPCFlTCmEsLP1w5Pq4t",
                "lat": 54.374285,
                "lon": 18.630893,
                "x": 476030.0096235654,
                "y": 723420.5795605937
            },
            {
                "vehicle_id": "vloc_1XqZrgHrRx96ayHmxZp7lskr",
                "lat": 54.363033,
                "lon": 18.406077,
                "x": 461419.938551035,
                "y": 722268.7303768899
            },
            {
                "vehicle_id": "vloc_14jMrT4fS55r4HLmoTg9MLLP",
                "lat": 54.274988,
                "lon": 18.693308,
                "x": 480035.22961596824,
                "y": 712356.084349025
            },
            {
                "vehicle_id": "vloc_1Ja1NG4eFBZw4NRR9MhDbN50",
                "lat": 54.375645,
                "lon": 18.616527,
                "x": 475097.9018925368,
                "y": 723576.8371484932
            },
            {
                "vehicle_id": "vloc_1secObFqy2lTEy7ou81knOTe",
                "lat": 41.395667,
                "lon": 2.15193,
                "x": -910365.0564919505,
                "y": -579425.559237075
            },
            {
                "vehicle_id": "vloc_1iUcN118bD2n0FO5TZu9sU2I",
                "lat": 54.489183,
                "lon": 18.529787,
                "x": 469549.49777507514,
                "y": 736240.2233540574
            },
            {
                "vehicle_id": "vloc_1sPf7IRfQCve19eiOx75CdaS",
                "lat": 54.432237,
                "lon": 18.565617,
                "x": 471830.7178400805,
                "y": 729890.9469792293
            },
            {
                "vehicle_id": "vloc_1n31U66blpsUSREWlROVgKDv",
                "lat": 54.511922,
                "lon": 18.539202,
                "x": 470175.76053523546,
                "y": 738765.5685847495
            },
            {
                "vehicle_id": "vloc_1N1X4PacS1aClKcpqIc1cxwE",
                "lat": 54.406122,
                "lon": 18.676118,
                "x": 478983.20795941766,
                "y": 726947.4920770032
            },
            {
                "vehicle_id": "vloc_1AmwhdUtB4LZyxw0QLP34GbG",
                "lat": 54.309117,
                "lon": 18.568968,
                "x": 471964.2835477074,
                "y": 716194.608921878
            },
            {
                "vehicle_id": "vloc_1VeBZt7gfoYFQBjBp6DGXIKo",
                "lat": 54.402702,
                "lon": 18.5719,
                "x": 472218.19751446246,
                "y": 726603.1608167887
            },
            {
                "vehicle_id": "vloc_1LgYNS5KhKJkZyE2c7HMsVkE",
                "lat": 54.339483,
                "lon": 18.173603,
                "x": 446288.4727785146,
                "y": 719801.3902212707
            },
            {
                "vehicle_id": "vloc_12edr6gLsXOVpDgd7ABM3tdI",
                "lat": 54.36777,
                "lon": 18.609658,
                "x": 474646.9919570064,
                "y": 722703.3244172502
            },
            {
                "vehicle_id": "vloc_1naXYo5qZ7nDoodAXYcojACt",
                "lat": 54.329633,
                "lon": 18.683498,
                "x": 479423.8966975622,
                "y": 718437.1857115757
            },
            {
                "vehicle_id": "vloc_10GcZ8LULnHXgJB5037CUEkF",
                "lat": 54.347677,
                "lon": 18.656572,
                "x": 477683.1921461309,
                "y": 720452.4590864507
            },
            {
                "vehicle_id": "vloc_1A5qyKPXGaQMOlf2T69Iq51s",
                "lat": 54.41068,
                "lon": 18.57326,
                "x": 472311.8297598541,
                "y": 727490.0475311475
            },
            {
                "vehicle_id": "vloc_15zWBw7onhYKffWEVCn1kEkQ",
                "lat": 54.381917,
                "lon": 18.629257,
                "x": 475928.232800434,
                "y": 724270.0701959915
            },
            {
                "vehicle_id": "vloc_1gDDAm5XEV4hrgnOcj2ioQAG",
                "lat": 54.56104,
                "lon": 18.493425,
                "x": 467252.3046571709,
                "y": 744249.6062917011
            },
            {
                "vehicle_id": "vloc_1apSupzbLVgoNSr22nUrZ2dn",
                "lat": 54.383272,
                "lon": 18.59689,
                "x": 473827.56648893363,
                "y": 724432.328365298
            },
            {
                "vehicle_id": "vloc_1yeUYZZcrLuPBjPBeJZljRDK",
                "lat": 54.403312,
                "lon": 18.633383,
                "x": 476208.5071917427,
                "y": 726648.5128625631
            },
            {
                "vehicle_id": "vloc_117rmjNna6smcDMSZgtmQFii",
                "lat": 54.389308,
                "lon": 18.643257,
                "x": 476841.38865524245,
                "y": 725087.5062405076
            },
            {
                "vehicle_id": "vloc_1dRdaE6NG4hhM9f6CkNM6D2K",
                "lat": 54.405958,
                "lon": 18.596973,
                "x": 473847.38737448433,
                "y": 726955.7415693011
            },
            {
                "vehicle_id": "vloc_1jN7KC04gTAl2zazerdmlhCm",
                "lat": 54.402662,
                "lon": 18.572093,
                "x": 472230.69526834146,
                "y": 726598.6353953984
            },
            {
                "vehicle_id": "vloc_1oLSMmeo4tZksxjLLbqGmxcW",
                "lat": 54.45113,
                "lon": 18.560565,
                "x": 471516.21564296156,
                "y": 731994.5275927791
            },
            {
                "vehicle_id": "vloc_14qyJKE3G89MOuKYXvP4s9OQ",
                "lat": 54.402625,
                "lon": 18.571925,
                "x": 472219.76786010223,
                "y": 726594.5859750779
            },
            {
                "vehicle_id": "vloc_1NZsVWlm7aAcdOXRDEAvKOWh",
                "lat": 54.401505,
                "lon": 18.57739,
                "x": 472573.67365125724,
                "y": 726467.8635075884
            },
            {
                "vehicle_id": "vloc_1m1fKgIcGfzvbgQtu6qsvpnb",
                "lat": 54.366003,
                "lon": 18.70959,
                "x": 481136.82033221936,
                "y": 722475.4349656226
            },
            {
                "vehicle_id": "vloc_1lLs85U6vrGOzL6XEqvcOqUa",
                "lat": 54.382007,
                "lon": 18.629113,
                "x": 475918.93582641426,
                "y": 724280.130396138
            },
            {
                "vehicle_id": "vloc_1ZChrgXqgBNeaJ4Ff4yulcT2",
                "lat": 54.304907,
                "lon": 18.148017,
                "x": 444579.0963580475,
                "y": 715975.3213753868
            },
            {
                "vehicle_id": "vloc_15INA9AiQWqQLJxjYieIPEwy",
                "lat": 54.44981,
                "lon": 18.551427,
                "x": 470922.9672146906,
                "y": 731851.4328600392
            },
            {
                "vehicle_id": "vloc_1LeM5DbEuqyh8csYzAvyosSZ",
                "lat": 54.230863,
                "lon": 18.636735,
                "x": 476327.2480309645,
                "y": 707465.4924000222
            },
            {
                "vehicle_id": "vloc_1Td7NBPara7IysBvAUn4gLg8",
                "lat": 54.400885,
                "lon": 18.662133,
                "x": 478072.92751652346,
                "y": 726369.2213176871
            },
            {
                "vehicle_id": "vloc_1CdOfjiqMZLCRsLW30NJWntP",
                "lat": 54.339462,
                "lon": 18.173498,
                "x": 446281.62109495467,
                "y": 719799.1343805958
            },
            {
                "vehicle_id": "vloc_1lRKpqipgTdPtKgmASgiYug1",
                "lat": 54.404468,
                "lon": 18.564082,
                "x": 471712.06219715654,
                "y": 726802.7098804358
            },
            {
                "vehicle_id": "vloc_1OtF1xFO7gnuMmhWtPaxrrAR",
                "lat": 54.325482,
                "lon": 18.652403,
                "x": 477400.1124318956,
                "y": 717984.9769980423
            },
            {
                "vehicle_id": "vloc_1tpvJSkSLMXvzqProL25A80V",
                "lat": 54.401783,
                "lon": 18.563118,
                "x": 471647.6541431784,
                "y": 726504.4352727355
            },
            {
                "vehicle_id": "vloc_1bIO2z3qFDT3Nv5hBrDN0grn",
                "lat": 54.402598,
                "lon": 18.571952,
                "x": 472221.50178918184,
                "y": 726591.5720241005
            },
            {
                "vehicle_id": "vloc_1s6cRRSDSijgwWU6NrwrNTPJ",
                "lat": 54.42477,
                "lon": 18.595348,
                "x": 473753.95985972305,
                "y": 729048.8783027707
            },
            {
                "vehicle_id": "vloc_1fDmEH7gRDE9loD7qBjjioRW",
                "lat": 54.321337,
                "lon": 18.504852,
                "x": 467803.5435744328,
                "y": 717581.2352550076
            },
            {
                "vehicle_id": "vloc_1KPn0yHR4ck1HmAgNZX8cy0c",
                "lat": 54.264908,
                "lon": 18.162607,
                "x": 445475.3455145368,
                "y": 711514.9244128065
            },
            {
                "vehicle_id": "vloc_1b2UeCFywtevEzMELqlybTBK",
                "lat": 54.640198,
                "lon": 18.357097,
                "x": 458519.9873049195,
                "y": 753126.8476141412
            },
            {
                "vehicle_id": "vloc_1a8iYcbyJkzMqdKUrz2Akcdy",
                "lat": 54.280025,
                "lon": 18.413418,
                "x": 461820.00333638827,
                "y": 713031.657749245
            },
            {
                "vehicle_id": "vloc_1i6I4ELWtazk4SrRCQRf6ffn",
                "lat": 54.385282,
                "lon": 18.387398,
                "x": 460228.11112468207,
                "y": 724753.9142594226
            },
            {
                "vehicle_id": "vloc_1AxjdrEV9iOcpDarV0MoVEJs",
                "lat": 54.381907,
                "lon": 18.62865,
                "x": 475888.8155494116,
                "y": 724269.1653433079
            },
            {
                "vehicle_id": "vloc_1WZCgqohxRYoYWuAJC39s5hg",
                "lat": 54.583958,
                "lon": 18.360813,
                "x": 458702.84071860334,
                "y": 746868.7375166258
            },
            {
                "vehicle_id": "vloc_1VHlKDR7zyL8Cr2jaqa2gt5n",
                "lat": 54.501385,
                "lon": 18.544695,
                "x": 470523.6981320989,
                "y": 737591.167360235
            },
            {
                "vehicle_id": "vloc_1f4o7SdGmfPxxtO5BeoINuYH",
                "lat": 59.920593,
                "lon": 10.72688,
                "x": 38381.0928944152,
                "y": 1369489.0708395736
            },
            {
                "vehicle_id": "vloc_1KJptf89FpxT6sh7R1MB5zpS",
                "lat": 54.381918,
                "lon": 18.62882,
                "x": 475899.8597822306,
                "y": 724270.330768344
            },
            {
                "vehicle_id": "vloc_1Gfj25sqWkIXma8llNiariCj",
                "lat": 54.40637,
                "lon": 18.642033,
                "x": 476771.5719041536,
                "y": 726985.7799593788
            },
            {
                "vehicle_id": "vloc_1Pqj44h8NcGUKsfdEuM2E82J",
                "lat": 54.501638,
                "lon": 18.556785,
                "x": 471306.5730102693,
                "y": 737614.313330804
            },
            {
                "vehicle_id": "vloc_1AQrkF15WowvbywtJIURBU0V",
                "lat": 54.345963,
                "lon": 18.454548,
                "x": 464553.7973375354,
                "y": 720344.5552104963
            },
            {
                "vehicle_id": "vloc_1VsW9FoaNw8AI2LbZclebwsn",
                "lat": 54.363058,
                "lon": 18.644308,
                "x": 476894.88138152455,
                "y": 722167.2848355202
            },
            {
                "vehicle_id": "vloc_1kNKH9tMozuBSvzmAr33lcjJ",
                "lat": 54.38186,
                "lon": 18.62878,
                "x": 475897.2286760249,
                "y": 724263.8929072991
            },
            {
                "vehicle_id": "vloc_1TGhsJgGT4GBMAPoJORPMH2N",
                "lat": 54.499407,
                "lon": 18.495077,
                "x": 467309.89158309635,
                "y": 737393.0590866767
            },
            {
                "vehicle_id": "vloc_1GyyICHs5kMYP5384NoXiyWP",
                "lat": 54.402642,
                "lon": 18.572133,
                "x": 472233.27757012757,
                "y": 726596.3949606689
            },
            {
                "vehicle_id": "vloc_1VHeYynEiwL8diU4QBG2ol49",
                "lat": 54.381832,
                "lon": 18.629038,
                "x": 475913.9637705446,
                "y": 724260.6901721824
            },
            {
                "vehicle_id": "vloc_1wu3s1uRtN1Laon82E5W2erb",
                "lat": 54.231452,
                "lon": 18.643138,
                "x": 476744.83926664316,
                "y": 707528.8796727285
            },
            {
                "vehicle_id": "vloc_1cC0DP1HkMGbyzR1F7FTSoH3",
                "lat": 54.322832,
                "lon": 18.6066,
                "x": 474420.4858932612,
                "y": 717705.8548719259
            },
            {
                "vehicle_id": "vloc_1jNfrKh8PqoPchZFES1ssXvc",
                "lat": 54.44921,
                "lon": 18.527093,
                "x": 469345.17161747266,
                "y": 731795.0124443909
            },
            {
                "vehicle_id": "vloc_1htt5andvkwm2AMm8oVIHlbA",
                "lat": 54.50397,
                "lon": 18.538575,
                "x": 470129.3793771018,
                "y": 737881.2910249298
            },
            {
                "vehicle_id": "vloc_12YCu5KC5y34OTwbp6s6htLA",
                "lat": 54.553552,
                "lon": 18.416712,
                "x": 462286.31324747094,
                "y": 743455.1026388509
            },
            {
                "vehicle_id": "vloc_14tShRhwYiYbD5L60o9b8Rna",
                "lat": 54.584557,
                "lon": 18.494545,
                "x": 467343.5120175001,
                "y": 746865.0294905202
            },
            {
                "vehicle_id": "vloc_1wUX2P3F4vhh80URS3oOFu89",
                "lat": 54.51262,
                "lon": 18.548822,
                "x": 470798.8896196239,
                "y": 738839.1761553502
            },
            {
                "vehicle_id": "vloc_1oTszvWz7eaDVa9yOM9Rt5ut",
                "lat": 54.426622,
                "lon": 18.374218,
                "x": 459413.27933343576,
                "y": 729359.7835058104
            },
            {
                "vehicle_id": "vloc_1oIi1bDsF3zTqCgul4btTB4v",
                "lat": 54.475005,
                "lon": 18.470628,
                "x": 465706.5959212737,
                "y": 734690.3439344922
            },
            {
                "vehicle_id": "vloc_1zwMKOBEB4cbR3U8wmYirxZn",
                "lat": 54.354252,
                "lon": 18.650195,
                "x": 477272.42882230424,
                "y": 721185.8527819104
            },
            {
                "vehicle_id": "vloc_1ZOg684l5LQQPKWs6qG7zSRL",
                "lat": 54.519427,
                "lon": 18.542907,
                "x": 470420.9808793416,
                "y": 739598.8270849576
            },
            {
                "vehicle_id": "vloc_1JZW9f9NOXtabVjVoE7p60sI",
                "lat": 54.428113,
                "lon": 18.370647,
                "x": 459183.1576377628,
                "y": 729527.6951341862
            },
            {
                "vehicle_id": "vloc_1t0K5rQT74RXYUx5UjSKvQEZ",
                "lat": 54.075295,
                "lon": 18.7842,
                "x": 485884.1955775054,
                "y": 690122.3102115514
            },
            {
                "vehicle_id": "vloc_12gTY8IRMfuE3MB43vl94gLc",
                "lat": 54.382042,
                "lon": 18.628757,
                "x": 475895.841960187,
                "y": 724284.1452585515
            },
            {
                "vehicle_id": "vloc_1qqsb2MO1QQ1e26kYXGQWLn8",
                "lat": 54.381987,
                "lon": 18.629132,
                "x": 475920.15775250626,
                "y": 724277.899235825
            },
            {
                "vehicle_id": "vloc_1u40YlHXWppBJDLbnRnKplEr",
                "lat": 54.382072,
                "lon": 18.629318,
                "x": 475932.2840952733,
                "y": 724287.290547302
            },
            {
                "vehicle_id": "vloc_1L2KxKR35YZTRhH32vhwCdwS",
                "lat": 54.44293,
                "lon": 18.496942,
                "x": 467385.74602745735,
                "y": 731110.0062935529
            },
            {
                "vehicle_id": "vloc_1b4mOSvl8TLnAgLe2FMW4EUl",
                "lat": 54.538075,
                "lon": 18.493937,
                "x": 467267.02222945547,
                "y": 741694.8361277012
            },
            {
                "vehicle_id": "vloc_1bwC1SdjI2CUO1RDt9rXgKgU",
                "lat": 54.413512,
                "lon": 18.623583,
                "x": 475578.60373608745,
                "y": 727786.4518764904
            },
            {
                "vehicle_id": "vloc_1yylxjVPCDvpxKA3SDI9XdlY",
                "lat": 54.337878,
                "lon": 18.602932,
                "x": 474191.4102493512,
                "y": 719380.7936546691
            },
            {
                "vehicle_id": "vloc_1889Ck21xwfloEjsXBhvZ8GG",
                "lat": 54.608982,
                "lon": 18.317383,
                "x": 455923.9512087519,
                "y": 749678.6748093031
            },
            {
                "vehicle_id": "vloc_1WFsVKsQZFHPZujmWrmtxjmK",
                "lat": 54.406363,
                "lon": 18.642202,
                "x": 476782.534290437,
                "y": 726984.9456206411
            },
            {
                "vehicle_id": "vloc_1xdyfoTKixNnwaUJhgHEwK6Z",
                "lat": 54.352517,
                "lon": 18.63731,
                "x": 476434.27386023256,
                "y": 720997.0936239399
            },
            {
                "vehicle_id": "vloc_1DahgmNrjUs7y46BnsiYwj7i",
                "lat": 54.354038,
                "lon": 18.42004,
                "x": 462318.7065643644,
                "y": 721260.6476056036
            },
            {
                "vehicle_id": "vloc_1WCRq7arsBquruM23Ccbcrr4",
                "lat": 54.362868,
                "lon": 18.6463,
                "x": 477024.17158968525,
                "y": 722145.4995004786
            },
            {
                "vehicle_id": "vloc_1fdt4TaVIc7zdvA9DcCSowbd",
                "lat": 54.602817,
                "lon": 18.361547,
                "x": 458769.31662903604,
                "y": 748966.1032521874
            },
            {
                "vehicle_id": "vloc_1HamZTZkbxVxCTlQ2cM5fUAy",
                "lat": 54.296517,
                "lon": 18.720537,
                "x": 481817.2385999086,
                "y": 714743.4369585002
            },
            {
                "vehicle_id": "vloc_13pqTgCegZGRd8pk364UeJ4R",
                "lat": 54.560015,
                "lon": 18.405902,
                "x": 461593.4517952119,
                "y": 744179.8679949492
            },
            {
                "vehicle_id": "vloc_1JZEtqD8L4ymBYIT4Jfj40aJ",
                "lat": 54.2429,
                "lon": 18.618568,
                "x": 475150.6041506192,
                "y": 708810.6190894814
            },
            {
                "vehicle_id": "vloc_1k9DZMMVOwiOEiqVJQ2woFUR",
                "lat": 54.378313,
                "lon": 18.633043,
                "x": 476171.9636599667,
                "y": 723867.8984977175
            },
            {
                "vehicle_id": "vloc_1w4FIXbo8Friq4yTCCnNbILF",
                "lat": 54.17003,
                "lon": 18.68572,
                "x": 479489.3203908578,
                "y": 700683.7056740811
            },
            {
                "vehicle_id": "vloc_1RgM668e67rxfMzKLuTXrG9j",
                "lat": 54.42414,
                "lon": 18.592562,
                "x": 473572.85341069964,
                "y": 728979.8424338158
            },
            {
                "vehicle_id": "vloc_1kl1uppeeUYmoOAoYsp6tfMm",
                "lat": 54.520332,
                "lon": 18.548837,
                "x": 470805.36098523164,
                "y": 739697.0185444215
            },
            {
                "vehicle_id": "vloc_1AUXWUFbqgDHUVdfkZ39UaeI",
                "lat": 54.402802,
                "lon": 18.572005,
                "x": 472225.07907536987,
                "y": 726614.2427801136
            },
            {
                "vehicle_id": "vloc_1P96NjojXMFubjzwJIWWxH6l",
                "lat": 54.331365,
                "lon": 18.657573,
                "x": 477739.428757823,
                "y": 718637.7138692206
            },
            {
                "vehicle_id": "vloc_1LMWjTEXRn9lFEvXs8pWJDtf",
                "lat": 54.332012,
                "lon": 18.670862,
                "x": 478603.65582559037,
                "y": 718705.5682903072
            },
            {
                "vehicle_id": "vloc_1Kk005ASzZu7Ciz617fWsgkb",
                "lat": 54.339462,
                "lon": 18.173535,
                "x": 446284.02585134754,
                "y": 719799.1061949302
            },
            {
                "vehicle_id": "vloc_1qy29JzhH6OxlkGqjWVLX9a9",
                "lat": 54.381955,
                "lon": 18.628855,
                "x": 475902.15394017764,
                "y": 724274.4344382649
            },
            {
                "vehicle_id": "vloc_1nSLCdyzc1zrXqZ3EsW4eqDO",
                "lat": 54.346182,
                "lon": 18.601957,
                "x": 474133.2515192686,
                "y": 720304.8263340574
            },
            {
                "vehicle_id": "vloc_1hPoBTZGE8ZCxQ6lp2r1KSdO",
                "lat": 54.346023,
                "lon": 18.45476,
                "x": 464567.6256334175,
                "y": 720351.1225738674
            },
            {
                "vehicle_id": "vloc_1VhX1kpDPW5iAbj4F1sTELZn",
                "lat": 54.592467,
                "lon": 18.406727,
                "x": 461677.24490205426,
                "y": 747789.2429847494
            },
            {
                "vehicle_id": "vloc_1Yk7yJBX9W4E45E8xghdsReq",
                "lat": 54.361958,
                "lon": 18.566307,
                "x": 471827.3508726601,
                "y": 722073.296101002
            },
            {
                "vehicle_id": "vloc_1abbj3RD8oj8aAaSArrGbVNO",
                "lat": 54.381968,
                "lon": 18.629038,
                "x": 475914.04339257604,
                "y": 724275.817919679
            },
            {
                "vehicle_id": "vloc_1K0J27SukmRfKuRKRBy3OjIx",
                "lat": 54.30227,
                "lon": 18.63061,
                "x": 475969.67180980305,
                "y": 715410.2574009709
            },
            {
                "vehicle_id": "vloc_1vbrAQ6DsK9TcgzEW5wSVeUL",
                "lat": 54.381942,
                "lon": 18.62883,
                "x": 475900.52312259644,
                "y": 724272.9969515037
            },
            {
                "vehicle_id": "vloc_1hXKvJhmTFSzWlBmcDcIVqpA",
                "lat": 54.350963,
                "lon": 18.649673,
                "x": 477236.69573487475,
                "y": 720820.17591298
            },
            {
                "vehicle_id": "vloc_1GNVnLReS158RrfG9pR1EEqX",
                "lat": 54.475125,
                "lon": 18.464005,
                "x": 465277.6550598481,
                "y": 734706.9385164529
            },
            {
                "vehicle_id": "vloc_15PhWNhxjXObXzGkR9fV7hdu",
                "lat": 54.350323,
                "lon": 18.362977,
                "x": 458607.5094607778,
                "y": 720879.4206087207
            },
            {
                "vehicle_id": "vloc_1jCA5WR4MfyG4vJkn11rnD09",
                "lat": 54.332295,
                "lon": 18.65651,
                "x": 477670.8291112164,
                "y": 718741.4962482918
            },
            {
                "vehicle_id": "vloc_1uoTYm7w63pnk2p6RM66Fpjk",
                "lat": 54.411547,
                "lon": 18.400835,
                "x": 461125.311492328,
                "y": 727667.9371621236
            },
            {
                "vehicle_id": "vloc_1hmb0SmDhCZPHv78xx4xTAVa",
                "lat": 54.464035,
                "lon": 18.56103,
                "x": 471555.3053448161,
                "y": 733429.8212471884
            },
            {
                "vehicle_id": "vloc_1Cn4NDE1hrVuBiCZ3EDOQVhj",
                "lat": 54.394227,
                "lon": 18.405862,
                "x": 461435.2216865709,
                "y": 725738.6255052378
            },
            {
                "vehicle_id": "vloc_1a6BtJPemKv5mV0AwCsAS9pH",
                "lat": 54.413297,
                "lon": 18.623497,
                "x": 475572.8964008047,
                "y": 727762.5663810885
            },
            {
                "vehicle_id": "vloc_1kDyYv2fTfHPN2Lf8nc6xiFC",
                "lat": 54.211463,
                "lon": 18.661833,
                "x": 477952.46100459684,
                "y": 705299.4957742095
            },
            {
                "vehicle_id": "vloc_1jLldCtJqgIJMAD4e2dNowhv",
                "lat": 54.381948,
                "lon": 18.628648,
                "x": 475888.70972201554,
                "y": 724273.7265983922
            },
            {
                "vehicle_id": "vloc_1vABVOsbMsAqWylj8f8rYPsY",
                "lat": 54.36403,
                "lon": 18.716558,
                "x": 481588.5335393842,
                "y": 722254.1292622201
            },
            {
                "vehicle_id": "vloc_1gYQVS1s8fLzlh1IoofFHLev",
                "lat": 54.392618,
                "lon": 18.621522,
                "x": 475432.405919514,
                "y": 725463.0492777117
            },
            {
                "vehicle_id": "vloc_1o83t06MgSp9uZkyjIsauII3",
                "lat": 54.344843,
                "lon": 18.663295,
                "x": 478118.5625463384,
                "y": 720135.1180186225
            },
            {
                "vehicle_id": "vloc_1SjI89tZ2KsFvftGOgkXDsQR",
                "lat": 54.362988,
                "lon": 18.406135,
                "x": 461423.6639065508,
                "y": 722263.6932008285
            },
            {
                "vehicle_id": "vloc_1aSkvJcGd3VPTXNqd6ms8x3U",
                "lat": 54.376597,
                "lon": 18.611212,
                "x": 474753.34042434645,
                "y": 723684.6219523288
            },
            {
                "vehicle_id": "vloc_1iB7fGvzUBODRtd6FGKaEcXL",
                "lat": 54.382007,
                "lon": 18.629092,
                "x": 475917.572338126,
                "y": 724280.1375713618
            },
            {
                "vehicle_id": "vloc_1ZVjc1mVQbU8N7J1dwi8wKgA",
                "lat": 54.350945,
                "lon": 18.618192,
                "x": 475191.14364600164,
                "y": 720828.7938741939
            },
            {
                "vehicle_id": "vloc_1ZPLcw9KoEPjIWHdixo1ylRl",
                "lat": 54.345805,
                "lon": 18.477052,
                "x": 466016.0763552313,
                "y": 720315.9012145549
            },
            {
                "vehicle_id": "vloc_1L6xL4b4xN5bPh5S3O5sVjev",
                "lat": 54.38183,
                "lon": 18.629075,
                "x": 475916.36494647287,
                "y": 724260.4550616546
            },
            {
                "vehicle_id": "vloc_1NpWdxhkAcpqr6R4Yg3LqehR",
                "lat": 54.381938,
                "lon": 18.62902,
                "x": 475912.8571226767,
                "y": 724272.4870679397
            },
            {
                "vehicle_id": "vloc_12QaSIatBRWpjYP7ovXGSeRh",
                "lat": 54.381925,
                "lon": 18.61145,
                "x": 474772.06240900536,
                "y": 724277.1878396058
            },
            {
                "vehicle_id": "vloc_1YQgrj3hhblml8f11VcnjcIX",
                "lat": 54.278347,
                "lon": 18.653062,
                "x": 477417.1766459619,
                "y": 712741.8432214363
            },
            {
                "vehicle_id": "vloc_1EmK02Jgm5FZv0LM9UMHbvuF",
                "lat": 54.321405,
                "lon": 18.504893,
                "x": 467806.2626269421,
                "y": 717588.7802988468
            },
            {
                "vehicle_id": "vloc_19Dbt3gHLzLo3kt90w8fXBBk",
                "lat": 54.40756,
                "lon": 18.640565,
                "x": 476676.9892508541,
                "y": 727118.6333037233
            },
            {
                "vehicle_id": "vloc_1ZYSss5aTfv9phlzVuXWdsuU",
                "lat": 54.346038,
                "lon": 18.454642,
                "x": 464559.97039221594,
                "y": 720352.8503541518
            },
            {
                "vehicle_id": "vloc_1HIpxTF0WDymWqY2nPwPZo5s",
                "lat": 54.29723,
                "lon": 18.572837,
                "x": 472207.9286625887,
                "y": 714870.8665120434
            },
            {
                "vehicle_id": "vloc_1xzI226yKzCI7yAO5JfE5yXj",
                "lat": 54.41776,
                "lon": 18.557298,
                "x": 471281.12254465965,
                "y": 728283.9724333892
            },
            {
                "vehicle_id": "vloc_1esgLW3ssFnwhEDuEBGNLdYk",
                "lat": 54.552108,
                "lon": 18.421948,
                "x": 462623.53363697365,
                "y": 743291.6834061835
            },
            {
                "vehicle_id": "vloc_1b86PGLxGGZivlfyaZO3HLMt",
                "lat": 54.406718,
                "lon": 18.675938,
                "x": 478971.8326611941,
                "y": 727013.8412867785
            },
            {
                "vehicle_id": "vloc_1lQmve0mT0IVEz66CxMQjypU",
                "lat": 54.59285,
                "lon": 18.356655,
                "x": 458443.25270316115,
                "y": 747860.2959006792
            },
            {
                "vehicle_id": "vloc_10e6RnLqjX85icOuOOnReSwN",
                "lat": 54.40482,
                "lon": 18.585212,
                "x": 473083.46956721676,
                "y": 726833.5866746409
            },
            {
                "vehicle_id": "vloc_1sk4bhR3KktcsG0OHdduPl7R",
                "lat": 54.29474,
                "lon": 18.449582,
                "x": 464186.623117996,
                "y": 714649.4565920308
            },
            {
                "vehicle_id": "vloc_1hvI0Tr2fvOHJQ2z9nJ90th6",
                "lat": 54.27462,
                "lon": 18.193108,
                "x": 447473.64636455296,
                "y": 712572.0436230451
            },
            {
                "vehicle_id": "vloc_1ZGyXo0DZfu4tgEYMr6CToah",
                "lat": 54.35903,
                "lon": 18.603185,
                "x": 474221.09563523997,
                "y": 721733.4954222031
            },
            {
                "vehicle_id": "vloc_1M7fJxe5Lst3tDUk2qxHv59g",
                "lat": 54.269388,
                "lon": 18.46576,
                "x": 465217.8990052484,
                "y": 711821.4424721561
            },
            {
                "vehicle_id": "vloc_1k3aWFnfDLQyxYDgchzWyAtt",
                "lat": 54.381952,
                "lon": 18.628662,
                "x": 475889.621059696,
                "y": 724274.1667428818
            },
            {
                "vehicle_id": "vloc_18fxfNK5nVLjpIl2UtNyQYzA",
                "lat": 54.361368,
                "lon": 18.650622,
                "x": 477304.0943103725,
                "y": 721977.2497973088
            },
            {
                "vehicle_id": "vloc_1LMIsXMEETW9emXYY3QpQcpy",
                "lat": 54.55325,
                "lon": 18.522407,
                "x": 469119.95558211213,
                "y": 743369.9664674578
            },
            {
                "vehicle_id": "vloc_17pUVqkowQUgCAJuwfaGPsVU",
                "lat": 54.211418,
                "lon": 18.661957,
                "x": 477960.5214712374,
                "y": 705294.4517065948
            },
            {
                "vehicle_id": "vloc_1IAK1iVLpYVGMpc5PJG2f7Lt",
                "lat": 54.274493,
                "lon": 18.416457,
                "x": 462012.7184190877,
                "y": 712414.6911958577
            },
            {
                "vehicle_id": "vloc_1d4S0ZIjNZXKFTnwHlkPThWq",
                "lat": 54.600442,
                "lon": 18.41469,
                "x": 462198.9997124198,
                "y": 748672.0400851043
            },
            {
                "vehicle_id": "vloc_13SLQVC6kujd7sQNbnokXeNf",
                "lat": 54.510588,
                "lon": 18.537043,
                "x": 470035.0482383163,
                "y": 738618.0977771431
            },
            {
                "vehicle_id": "vloc_1nQ6n0zBzFxD4sloE4kcGEbv",
                "lat": 54.464097,
                "lon": 18.561015,
                "x": 471554.37636921456,
                "y": 733436.7238556212
            },
            {
                "vehicle_id": "vloc_19ozzoggnEpDbIQlJLbkcufy",
                "lat": 54.381943,
                "lon": 18.629163,
                "x": 475922.1447705035,
                "y": 724272.9943737872
            },
            {
                "vehicle_id": "vloc_167PfjyFENxUICUvwf5DhLIC",
                "lat": 54.539938,
                "lon": 18.460078,
                "x": 465078.57817475236,
                "y": 741918.3505833959
            },
            {
                "vehicle_id": "vloc_1ZvcXzQk7ZlvaK9ozHzl3ee5",
                "lat": 54.345902,
                "lon": 18.477118,
                "x": 466020.44535595685,
                "y": 720326.6589148548
            },
            {
                "vehicle_id": "vloc_1MucdVnhHeFg6twIBCuIb2wl",
                "lat": 54.391995,
                "lon": 18.617033,
                "x": 475140.6427594224,
                "y": 725395.3249797821
            },
            {
                "vehicle_id": "vloc_1XmHATYPfcLerfIR5O2XN6SA",
                "lat": 54.263928,
                "lon": 18.441545,
                "x": 463636.5732975446,
                "y": 711226.3283822229
            },
            {
                "vehicle_id": "vloc_1xjiq2atxb2qjLDbnezoy8s3",
                "lat": 54.502905,
                "lon": 18.544477,
                "x": 470510.67938888795,
                "y": 737760.3363020495
            },
            {
                "vehicle_id": "vloc_1RHQ0WXDlZ5LcSzXuDAem19n",
                "lat": 54.347017,
                "lon": 18.571867,
                "x": 472178.433777087,
                "y": 720409.1609246582
            },
            {
                "vehicle_id": "vloc_15Duya68AtpSOQicfUQK9jtI",
                "lat": 54.585993,
                "lon": 18.405577,
                "x": 461596.8715704335,
                "y": 747069.7282641483
            },
            {
                "vehicle_id": "vloc_1qdTt91GdXQguEIkHQTgyvhs",
                "lat": 54.316627,
                "lon": 18.532123,
                "x": 469573.32240248437,
                "y": 717045.2277988298
            },
            {
                "vehicle_id": "vloc_13Y7pi8HPBE5J5I1cgyqSiKK",
                "lat": 54.49559,
                "lon": 18.538547,
                "x": 470121.4547650881,
                "y": 736949.1519517545
            },
            {
                "vehicle_id": "vloc_1ig3HJmGrO1FbqZ8GcSqJgy4",
                "lat": 54.521088,
                "lon": 18.54293,
                "x": 470423.66949387256,
                "y": 739783.5797423013
            },
            {
                "vehicle_id": "vloc_1KYLGS54hbbqY2aOS47T7enE",
                "lat": 54.27503,
                "lon": 18.693328,
                "x": 480036.5518548061,
                "y": 712360.7504227934
            },
            {
                "vehicle_id": "vloc_18Kw1vYPH84yjtip9Otr3NUH",
                "lat": 54.433125,
                "lon": 18.58098,
                "x": 472827.5740643123,
                "y": 729983.687531204
            },
            {
                "vehicle_id": "vloc_1TeA8QKxGh1vtcXQw03DvJOA",
                "lat": 54.36307,
                "lon": 18.406033,
                "x": 461417.1151070914,
                "y": 722272.8700383706
            },
            {
                "vehicle_id": "vloc_1TwYojSDboOZfvT9icNt9Q9D",
                "lat": 54.360963,
                "lon": 18.39033,
                "x": 460395.0655829112,
                "y": 722047.2125180392
            },
            {
                "vehicle_id": "vloc_1QHu4tOwNWwv8ww4l7qivNQp",
                "lat": 54.280018,
                "lon": 18.413438,
                "x": 461821.2986288872,
                "y": 713030.8683158606
            },
            {
                "vehicle_id": "vloc_1EfTTGfHTvY2A24I9C3m7kCU",
                "lat": 54.40617,
                "lon": 18.40261,
                "x": 461235.4034407721,
                "y": 727068.8607710619
            },
            {
                "vehicle_id": "vloc_1e7oSPkqu2bbfC0OyCJJZSDS",
                "lat": 54.269415,
                "lon": 18.465658,
                "x": 465211.2810157287,
                "y": 711824.4959683642
            },
            {
                "vehicle_id": "vloc_1LuD15vfWoe9g1KDQ86teBIG",
                "lat": 54.399928,
                "lon": 18.575402,
                "x": 472443.6011978841,
                "y": 726293.2237986447
            },
            {
                "vehicle_id": "vloc_1J66YZugThpbmeSOuz5HsrdG",
                "lat": 54.486008,
                "lon": 18.519022,
                "x": 468849.9595563104,
                "y": 735891.7630925719
            },
            {
                "vehicle_id": "vloc_1MPD5CRspM6cxmxk9nCdGXzd",
                "lat": 54.261777,
                "lon": 18.166605,
                "x": 445731.5469432689,
                "y": 711163.5876449887
            },
            {
                "vehicle_id": "vloc_1XAPMXHX0CbbHHvF3vge0ttD",
                "lat": 54.322408,
                "lon": 18.373295,
                "x": 459250.3496114575,
                "y": 717768.3929490084
            },
            {
                "vehicle_id": "vloc_1sjjuwcgz15T2PD4tX2qiQtq",
                "lat": 54.304542,
                "lon": 18.568677,
                "x": 471942.24474928377,
                "y": 715685.8391715884
            },
            {
                "vehicle_id": "vloc_1SzGqU9L4BRLL2XTvDOVM7uD",
                "lat": 54.089372,
                "lon": 18.759332,
                "x": 484262.87130512344,
                "y": 691693.3184083262
            },
            {
                "vehicle_id": "vloc_1zXxYY9LjcOF2v4B6fNMy4nZ",
                "lat": 54.587448,
                "lon": 18.364148,
                "x": 458921.81975763064,
                "y": 747254.9962271024
            },
            {
                "vehicle_id": "vloc_1DSPQfl3G1vgpmFPpNjEjGar",
                "lat": 54.451737,
                "lon": 18.565308,
                "x": 471824.06754258217,
                "y": 732060.1387789436
            },
            {
                "vehicle_id": "vloc_1ZmOx1WZf7TQWjk1heV4kB8C",
                "lat": 54.328743,
                "lon": 18.4528,
                "x": 464425.34177933057,
                "y": 718430.0247881701
            },
            {
                "vehicle_id": "vloc_12l6m8wbhhDp1ZS10BkBZM4W",
                "lat": 54.390578,
                "lon": 18.382455,
                "x": 459912.3633073578,
                "y": 725345.8008237183
            },
            {
                "vehicle_id": "vloc_1xG8im1qmP69jVMBI6suQyI4",
                "lat": 54.421575,
                "lon": 18.604908,
                "x": 474372.0323627625,
                "y": 728689.9655267205
            },
            {
                "vehicle_id": "vloc_18GwAofsxa2f405uOuCoE81f",
                "lat": 54.368867,
                "lon": 18.395178,
                "x": 460717.53715756384,
                "y": 722923.6766339857
            },
            {
                "vehicle_id": "vloc_1gTDFhUv0RSk6EMkuQFHFehA",
                "lat": 54.34547,
                "lon": 18.625817,
                "x": 475683.3615265877,
                "y": 720217.1381610446
            },
            {
                "vehicle_id": "vloc_1BZXaDqIZ3c6kJzvfdTmLIh9",
                "lat": 54.506075,
                "lon": 18.405117,
                "x": 461491.9656628926,
                "y": 738180.279406338
            },
            {
                "vehicle_id": "vloc_1qh0nrK354B5EGsN53ZLlKr3",
                "lat": 54.320265,
                "lon": 18.529048,
                "x": 469376.05422298505,
                "y": 717451.2198862759
            },
            {
                "vehicle_id": "vloc_1FJMrtI42iQdx8lhR69EUsAd",
                "lat": 54.462202,
                "lon": 18.546815,
                "x": 470632.8852886109,
                "y": 733231.7640623627
            },
            {
                "vehicle_id": "vloc_1gSwWmxMNfuw36cccuLHdjiR",
                "lat": 54.268628,
                "lon": 18.201153,
                "x": 447989.7979128642,
                "y": 711899.6033108626
            },
            {
                "vehicle_id": "vloc_1PDS2nyU1TQ2NXoS1FuYMJMF",
                "lat": 54.723365,
                "lon": 18.402357,
                "x": 461518.86153600586,
                "y": 762352.3738993173
            },
            {
                "vehicle_id": "vloc_1GvZHf5WKT7keBCWTbUkRyZh",
                "lat": 54.435363,
                "lon": 18.403315,
                "x": 461308.65504577395,
                "y": 730315.6970018167
            },
            {
                "vehicle_id": "vloc_1LojClvP1VFjsaX75KiurQrw",
                "lat": 54.211467,
                "lon": 18.661927,
                "x": 477958.59164784744,
                "y": 705299.9113581544
            },
            {
                "vehicle_id": "vloc_1krm0a586drZjTHnoKyb6QkC",
                "lat": 54.393972,
                "lon": 18.385273,
                "x": 460098.5833891191,
                "y": 725721.723979489
            },
            {
                "vehicle_id": "vloc_1VBZUDwlq6w8S51Jt1GxFGSW",
                "lat": 54.592813,
                "lon": 18.500667,
                "x": 467745.5627176923,
                "y": 747780.5725905886
            },
            {
                "vehicle_id": "vloc_1iHLDQnCKj43QfXVmfXiWo05",
                "lat": 54.388368,
                "lon": 18.597202,
                "x": 473851.06307416304,
                "y": 724999.0578332599
            },
            {
                "vehicle_id": "vloc_1yc1XifzLAIQ1PVrIRw96n4l",
                "lat": 54.34477,
                "lon": 18.533052,
                "x": 469654.46250030975,
                "y": 720175.231248958
            },
            {
                "vehicle_id": "vloc_1r1lZ91Fbxdr3TCAZK3KxWZc",
                "lat": 54.394582,
                "lon": 18.661353,
                "x": 478018.9375012216,
                "y": 725668.3573317509
            },
            {
                "vehicle_id": "vloc_1DVTX0FgJP212ajwC4R8uVm1",
                "lat": 54.336473,
                "lon": 18.53097,
                "x": 469513.0220991764,
                "y": 719253.2354323706
            },
            {
                "vehicle_id": "vloc_1Y6j2oLAyVENLvCGgejIRCTt",
                "lat": 54.428173,
                "lon": 18.370713,
                "x": 459187.49765290564,
                "y": 729534.3308644164
            },
            {
                "vehicle_id": "vloc_1VGAfYKb3xFqQyVrGNXmhSH5",
                "lat": 54.275082,
                "lon": 18.693223,
                "x": 480029.7418254234,
                "y": 712366.5641770521
            },
            {
                "vehicle_id": "vloc_1fjHhzGugPLuAzln5CzRcwXg",
                "lat": 54.396608,
                "lon": 18.628315,
                "x": 475875.6889812912,
                "y": 725904.5247149281
            },
            {
                "vehicle_id": "vloc_17ynwGCnJUVzFa2kdRbAylcN",
                "lat": 54.34656,
                "lon": 18.584258,
                "x": 472983.3395997896,
                "y": 720353.5092956787
            },
            {
                "vehicle_id": "vloc_1C2l4EFEQ0ubYKms1iCDoWOC",
                "lat": 54.4556,
                "lon": 18.540473,
                "x": 470217.12369455263,
                "y": 732500.0578602683
            },
            {
                "vehicle_id": "vloc_1sxYIaRaHF2Igo4BYKxj6vAU",
                "lat": 54.458403,
                "lon": 18.560858,
                "x": 471540.2527996709,
                "y": 732803.4174890239
            },
            {
                "vehicle_id": "vloc_136VavUSvOd1mYIaOMd5Xoij",
                "lat": 54.474135,
                "lon": 18.458607,
                "x": 464927.1231575065,
                "y": 734599.4924085634
            },
            {
                "vehicle_id": "vloc_1se8A5pFZlhJ7YDtnu8OlAgc",
                "lat": 54.554772,
                "lon": 18.507273,
                "x": 468142.6204870701,
                "y": 743546.0179056069
            },
            {
                "vehicle_id": "vloc_1H5NdfQZUZmzthOH7Pc2jvb0",
                "lat": 54.357853,
                "lon": 18.372158,
                "x": 459211.52362828923,
                "y": 721711.6430554288
            },
            {
                "vehicle_id": "vloc_17TcqMJ0HskeF0LarInubH0N",
                "lat": 54.426117,
                "lon": 18.471257,
                "x": 465706.5117596927,
                "y": 729252.0334699461
            },
            {
                "vehicle_id": "vloc_1WmM3e6ugiXH9rhuHn8DwuFM",
                "lat": 54.473187,
                "lon": 18.554423,
                "x": 471133.62586698384,
                "y": 734450.5305346446
            },
            {
                "vehicle_id": "vloc_1JK19wku4JGUow0RwNPGJAuD",
                "lat": 54.402588,
                "lon": 18.571927,
                "x": 472219.8726473304,
                "y": 726590.4695444405
            },
            {
                "vehicle_id": "vloc_1rPZq6sJi24dnEFEHUEZlUnC",
                "lat": 54.306667,
                "lon": 18.596858,
                "x": 473776.7722237498,
                "y": 715911.3653559266
            },
            {
                "vehicle_id": "vloc_1pdarQOaCSvyaZ0qlhbhS0Ke",
                "lat": 54.385633,
                "lon": 18.643893,
                "x": 476880.61002652254,
                "y": 724678.5139546096
            },
            {
                "vehicle_id": "vloc_1SNB3yqz6xtdTVN9A5eqOxrL",
                "lat": 54.33083,
                "lon": 18.207225,
                "x": 448462.86302399886,
                "y": 718813.8290389394
            },
            {
                "vehicle_id": "vloc_1AFBPi4X8GETa8HMGMarbJkh",
                "lat": 54.362855,
                "lon": 18.646193,
                "x": 477017.2137991615,
                "y": 722144.0883469163
            },
            {
                "vehicle_id": "vloc_1us6bT07Hk5qEr5qzsj8qtGK",
                "lat": 54.56516,
                "lon": 18.392087,
                "x": 460705.31428875314,
                "y": 744759.8072066382
            },
            {
                "vehicle_id": "vloc_1aihkqeBDXnwo6biAwSEus0O",
                "lat": 54.463133,
                "lon": 18.549623,
                "x": 470815.509398967,
                "y": 733334.1558964858
            },
            {
                "vehicle_id": "vloc_1Eg0yVMOje0eUNcYLRXjm8vO",
                "lat": 54.300872,
                "lon": 18.553992,
                "x": 470984.40422536986,
                "y": 715283.558762514
            },
            {
                "vehicle_id": "vloc_1skArjW543VlGo34DtdlFLGT",
                "lat": 54.349498,
                "lon": 18.353673,
                "x": 458002.12094163353,
                "y": 720793.1566984653
            },
            {
                "vehicle_id": "vloc_1eD5YsJCXuaWn1Owu0WOoqSi",
                "lat": 54.473665,
                "lon": 18.484457,
                "x": 466601.3569671855,
                "y": 734534.6412222758
            },
            {
                "vehicle_id": "vloc_1gUqTyEU8uV6H2YBt0CfpELI",
                "lat": 54.383818,
                "lon": 18.626002,
                "x": 475718.0137392356,
                "y": 724482.6415490462
            },
            {
                "vehicle_id": "vloc_1uSZC0QO4LjeUXx8zsjL4tD2",
                "lat": 54.323632,
                "lon": 18.631753,
                "x": 476056.43242693524,
                "y": 717786.0104062762
            },
            {
                "vehicle_id": "vloc_1WJkjK7Z5Qh0Ejh7pgT22UZj",
                "lat": 54.527817,
                "lon": 18.509312,
                "x": 468253.5350745302,
                "y": 740546.7350032497
            },
            {
                "vehicle_id": "vloc_1kiCIyxln8apDZ1bxcnkFKgQ",
                "lat": 54.349487,
                "lon": 18.353677,
                "x": 458002.36963939696,
                "y": 720791.930771362
            },
            {
                "vehicle_id": "vloc_18Xgoba6hEbOX3vknF8RSBat",
                "lat": 54.402627,
                "lon": 18.571992,
                "x": 472224.11719816097,
                "y": 726594.7820291966
            },
            {
                "vehicle_id": "vloc_1Pu0oXzYeYG2BKB690uFiVQd",
                "lat": 54.381902,
                "lon": 18.628695,
                "x": 475891.7343870983,
                "y": 724268.5937828021
            },
            {
                "vehicle_id": "vloc_1GShf39wEBPiZ3TrlElw06zc",
                "lat": 54.352622,
                "lon": 17.902362,
                "x": 428682.5675913923,
                "y": 721503.3136161696
            },
            {
                "vehicle_id": "vloc_1ej3OpbkYShAQ5zAF5gtf3N9",
                "lat": 54.375005,
                "lon": 18.464172,
                "x": 465203.7600515827,
                "y": 723570.1663818136
            },
            {
                "vehicle_id": "vloc_1uGnk8OGpljuTFyzCuPV4Axc",
                "lat": 54.257687,
                "lon": 18.651962,
                "x": 477334.24426965445,
                "y": 710444.1545947138
            },
            {
                "vehicle_id": "vloc_11fOkI7z9HwGNFHiQPvtzNRs",
                "lat": 54.350115,
                "lon": 17.889147,
                "x": 427819.5826894489,
                "y": 721237.9160949439
            },
            {
                "vehicle_id": "vloc_1UoV05dqSeNQSNhReYyxQ9Hk",
                "lat": 54.355713,
                "lon": 18.379243,
                "x": 459669.70710289106,
                "y": 721469.5314570377
            },
            {
                "vehicle_id": "vloc_1E0vimwOO76cWzZCpxeTE0mB",
                "lat": 54.591057,
                "lon": 18.495467,
                "x": 467408.2693679117,
                "y": 747587.6394055067
            },
            {
                "vehicle_id": "vloc_1eTd0gMRWZiFYOsaizDKG3dO",
                "lat": 54.623057,
                "lon": 18.350367,
                "x": 458068.14509721164,
                "y": 751224.1379474653
            },
            {
                "vehicle_id": "vloc_1upp8krHB9Ork3QZiU8qbmSS",
                "lat": 54.320273,
                "lon": 18.49829,
                "x": 467376.018334184,
                "y": 717465.899921258
            },
            {
                "vehicle_id": "vloc_192SWanifBXYl7tOglToc3mE",
                "lat": 54.381507,
                "lon": 18.60725,
                "x": 474499.1053146909,
                "y": 724232.2037741086
            },
            {
                "vehicle_id": "vloc_1mUZvk3r7m1ijuIIrUgOOqnP",
                "lat": 54.54886,
                "lon": 18.449568,
                "x": 464406.57891353505,
                "y": 742916.0624252353
            },
            {
                "vehicle_id": "vloc_1P96XqmQyYUUnHt3XIXazPgG",
                "lat": 54.350155,
                "lon": 18.652237,
                "x": 477402.85359881906,
                "y": 720729.4749441752
            },
            {
                "vehicle_id": "vloc_1RLRsLzxYuHiPHgP0or44PXS",
                "lat": 54.539247,
                "lon": 18.506978,
                "x": 468111.4421746532,
                "y": 741819.2142288061
            },
            {
                "vehicle_id": "vloc_1zZsFHSWeC3SI8hdzWko6Czv",
                "lat": 54.587092,
                "lon": 18.388923,
                "x": 460522.0036632959,
                "y": 747201.2014938472
            },
            {
                "vehicle_id": "vloc_1RMJ42G7ziEaGxxXvkFPKFPD",
                "lat": 54.451,
                "lon": 18.549248,
                "x": 470782.57007613475,
                "y": 731984.7036286108
            },
            {
                "vehicle_id": "vloc_1U144ol6yB14PF6mafWwQajL",
                "lat": 54.363032,
                "lon": 18.40613,
                "x": 461423.38034950604,
                "y": 722268.5901414277
            },
            {
                "vehicle_id": "vloc_1C80uFSECwgBy08Jn0Mi4GqU",
                "lat": 54.329585,
                "lon": 18.655218,
                "x": 477585.36704311974,
                "y": 718440.4657432074
            },
            {
                "vehicle_id": "vloc_12HNK9Ea7ZHCKX2tBMAnPRvq",
                "lat": 54.452585,
                "lon": 18.563898,
                "x": 471733.25868257834,
                "y": 732155.0306682959
            },
            {
                "vehicle_id": "vloc_1YPYNBu3SAQEsoGPEDFZ7mVC",
                "lat": 54.360598,
                "lon": 18.720362,
                "x": 481834.1140652817,
                "y": 721871.3894295366
            },
            {
                "vehicle_id": "vloc_1FYqvYXjcPJCWkOjiR4lXEUW",
                "lat": 54.326832,
                "lon": 18.586237,
                "x": 473099.067485408,
                "y": 718158.3596483972
            },
            {
                "vehicle_id": "vloc_1DWdfw74w3xA5SMmJkr7mYm5",
                "lat": 54.396242,
                "lon": 18.646827,
                "x": 477077.00606938696,
                "y": 725857.6335085547
            },
            {
                "vehicle_id": "vloc_1OMbK4Iv3tQI6BYlIRKGnxP6",
                "lat": 54.4416,
                "lon": 18.559887,
                "x": 471465.64369393815,
                "y": 730934.7389728185
            },
            {
                "vehicle_id": "vloc_1ySyzTyBZ2sZcJOx6OghwOUi",
                "lat": 54.495097,
                "lon": 18.546777,
                "x": 470653.9809139074,
                "y": 736890.8503185026
            },
            {
                "vehicle_id": "vloc_1ceqEe7bvYOailb04NgUKWE9",
                "lat": 54.316308,
                "lon": 18.483047,
                "x": 466381.60963067226,
                "y": 717032.0241122032
            },
            {
                "vehicle_id": "vloc_1GJUD6mQrsLW3PaofwCsyb9O",
                "lat": 54.362895,
                "lon": 18.70507,
                "x": 480841.7844806805,
                "y": 722130.940465916
            },
            {
                "vehicle_id": "vloc_1cQ4XcChNNgRVfxbpb9czX1Z",
                "lat": 54.3539,
                "lon": 18.419238,
                "x": 462266.4729655726,
                "y": 721245.726538009
            },
            {
                "vehicle_id": "vloc_1G1w0OZmHVeiEMXUaM8MSY92",
                "lat": 54.348742,
                "lon": 18.655797,
                "x": 477633.409193767,
                "y": 720571.167709128
            },
            {
                "vehicle_id": "vloc_1h8wlZaXY6Lo6HLYccMGXKM0",
                "lat": 54.424885,
                "lon": 18.598608,
                "x": 473965.47773912107,
                "y": 729060.4604917346
            },
            {
                "vehicle_id": "vloc_11aVPOXmM7Yq6s7MKnM83fdn",
                "lat": 54.086843,
                "lon": 18.795477,
                "x": 486625.5533950498,
                "y": 691404.5844762418
            },
            {
                "vehicle_id": "vloc_1t4KrFU58SQT6t4pRPlTqMKw",
                "lat": 54.332462,
                "lon": 18.201143,
                "x": 448069.5456076032,
                "y": 718999.8177136099
            },
            {
                "vehicle_id": "vloc_1J0d4l6aVnpiwoQhUtV8JKyq",
                "lat": 54.3181,
                "lon": 18.258973,
                "x": 451811.9852582252,
                "y": 717361.2872254578
            },
            {
                "vehicle_id": "vloc_1VgFaEJaqIRwAUH9ylbOpjVZ",
                "lat": 54.404092,
                "lon": 18.595507,
                "x": 473751.0668902419,
                "y": 726748.7245691232
            },
            {
                "vehicle_id": "vloc_1gd5kzyfDeL441qwBRuxTtYu",
                "lat": 54.382028,
                "lon": 18.628748,
                "x": 475895.2494057607,
                "y": 724282.5910684057
            },
            {
                "vehicle_id": "vloc_1BkiAQarIfwH9m2ObVyDC3w0",
                "lat": 54.47977,
                "lon": 18.552683,
                "x": 471025.55491806293,
                "y": 735183.5043312823
            },
            {
                "vehicle_id": "vloc_1Rp1aYn2mZ9g9AlcK6Qr16rw",
                "lat": 54.381768,
                "lon": 18.62899,
                "x": 475910.8097386466,
                "y": 724253.5876367735
            },
            {
                "vehicle_id": "vloc_1C7C5zyvmR5OhRlF4fy8vE8e",
                "lat": 54.377087,
                "lon": 18.610745,
                "x": 474723.3160759383,
                "y": 723739.2936251219
            },
            {
                "vehicle_id": "vloc_1ieiIoQ7yZSQStZ6WtFBf3jB",
                "lat": 54.26489,
                "lon": 18.162592,
                "x": 445474.34509651683,
                "y": 711512.9338920116
            },
            {
                "vehicle_id": "vloc_1WsaiJhfp9zcbVZ2XKZPtzop",
                "lat": 54.720635,
                "lon": 18.411525,
                "x": 462106.6189584244,
                "y": 762043.704383716
            },
            {
                "vehicle_id": "vloc_1cbu8DUCH3gSJ8GDvySYSAvy",
                "lat": 54.309803,
                "lon": 18.4704,
                "x": 465553.7273737584,
                "y": 716314.5651521673
            },
            {
                "vehicle_id": "vloc_1a7f37yT6JWmxv8UJCaBLwis",
                "lat": 54.605227,
                "lon": 18.256658,
                "x": 451998.636683482,
                "y": 749300.7637274191
            },
            {
                "vehicle_id": "vloc_1DVUXdRfzWoKhp4T1MB32jSf",
                "lat": 54.353642,
                "lon": 18.421037,
                "x": 462383.1214592985,
                "y": 721216.06740396
            },
            {
                "vehicle_id": "vloc_197tBUCDstmC6zawR3NwG7Cy",
                "lat": 54.402618,
                "lon": 18.572122,
                "x": 472232.547510799,
                "y": 726593.7296896828
            },
            {
                "vehicle_id": "vloc_1uTPDwk3TM0UrHUa2YbruxhE",
                "lat": 54.436278,
                "lon": 18.581105,
                "x": 472837.76582326135,
                "y": 730334.360765079
            },
            {
                "vehicle_id": "vloc_1mh0x55DmiemPlUNNznoyKV9",
                "lat": 54.381983,
                "lon": 18.628758,
                "x": 475895.8723201123,
                "y": 724277.5821436904
            },
            {
                "vehicle_id": "vloc_1hKwB0W2tGcQWn5SHRbOIA9z",
                "lat": 54.486085,
                "lon": 18.519512,
                "x": 468881.7521229846,
                "y": 735900.111441263
            },
            {
                "vehicle_id": "vloc_1YuqMdyqMCOQSpQnPDhxbAJ2",
                "lat": 54.406967,
                "lon": 18.67781,
                "x": 479093.4317334237,
                "y": 727040.9814998871
            },
            {
                "vehicle_id": "vloc_1uAHvvpy1Ma1vxb2UvsSUfT2",
                "lat": 54.5222,
                "lon": 18.54306,
                "x": 470432.8848819049,
                "y": 739907.2191151269
            },
            {
                "vehicle_id": "vloc_1VQMlpJKhN4RCpWVnkIKBCJm",
                "lat": 54.263512,
                "lon": 18.66463,
                "x": 478162.3150893573,
                "y": 711088.0836089458
            },
            {
                "vehicle_id": "vloc_16r1pQlcgrjYNT8fUCkWkTZl",
                "lat": 54.272887,
                "lon": 18.498062,
                "x": 467323.695540369,
                "y": 712195.201612466
            },
            {
                "vehicle_id": "vloc_1slKA0R5eKgfUDf1JKof3fgT",
                "lat": 54.381968,
                "lon": 18.628635,
                "x": 475887.87737849215,
                "y": 724275.9557144605
            },
            {
                "vehicle_id": "vloc_1lWwbCPtHbFD3xLaDWRZpq8m",
                "lat": 54.609762,
                "lon": 18.486425,
                "x": 466839.383900917,
                "y": 749672.5527943401
            },
            {
                "vehicle_id": "vloc_1UyFTguDU1WSiic358SZHHpr",
                "lat": 54.34917,
                "lon": 18.624987,
                "x": 475631.6123158989,
                "y": 720628.986001296
            },
            {
                "vehicle_id": "vloc_1dQ0D2c3xVJ3d8tbscJb9ueQ",
                "lat": 54.38195,
                "lon": 18.628565,
                "x": 475883.3218616507,
                "y": 724273.9774624286
            },
            {
                "vehicle_id": "vloc_1TkYylp6LADWtzAxT3HwCeEb",
                "lat": 54.301105,
                "lon": 18.55435,
                "x": 471007.85791172605,
                "y": 715309.3285552962
            },
            {
                "vehicle_id": "vloc_1h97AB7FoyHPEjYUbNXlil5i",
                "lat": 54.381963,
                "lon": 18.628623,
                "x": 475887.0953110446,
                "y": 724275.4036526391
            },
            {
                "vehicle_id": "vloc_1x03O3Bs2JYQWxbpZxLn05cs",
                "lat": 54.34881,
                "lon": 18.67536,
                "x": 478904.6591836554,
                "y": 720572.7023278289
            },
            {
                "vehicle_id": "vloc_1gAaytssuTk3IfqB9aT5i1oR",
                "lat": 54.378115,
                "lon": 18.597252,
                "x": 473847.7918264654,
                "y": 723858.5639653495
            },
            {
                "vehicle_id": "vloc_15ZRKM0NoBjzttymLd0PaQ58",
                "lat": 54.420333,
                "lon": 18.583945,
                "x": 473011.44169808907,
                "y": 728559.6415151842
            },
            {
                "vehicle_id": "vloc_1qkdgIaXFrEKbHPKAKNJ48Ae",
                "lat": 54.260822,
                "lon": 18.64697,
                "x": 477010.88866881793,
                "y": 710794.4788919119
            },
            {
                "vehicle_id": "vloc_1hmUbgoDUV78H8Mi8eloLWGD",
                "lat": 54.470183,
                "lon": 18.464288,
                "x": 465291.80481135414,
                "y": 734157.0790970046
            },
            {
                "vehicle_id": "vloc_1loLjE8cYl1YW419I4QFUUag",
                "lat": 54.346175,
                "lon": 18.45463,
                "x": 464559.30844565394,
                "y": 720368.0951573187
            },
            {
                "vehicle_id": "vloc_196qL4UXkHl1DxJ8eB97Voy5",
                "lat": 54.345162,
                "lon": 17.893177,
                "x": 428072.78281132755,
                "y": 720682.8908458436
            },
            {
                "vehicle_id": "vloc_1Wa4GLTN2561ruWh6rSmZnVw",
                "lat": 54.521992,
                "lon": 18.529397,
                "x": 469548.6477947578,
                "y": 739889.9097172916
            },
            {
                "vehicle_id": "vloc_1qXZDUnQH5dQl1IKRShMaFxY",
                "lat": 54.259968,
                "lon": 18.669988,
                "x": 478509.3581037326,
                "y": 710692.2352236593
            },
            {
                "vehicle_id": "vloc_1eZFKovEZXRY9fEfsCwZsMnN",
                "lat": 54.429602,
                "lon": 18.390342,
                "x": 460461.89941069036,
                "y": 729682.0871699667
            },
            {
                "vehicle_id": "vloc_1OLn93wt7wrSIc94W87xg8T2",
                "lat": 54.379332,
                "lon": 18.618868,
                "x": 475252.1394447403,
                "y": 723986.1298542889
            },
            {
                "vehicle_id": "vloc_1UkUF9H8KRX9ukLmMthrQBPi",
                "lat": 54.406988,
                "lon": 18.677785,
                "x": 479091.82019773,
                "y": 727043.3248339267
            },
            {
                "vehicle_id": "vloc_1Kr1FYZ47NUol8eA6dWmAnAq",
                "lat": 54.508482,
                "lon": 18.532367,
                "x": 469730.838914049,
                "y": 738385.8373962529
            },
            {
                "vehicle_id": "vloc_1DJfi8neC3qj34ZuCrh0KaVL",
                "lat": 54.276965,
                "lon": 18.66587,
                "x": 478250.14172475337,
                "y": 712584.0982483812
            },
            {
                "vehicle_id": "vloc_1m1vLlu82qz7QTtypfkFeshZ",
                "lat": 54.563567,
                "lon": 18.498175,
                "x": 467561.3732008222,
                "y": 744528.4984198706
            },
            {
                "vehicle_id": "vloc_167Bifa6RGrZ5qX9d6GVKLg6",
                "lat": 54.346477,
                "lon": 17.89887,
                "x": 428445.013793822,
                "y": 720823.3616399588
            },
            {
                "vehicle_id": "vloc_1Sq19OMLjFiCUpsn2A13OquZ",
                "lat": 54.363975,
                "lon": 18.63764,
                "x": 476462.26610574697,
                "y": 722271.491491192
            },
            {
                "vehicle_id": "vloc_1rp974YbgaPPfJwtD0l9eTrs",
                "lat": 54.426713,
                "lon": 18.40928,
                "x": 461687.3747557978,
                "y": 729350.2695028428
            },
            {
                "vehicle_id": "vloc_1fna3JTVjzPj0l1GXEBbpmcH",
                "lat": 54.55002,
                "lon": 18.453948,
                "x": 464690.80849737034,
                "y": 743042.8880229536
            },
            {
                "vehicle_id": "vloc_1xsbcKGHSEILv56IUkFyBWoN",
                "lat": 54.544042,
                "lon": 18.447305,
                "x": 464256.03321002016,
                "y": 742381.2771504847
            },
            {
                "vehicle_id": "vloc_1EHWU4gF9bq5cZqKgea2MklJ",
                "lat": 54.463973,
                "lon": 18.561075,
                "x": 471558.17827565916,
                "y": 733422.9065199979
            },
            {
                "vehicle_id": "vloc_1ABCzjue2OwCDhKhNLy7YO1m",
                "lat": 54.513958,
                "lon": 18.531843,
                "x": 469700.9740296608,
                "y": 738995.1878271699
            },
            {
                "vehicle_id": "vloc_1U7962XEuxSdeB1lcloHAbSO",
                "lat": 54.455533,
                "lon": 18.455382,
                "x": 464702.19538010465,
                "y": 732531.927233588
            },
            {
                "vehicle_id": "vloc_1e6ACU2AkUZrIuoUoRzhcjjN",
                "lat": 54.379652,
                "lon": 18.61862,
                "x": 475236.22885801864,
                "y": 724021.8116317075
            },
            {
                "vehicle_id": "vloc_1k3scZghEK4yyHvTKtfCjKpD",
                "lat": 54.479823,
                "lon": 18.552695,
                "x": 471026.3696605368,
                "y": 735189.3948418973
            },
            {
                "vehicle_id": "vloc_1onhVIzTQ5Ahmzn7I6tlWtQF",
                "lat": 54.600875,
                "lon": 18.24121,
                "x": 450995.873587122,
                "y": 748827.3288119882
            },
            {
                "vehicle_id": "vloc_1tfaBYEfPo8j7MJ8bKAeL6xh",
                "lat": 54.319983,
                "lon": 18.529025,
                "x": 469374.34919776185,
                "y": 717419.8624930223
            },
            {
                "vehicle_id": "vloc_1AXKGXFJu6nf0ma54mYVQKRp",
                "lat": 54.363442,
                "lon": 18.699628,
                "x": 480488.5405003976,
                "y": 722193.277643905
            },
            {
                "vehicle_id": "vloc_1t3ucIB4zeUUnmQM1BlkTume",
                "lat": 54.381952,
                "lon": 18.628632,
                "x": 475887.67321671254,
                "y": 724274.1770057967
            },
            {
                "vehicle_id": "vloc_10tjAxYaiIhP0y0UWKxCCBhM",
                "lat": 54.404258,
                "lon": 18.639192,
                "x": 476586.01760172733,
                "y": 726751.7942513311
            },
            {
                "vehicle_id": "vloc_1390HfaxB2coTj2sJm7g343U",
                "lat": 54.381972,
                "lon": 18.629118,
                "x": 475919.23997991474,
                "y": 724276.2355174301
            },
            {
                "vehicle_id": "vloc_1Sa7x7rCVR8y1ghsFBCMqWgu",
                "lat": 54.415477,
                "lon": 18.443103,
                "x": 463871.1468731364,
                "y": 728082.5834049871
            },
            {
                "vehicle_id": "vloc_1VHTWFVEOM6buD9BnQMG87mb",
                "lat": 54.086232,
                "lon": 18.799658,
                "x": 486898.7702312769,
                "y": 691335.8415075475
            },
            {
                "vehicle_id": "vloc_12taGmXvH2HMzJdSxB9tM0RK",
                "lat": 54.555737,
                "lon": 18.474215,
                "x": 466006.06925807276,
                "y": 743668.8373915711
            },
            {
                "vehicle_id": "vloc_1lJG58t1rRl511v6mwrFhhPY",
                "lat": 54.091602,
                "lon": 18.777962,
                "x": 485481.85181875736,
                "y": 691937.3739584461
            },
            {
                "vehicle_id": "vloc_1hQFupMqTczihLH2TEScone6",
                "lat": 54.385378,
                "lon": 18.581467,
                "x": 472827.6051820964,
                "y": 724672.4224985121
            },
            {
                "vehicle_id": "vloc_1kUYFKctIBLfNHF4oNe8hp0k",
                "lat": 54.446928,
                "lon": 18.556583,
                "x": 471255.16452604387,
                "y": 731528.7387968954
            },
            {
                "vehicle_id": "vloc_1CCStCevFR8FySr7aHyh5Rzq",
                "lat": 54.321358,
                "lon": 18.550113,
                "x": 470746.5851706679,
                "y": 717563.8552437937
            },
            {
                "vehicle_id": "vloc_10MU8jwDl98yULAdVH6zZfxX",
                "lat": 54.105635,
                "lon": 18.81194,
                "x": 487707.68020787573,
                "y": 693491.8069388708
            },
            {
                "vehicle_id": "vloc_1MWoooA94MDhEl8yPHkGgGfM",
                "lat": 54.332437,
                "lon": 18.656517,
                "x": 477671.3610849182,
                "y": 718757.2890653107
            },
            {
                "vehicle_id": "vloc_12ssNGkvsQABilgfUimZueot",
                "lat": 54.362895,
                "lon": 18.646202,
                "x": 477017.8207529513,
                "y": 722148.5347390398
            },
            {
                "vehicle_id": "vloc_17xTBhx77ZH5JoydzodgthbJ",
                "lat": 54.348248,
                "lon": 18.643375,
                "x": 476825.9428894127,
                "y": 720520.2301521171
            },
            {
                "vehicle_id": "vloc_1BY7td2Ptdj978mEWlTC113X",
                "lat": 54.559728,
                "lon": 18.40649,
                "x": 461631.19424641784,
                "y": 744147.6224265061
            },
            {
                "vehicle_id": "vloc_1xOhaWiSipoYP63SoeIhTC2Y",
                "lat": 54.350472,
                "lon": 18.645307,
                "x": 476952.731230852,
                "y": 720766.9788722377
            },
            {
                "vehicle_id": "vloc_1CZgLhfRC7fPeveG5sgrkP3V",
                "lat": 54.372522,
                "lon": 18.61037,
                "x": 474696.1583247364,
                "y": 723231.6484766863
            },
            {
                "vehicle_id": "vloc_1Tv31Lxswci6pvYPSnWeX5PM",
                "lat": 54.530213,
                "lon": 18.455937,
                "x": 464802.37995679595,
                "y": 740838.6501361905
            },
            {
                "vehicle_id": "vloc_1p5sTOYo5R7NLvYw2VOv6t2p",
                "lat": 54.376723,
                "lon": 18.611315,
                "x": 474760.10617143504,
                "y": 723698.6004562359
            },
            {
                "vehicle_id": "vloc_1u2hexkVtouniHnw78iG2Dps",
                "lat": 54.59124,
                "lon": 18.464538,
                "x": 465410.4970488181,
                "y": 747622.7747727893
            },
            {
                "vehicle_id": "vloc_15zHDIbm75P9kPTpkCONRBIR",
                "lat": 54.346888,
                "lon": 18.66427,
                "x": 478183.0076613575,
                "y": 720362.2871951004
            },
            {
                "vehicle_id": "vloc_1LkJSye9raIheXeBDWZGaZHT",
                "lat": 54.63282,
                "lon": 18.358533,
                "x": 458605.14315715095,
                "y": 752305.2970411135
            },
            {
                "vehicle_id": "vloc_1nGFFtJUMvGEnYD9r8WAzcPh",
                "lat": 54.3644,
                "lon": 18.266763,
                "x": 452372.1018817535,
                "y": 722505.9663766054
            },
            {
                "vehicle_id": "vloc_1sTdzl4udZs4hkJfPj7K50HY",
                "lat": 54.401697,
                "lon": 18.652648,
                "x": 477457.8125702523,
                "y": 726462.5361997122
            },
            {
                "vehicle_id": "vloc_168MhDK19cTDImQcj9R1xON5",
                "lat": 54.388573,
                "lon": 18.581642,
                "x": 472841.07629344653,
                "y": 725027.7455240833
            },
            {
                "vehicle_id": "vloc_1x3vxLitFFDKhFyifxTFmEbq",
                "lat": 54.341347,
                "lon": 18.660918,
                "x": 477962.219158489,
                "y": 719746.9882180868
            },
            {
                "vehicle_id": "vloc_1KwJZg5IYzcYxEEmGkId4p5W",
                "lat": 54.412965,
                "lon": 18.624873,
                "x": 475661.97273563035,
                "y": 727725.1604888029
            },
            {
                "vehicle_id": "vloc_1lg4UTIm55THerlECQnwGBaN",
                "lat": 54.383563,
                "lon": 18.604177,
                "x": 474300.8636564925,
                "y": 724462.0157265924
            },
            {
                "vehicle_id": "vloc_1J89CdCeyDaQbKV3B86XfFqV",
                "lat": 54.382032,
                "lon": 18.629275,
                "x": 475929.4687917466,
                "y": 724282.8558940813
            },
            {
                "vehicle_id": "vloc_1k1r1NAyex5fsBHmB6Iy974o",
                "lat": 54.381957,
                "lon": 18.629128,
                "x": 475919.88048088684,
                "y": 724274.5635992587
            },
            {
                "vehicle_id": "vloc_1gZsoVsyDom336sClb0g8PsH",
                "lat": 54.251875,
                "lon": 18.062513,
                "x": 438938.90759694175,
                "y": 710147.2452965211
            },
            {
                "vehicle_id": "vloc_1VseZMTxfRL8OUDJhB98XBuF",
                "lat": 54.436147,
                "lon": 18.557448,
                "x": 471303.7028388456,
                "y": 730329.169952102
            },
            {
                "vehicle_id": "vloc_1MU6pp6jEvzzDJW5QGXknvwF",
                "lat": 54.318103,
                "lon": 18.259018,
                "x": 451814.91500275454,
                "y": 717361.5901736086
            },
            {
                "vehicle_id": "vloc_1qklvzRkWI3Tm8UPUGZWm2v4",
                "lat": 54.614512,
                "lon": 18.354607,
                "x": 458333.09069598373,
                "y": 750271.1022662483
            },
            {
                "vehicle_id": "vloc_1oaW9AnW8MOTYEJvX9sJuS8n",
                "lat": 54.248103,
                "lon": 18.64171,
                "x": 476661.181472448,
                "y": 709381.4559554597
            },
            {
                "vehicle_id": "vloc_1hdBAHw79jJX2VQGJHN4vBVw",
                "lat": 54.40262,
                "lon": 18.572132,
                "x": 472233.19781504624,
                "y": 726593.9482161375
            },
            {
                "vehicle_id": "vloc_1450QAiuvUuTRjPD37Ud308f",
                "lat": 54.42611,
                "lon": 18.596423,
                "x": 473824.53877202945,
                "y": 729197.532004742
            },
            {
                "vehicle_id": "vloc_1WIkD3SRbkSfi4gT3StTshlD",
                "lat": 54.508668,
                "lon": 18.53806,
                "x": 470099.4712094064,
                "y": 738404.0932563534
            },
            {
                "vehicle_id": "vloc_1CaaDamsKwwM0cjcYymw96XG",
                "lat": 54.394488,
                "lon": 18.621,
                "x": 475399.6409390193,
                "y": 725671.2382503143
            },
            {
                "vehicle_id": "vloc_1NOQRumR2LEqDL08Fcr39MzD",
                "lat": 54.317493,
                "lon": 18.515042,
                "x": 468463.1923149575,
                "y": 717149.056845108
            },
            {
                "vehicle_id": "vloc_1fQFUw5Bexvio17yrIcTBhfl",
                "lat": 54.58688,
                "lon": 18.374843,
                "x": 459612.18184032995,
                "y": 747185.6174264839
            },
            {
                "vehicle_id": "vloc_1NibErbZ9tuCUzcAx4EVWtvg",
                "lat": 54.518242,
                "lon": 18.540848,
                "x": 470286.8813359969,
                "y": 739467.8804909093
            },
            {
                "vehicle_id": "vloc_1DdQbZrxGnyggR7Bgi9g5fhb",
                "lat": 54.26452,
                "lon": 18.654823,
                "x": 477524.28102687944,
                "y": 711203.2832490066
            },
            {
                "vehicle_id": "vloc_1oeD8wHeV5fxhQmc196wKyYE",
                "lat": 54.394292,
                "lon": 18.404353,
                "x": 461337.33656973613,
                "y": 725746.682477193
            },
            {
                "vehicle_id": "vloc_1uKXZW5Boc7kctkz3YfgpZBf",
                "lat": 54.36807,
                "lon": 18.392218,
                "x": 460524.52664836624,
                "y": 722836.6783283204
            },
            {
                "vehicle_id": "vloc_1oMmY1CwdKY9NzLyV98EBliZ",
                "lat": 54.43433,
                "lon": 18.575407,
                "x": 472466.98871346883,
                "y": 730119.8889213642
            },
            {
                "vehicle_id": "vloc_12yQ6MxJiwuUaWn3cJc9GKrU",
                "lat": 54.08694,
                "lon": 18.795462,
                "x": 486624.603690296,
                "y": 691415.3764753453
            },
            {
                "vehicle_id": "vloc_1F8AXeI4iLPAlVCPws9ic9ZX",
                "lat": 54.428177,
                "lon": 18.370643,
                "x": 459182.9618267414,
                "y": 729534.8163562985
            },
            {
                "vehicle_id": "vloc_1b74qtj1XgsbATRICiBdZtHs",
                "lat": 54.08565,
                "lon": 18.801195,
                "x": 486999.09926417534,
                "y": 691270.8229833646
            },
            {
                "vehicle_id": "vloc_1ImmqeIFt0DrvrIbZTdxLpVJ",
                "lat": 54.464058,
                "lon": 18.561018,
                "x": 471554.5437162375,
                "y": 733432.3844921747
            },
            {
                "vehicle_id": "vloc_1IWnucbtv4abFxe1efn5VSRM",
                "lat": 54.28371,
                "lon": 18.492765,
                "x": 466987.51493520895,
                "y": 713401.5188191701
            },
            {
                "vehicle_id": "vloc_1OQINJ0BKKvgYrKg2fgnskyT",
                "lat": 54.402632,
                "lon": 18.572003,
                "x": 472224.83442493615,
                "y": 726595.3338609841
            },
            {
                "vehicle_id": "vloc_1u5Jsr250CkrzgwiUll1DPQU",
                "lat": 54.553253,
                "lon": 18.418152,
                "x": 462379.1432025506,
                "y": 743421.071990692
            },
            {
                "vehicle_id": "vloc_1tdXQDg2cHPSs0JVVSWj9ZFL",
                "lat": 54.590917,
                "lon": 18.415003,
                "x": 462210.3961284219,
                "y": 747612.3465889143
            },
            {
                "vehicle_id": "vloc_17mJz8Kw5E4DoSkGBlJWwD62",
                "lat": 54.3799,
                "lon": 18.622998,
                "x": 475520.647440546,
                "y": 724047.8681535823
            },
            {
                "vehicle_id": "vloc_1JwpT49W8RHbpUJZGmcd650X",
                "lat": 54.628802,
                "lon": 18.360178,
                "x": 458707.22600954265,
                "y": 751857.3808034267
            },
            {
                "vehicle_id": "vloc_1LuSdj1EeXNuAlZ4Ejwuhrb3",
                "lat": 54.614773,
                "lon": 18.35815,
                "x": 458562.0906416439,
                "y": 750298.0400196882
            },
            {
                "vehicle_id": "vloc_1RZoTH2Fjcycrmct90KzpLZX",
                "lat": 54.402653,
                "lon": 18.571842,
                "x": 472214.40047347546,
                "y": 726597.7332414221
            },
            {
                "vehicle_id": "vloc_1nSAIXUursWzY2bq4l6yeeKl",
                "lat": 54.4273,
                "lon": 18.38226,
                "x": 459935.5190041977,
                "y": 729430.595533316
            },
            {
                "vehicle_id": "vloc_1YnmvTliGseOhpR0LM0ILekQ",
                "lat": 54.409128,
                "lon": 18.638757,
                "x": 476560.56652694783,
                "y": 727293.6481452333
            },
            {
                "vehicle_id": "vloc_1vX3KET46R9OkhnYe8Pi2p81",
                "lat": 54.08243,
                "lon": 18.790722,
                "x": 486313.1563531769,
                "y": 690914.6428065598
            },
            {
                "vehicle_id": "vloc_1J9BTxUw6LgxdqpDL2AYBVQC",
                "lat": 54.335425,
                "lon": 18.668845,
                "x": 478474.3193928962,
                "y": 719085.8192954706
            },
            {
                "vehicle_id": "vloc_1ctJpnhQCkRNU2WXQE9WmJsu",
                "lat": 54.441172,
                "lon": 18.563555,
                "x": 471703.15886831644,
                "y": 730885.6507998509
            },
            {
                "vehicle_id": "vloc_1K3F7Puis7U5O35Rb2I05N1F",
                "lat": 54.338293,
                "lon": 18.90177,
                "x": 493615.3043678605,
                "y": 719358.7437534267
            },
            {
                "vehicle_id": "vloc_1b458UotvIfPtXyhkIBYdAlO",
                "lat": 54.32119,
                "lon": 18.631313,
                "x": 476026.40373225027,
                "y": 717514.5304683372
            },
            {
                "vehicle_id": "vloc_1I6vo16sRxXXVRamYGYAqkFu",
                "lat": 54.381947,
                "lon": 18.62915,
                "x": 475921.30304612924,
                "y": 724273.4437487032
            },
            {
                "vehicle_id": "vloc_14BuI3NVxjlcLvuOAzMyUb9k",
                "lat": 54.473755,
                "lon": 18.484475,
                "x": 466602.5963689026,
                "y": 734544.6437815139
            },
            {
                "vehicle_id": "vloc_1iHZN0OImiiuqj7q5ftMrKlS",
                "lat": 54.347843,
                "lon": 18.641572,
                "x": 476708.55258252873,
                "y": 720475.7749145878
            },
            {
                "vehicle_id": "vloc_1ekyeDlP3gw4mYaivBDfAidJ",
                "lat": 54.56424,
                "lon": 18.390988,
                "x": 460633.3909567983,
                "y": 744658.0852129273
            },
            {
                "vehicle_id": "vloc_1ImjirsMwvBCJuboO8ANRBV2",
                "lat": 54.435892,
                "lon": 18.581447,
                "x": 472859.6867061766,
                "y": 730291.2925142581
            },
            {
                "vehicle_id": "vloc_1OvQskSKLX3rTU05ycB7fLav",
                "lat": 54.087002,
                "lon": 18.798485,
                "x": 486822.30675150175,
                "y": 691421.7053092718
            },
            {
                "vehicle_id": "vloc_1ytOXJTwP1F2779hCNhMJWa6",
                "lat": 54.382222,
                "lon": 18.71164,
                "x": 481277.3552839185,
                "y": 724278.9859502576
            },
            {
                "vehicle_id": "vloc_1cpt3O7fXiXaCu00kRrQAb8J",
                "lat": 54.523007,
                "lon": 18.53884,
                "x": 470160.4125780865,
                "y": 739998.7678666543
            },
            {
                "vehicle_id": "vloc_1vib1xNSceDrg0IjXaxzGaLQ",
                "lat": 54.401997,
                "lon": 18.666998,
                "x": 478389.24227813614,
                "y": 726491.4104756648
            },
            {
                "vehicle_id": "vloc_1iFVH0J5dvjm16HPr6ocMblq",
                "lat": 54.08958,
                "lon": 18.784598,
                "x": 485915.0669881852,
                "y": 691711.1282817898
            },
            {
                "vehicle_id": "vloc_1r0oOikleUaUf9PITKxQ1TXy",
                "lat": 54.344262,
                "lon": 18.631283,
                "x": 476037.870539988,
                "y": 720080.8977883812
            },
            {
                "vehicle_id": "vloc_1Dh2RS9Bmc8UWmmGz13VFgJY",
                "lat": 54.35407,
                "lon": 18.623807,
                "x": 475557.84420422727,
                "y": 721174.4354535565
            },
            {
                "vehicle_id": "vloc_1sogt2GDBqRASXpgi3ZMyx45",
                "lat": 54.329513,
                "lon": 18.65514,
                "x": 477580.25704152614,
                "y": 718432.4817904215
            },
            {
                "vehicle_id": "vloc_1O5jhRaxtt36Otqdbc7wrsps",
                "lat": 54.326772,
                "lon": 18.586405,
                "x": 473109.95086096803,
                "y": 718151.6216495093
            },
            {
                "vehicle_id": "vloc_1bM8WIVjtEtWppD76rVWscdA",
                "lat": 54.402653,
                "lon": 18.572002,
                "x": 472224.7837182734,
                "y": 726597.6701601818
            },
            {
                "vehicle_id": "vloc_17QQ5chifx3WzcWRGWJmNcX9",
                "lat": 54.41507,
                "lon": 18.601065,
                "x": 474118.6568338831,
                "y": 727967.7932735253
            },
            {
                "vehicle_id": "vloc_1CSXeFSeuQluQIrnqxYEcxd4",
                "lat": 54.300858,
                "lon": 18.554033,
                "x": 470987.06166983553,
                "y": 715281.984658937
            },
            {
                "vehicle_id": "vloc_1HSHNjpD5qCxNkliFUIRD4Ie",
                "lat": 54.407023,
                "lon": 18.566618,
                "x": 471878.37738578854,
                "y": 727085.8965726988
            },
            {
                "vehicle_id": "vloc_1VbVTMyMV7EHPcGEQYTh02W0",
                "lat": 54.300863,
                "lon": 18.554127,
                "x": 470993.18043236324,
                "y": 715282.5021658298
            },
            {
                "vehicle_id": "vloc_1WYPSUAdeayjhVsq9LfRzWjZ",
                "lat": 54.464077,
                "lon": 18.561055,
                "x": 471556.95442832826,
                "y": 733434.4830029765
            },
            {
                "vehicle_id": "vloc_1F3SZHwJ0c4EHDsQg51PAK4Q",
                "lat": 54.370017,
                "lon": 18.610758,
                "x": 474719.8175546805,
                "y": 722952.8701838283
            },
            {
                "vehicle_id": "vloc_1rFmob6y2FGK6oCMYAJAjekg",
                "lat": 54.38146,
                "lon": 18.607282,
                "x": 474501.15390460845,
                "y": 724226.9642296834
            },
            {
                "vehicle_id": "vloc_1XhX0dk0Scm4XsdWh7g4e80s",
                "lat": 54.383092,
                "lon": 18.614583,
                "x": 474976.19201621495,
                "y": 724405.8803009829
            },
            {
                "vehicle_id": "vloc_1TuwIS3fTZsUdbz0jEWj4Gv9",
                "lat": 54.34743,
                "lon": 17.888923,
                "x": 427800.32183948613,
                "y": 720939.5012698062
            },
            {
                "vehicle_id": "vloc_1ekvBAKajjw8oC3iXaZMlzYe",
                "lat": 54.233327,
                "lon": 17.962512,
                "x": 432395.465668828,
                "y": 708175.3414629046
            },
            {
                "vehicle_id": "vloc_1AWFFPRIIdem4h46k5A1y5cf",
                "lat": 54.389825,
                "lon": 18.650602,
                "x": 477318.4856922794,
                "y": 725142.6252557682
            }
        ]
    }
]

let pointState = {};
let previousPointState = {};
let fadeHistory = []; // Array to store previous states for fading
let t = 0; // current timestamp
let frameCounter = 0; // Counter to introduce delay

new p5((p5) => {

    p5.preload = () => {
        ShaderMain = p5.loadShader('main_vert.glsl', 'main_frag.glsl');
        ShaderSide = p5.loadShader('side_vert.glsl', 'side_frag.glsl');
        texture = p5.loadImage('assets/gda_debug.png');
	customFont = p5.loadFont('assets/E1234.ttf')
	//loadedData = p5.loadJSON('assets/dump_10.json');
    }

    p5.setup = () => {
        p5.createCanvas(4738, 2130, p5.WEBGL); // Match canvas size to texture size
        pMapper = p5.createProjectionMapper(p5);

        pgMain = p5.createGraphics(texture.width, texture.height, p5.WEBGL);

        MapMain = pMapper.createQuadMap(texture.width, texture.height);

        pMapper.load("maps/map.json");

        // Set the loaded font
        p5.textFont(customFont);

        // Initialize graphics buffers
        initializeGraphics(pgMain, "pink");

	for(i in loadedData) {
	  loadedData[i].bikes.map((bike) => {
	    let transformed = transformCoordinates(bike.x, bike.y);
	    bike.x_lol = transformed.x;
	    bike.y_lol = transformed.y;
	    return bike;
	  })
	}
	
	console.log(loadedData)
        // Initialize pointState with the first timestamp
	//console.log(loadedData[t]);
        updatePointState(loadedData[t]);
	console.log("setup done")
    }

    p5.draw = () => {
        p5.background(0);

        drawGraphics(pgMain, ShaderMain, MapMainSketch, p5);
        MapMain.displaySketch((pg) => {
            pg.image(pgMain, 0, 0); // Center the image without scaling
        });

        // Increment frame counter and update pointState every 5 frames
        frameCounter++;
        if (frameCounter % 5 === 0) {
            t = (t + 1) % 10;
            updatePointState(loadedData[t]);
        }

        // Update fade history
        updateFadeHistory();
    }

    p5.keyPressed = () => {
        switch (p5.key) {
            case 'c':
                pMapper.toggleCalibration();
                break;
            case 'f':
                let fs = p5.fullscreen();
                p5.fullscreen(!fs);
                break;
            case 'l':
                pMapper.load("maps/map.json");
                break;
            case 's':
                pMapper.save("map.json");
                break;
        }
    }

    function initializeGraphics(pg, bgColor) {
        pg.push();
        pg.background(bgColor);
        pg.pop();
    }

    function drawGraphics(pg, shader, drawFunction, p5) {
        pg.push();
        pg.clear(); // Clear the buffer for new drawing
        drawFunction(pg, p5); // Execute the custom drawing function
        pg.pop();
    }

    function MapMainSketch(pg, p5) {
        pg.push();
        pg.textureMode(p5.NORMAL); // Set texture mode
        pg.noStroke();

        // Calculate date and time based on current timestamp
        let timestamp = loadedData[t].timestamp;
        let date = new Date(timestamp); // Create a Date object from the timestamp string

        // Extract day, month, year, hour, and minute
        let day = date.getDate().toString().padStart(2, '0'); // Get day of the month (1-31)
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-11, hence the +1)
        let year = date.getFullYear().toString().slice(-2); // Get year (last two digits)
        let hourOfDay = date.getHours().toString().padStart(2, '0'); // Get hour (0-23)
        let minuteOfDay = date.getMinutes().toString().padStart(2, '0'); // Get minute (0-59)

        // Format DD.MM.YY HH:MM text
        let dateText = `${day}.${month}.${year}`;
        let timeText = `${hourOfDay}:${minuteOfDay}`;

        // Draw DD.MM.YY and HH:MM text separately with a newline in between
        pg.textFont(customFont); // Set the font
        pg.textSize(32); // Adjust text size as needed
        pg.fill(255, 0, 0); // Set text color to red
        pg.textAlign(p5.CENTER); // Align text to center

        // Calculate positions based on canvas size
        let x = pg.width / 4;
        let yDate = -160; // Y position for date text
        let yTime = -120; // Y position for time text

        pg.text(dateText, x, yDate); // Draw date text
        pg.text(timeText, x, yTime); // Draw time text

        // Map hour of the day to a hue value
        let hue = p5.map(hourOfDay, 0, 23, 240, 60); // Map 0-23 hours to hue from blue to yellow

        // Apply hue to the texture
        pg.tint(p5.color(hue, 255, 255)); // Convert hue to RGB and apply as tint

        pg.texture(texture); // Apply the texture
        pg.plane(texture.width, texture.height);

        // Draw fading bikes and lines
        drawFadingElements(pg);

        // Draw current bikes and their movement lines
        pg.push();
        pg.fill(255, 0, 0);
        pg.stroke(0, 255, 0); // Set stroke color to green

        for (let bike of loadedData[t].bikes) {
            let id = bike.vehicle_id;
            if (previousPointState[id]) {
                let prevBike = previousPointState[id];
                pg.line(prevBike.x, prevBike.y, bike.x, bike.y); // Draw line from previous to current position
            }
            pg.noStroke();
            pg.ellipse(bike.x, bike.y, pg.width / 250);
	    //console.log(bike.x_lol, bike.y_lol)
        }
        pg.pop();

        pg.pop();
    }

    function updatePointState(currentData) {
        // Store current state as previous state
        previousPointState = JSON.parse(JSON.stringify(pointState));

	const bikes = currentData.bikes;

        bikes.forEach(bike => {
            if (pointState[bike.vehicle_id]) {
                // Add to fade history if the bike moved
                fadeHistory.push({
                    id: bike.vehicle_id,
                    x1: pointState[bike.vehicle_id].x,
                    y1: pointState[bike.vehicle_id].y,
                    x2: bike.x,
                    y2: bike.y,
                    alpha: 255
                });
            }
            pointState[bike.vehicle_id] = { x: bike.x, y: bike.y };
        });

        // If a bike is missing from the current data, retain its last known position
        Object.keys(pointState).forEach(id => {
            if (!bikes.some(bike => bike.vehicle_id === id)) {
                pointState[id] = pointState[id]; // retain last known position
            }
        });
    }

    function updateFadeHistory() {
        // Reduce the alpha value of each element in the fade history
        fadeHistory.forEach((element, index) => {
            element.alpha -= 5; // Adjust this value to control fade speed
            if (element.alpha <= 0) {
                fadeHistory.splice(index, 1);
            }
        });
    }

    function drawFadingElements(pg) {
        pg.push();
        fadeHistory.forEach(element => {
            pg.stroke(0, 255, 0, element.alpha); // Green lines with fading alpha
            pg.line(element.x1, element.y1, element.x2, element.y2);
            pg.noStroke();
            pg.fill(255, 0, 0, element.alpha); // Red ellipses with fading alpha
            pg.ellipse(element.x1, element.y1, pg.width / 250);
            pg.ellipse(element.x2, element.y2, pg.width / 250);
        });
        pg.pop();
    }

    function transformCoordinates(x, y) {
	// Provided transformation parameters
	const scaleX = 38.01475810276674849;
	const scaleY = -38.01475810276674849;
	const translateX = 462971.32492332014953718;
	const translateY = 731588.82012094859965146;

	console.log(x,y)
	// Transform x and y
	const transformedX = x * scaleX + translateX;
	const transformedY = y * scaleY + translateY;
	
	console.log(transformedX, transformedY)
	
	return { transformedX, transformedY };
    }

});
