use CO2_trackings;
db.dropDatabase();

db.trackings.insertMany([
{"date": {
        "year": "2016",
        "month": "January"
        },
        "entries": {
        "electricBill": 200,
        "gasBill": 300,
        "oilBill": 200,
        "carMileage": 2000,
        "flightUnder": 2,
        "flightOver": 1,
        "recyclePaper": false,
        "recycleAluminium": false
        },
        "emissions": {
        "electricBill": 21000,
        "gasBill": 31500,
        "oilBill": 22600,
        "carMileage": 790,
        "flightUnder": 2200,
        "flightOver": 4400,
        "recyclePaper": 184,
        "recycleAluminium": 166
        },
        "totalEmissions": 82208
        },
        {
            "date": {
            "year": "2016",
            "month": "February"
            },
            "entries": {
            "electricBill": 300,
            "gasBill": 200,
            "oilBill": 200,
            "carMileage": 180,
            "flightUnder": 1,
            "flightOver": 0,
            "recyclePaper": false,
            "recycleAluminium": false
            },
            "emissions": {
            "electricBill": 31500,
            "gasBill": 21000,
            "oilBill": 20340,
            "carMileage": 142.20000000000002,
            "flightUnder": 1100,
            "flightOver": 0,
            "recyclePaper": 184,
            "recycleAluminium": 166
            },
            "totalEmissions": 74432.2
            },
            {
                "date": {
                "year": "2016",
                "month": "March"
                },
                "entries": {
                "electricBill": 100,
                "gasBill": 150,
                "oilBill": 150,
                "carMileage": 2000,
                "flightUnder": 1,
                "flightOver": 1,
                "recyclePaper": false,
                "recycleAluminium": false
                },
                "emissions": {
                "electricBill": 10500,
                "gasBill": 15750,
                "oilBill": 226000,
                "carMileage": 1580,
                "flightUnder": 1100,
                "flightOver": 4400,
                "recyclePaper": 184,
                "recycleAluminium": 166
                },
                "totalEmissions": 259680
                },
                {
                    "date": {
                    "year": "2016",
                    "month": "April"
                    },
                    "entries": {
                    "electricBill": 100,
                    "gasBill": 150,
                    "oilBill": 200,
                    "carMileage": 2000,
                    "flightUnder": 0,
                    "flightOver": 2,
                    "recyclePaper": true,
                    "recycleAluminium": true
                    },
                    "emissions": {
                    "electricBill": 10500,
                    "gasBill": 15750,
                    "oilBill": 226000,
                    "carMileage": 1580,
                    "flightUnder": 0,
                    "flightOver": 8800,
                    "recyclePaper": 0,
                    "recycleAluminium": 0
                    },
                    "totalEmissions": 262630
                    },
                    {
                        "date": {
                        "year": "2016",
                        "month": "May"
                        },
                        "entries": {
                        "electricBill": 120,
                        "gasBill": 180,
                        "oilBill": 350,
                        "carMileage": 3000,
                        "flightUnder": 0,
                        "flightOver": 0,
                        "recyclePaper": true,
                        "recycleAluminium": true
                        },
                        "emissions": {
                        "electricBill": 12600,
                        "gasBill": 18900,
                        "oilBill": 339000,
                        "carMileage": 2370,
                        "flightUnder": 0,
                        "flightOver": 0,
                        "recyclePaper": 0,
                        "recycleAluminium": 0
                        },
                        "totalEmissions": 372870
                        },
                        {
                            "date": {
                            "year": "2016",
                            "month": "June"
                            },
                            "entries": {
                            "electricBill": 80,
                            "gasBill": 60,
                            "oilBill": 80,
                            "carMileage": 500,
                            "flightUnder": 0,
                            "flightOver": 0,
                            "recyclePaper": true,
                            "recycleAluminium": true
                            },
                            "emissions": {
                            "electricBill": 8400,
                            "gasBill": 6300,
                            "oilBill": 56500,
                            "carMileage": 395,
                            "flightUnder": 0,
                            "flightOver": 0,
                            "recyclePaper": 0,
                            "recycleAluminium": 0
                            },
                            "totalEmissions": 71595
                            },
                            {
                                "date": {
                                "year": "2016",
                                "month": "July"
                                },
                                "entries": {
                                "electricBill": 70,
                                "gasBill": 80,
                                "oilBill": 100,
                                "carMileage": 1200,
                                "flightUnder": 0,
                                "flightOver": 0,
                                "recyclePaper": true,
                                "recycleAluminium": true
                                },
                                "emissions": {
                                "electricBill": 7350,
                                "gasBill": 8400,
                                "oilBill": 135600,
                                "carMileage": 948,
                                "flightUnder": 0,
                                "flightOver": 0,
                                "recyclePaper": 0,
                                "recycleAluminium": 0
                                },
                                "totalEmissions": 152298
                                },
                                {
                                    "date": {
                                    "year": "2016",
                                    "month": "August"
                                    },
                                    "entries": {
                                    "electricBill": 180,
                                    "gasBill": 150,
                                    "oilBill": 120,
                                    "carMileage": 1600,
                                    "flightUnder": 0,
                                    "flightOver": 1,
                                    "recyclePaper": true,
                                    "recycleAluminium": true
                                    },
                                    "emissions": {
                                    "electricBill": 18900,
                                    "gasBill": 15750,
                                    "oilBill": 180800,
                                    "carMileage": 1264,
                                    "flightUnder": 0,
                                    "flightOver": 4400,
                                    "recyclePaper": 0,
                                    "recycleAluminium": 0
                                    },
                                    "totalEmissions": 221114
                                    },
                                    {
                                        "date": {
                                        "year": "2016",
                                        "month": "September"
                                        },
                                        "entries": {
                                        "electricBill": 150,
                                        "gasBill": 150,
                                        "oilBill": 200,
                                        "carMileage": 1300,
                                        "flightUnder": 2,
                                        "flightOver": 0,
                                        "recyclePaper": true,
                                        "recycleAluminium": true
                                        },
                                        "emissions": {
                                        "electricBill": 15750,
                                        "gasBill": 15750,
                                        "oilBill": 146900,
                                        "carMileage": 1027,
                                        "flightUnder": 2200,
                                        "flightOver": 0,
                                        "recyclePaper": 0,
                                        "recycleAluminium": 0
                                        },
                                        "totalEmissions": 181627
                                        },
                                        {
                                            "date": {
                                            "year": "2016",
                                            "month": "October"
                                            },
                                            "entries": {
                                            "electricBill": 200,
                                            "gasBill": 200,
                                            "oilBill": 200,
                                            "carMileage": 2000,
                                            "flightUnder": 2,
                                            "flightOver": 0,
                                            "recyclePaper": true,
                                            "recycleAluminium": true
                                            },
                                            "emissions": {
                                            "electricBill": 21000,
                                            "gasBill": 21000,
                                            "oilBill": 226000,
                                            "carMileage": 1580,
                                            "flightUnder": 2200,
                                            "flightOver": 0,
                                            "recyclePaper": 0,
                                            "recycleAluminium": 0
                                            },
                                            "totalEmissions": 271780
                                            },
                                            {
                                                "date": {
                                                "year": "2016",
                                                "month": "November"
                                                },
                                                "entries": {
                                                "electricBill": 350,
                                                "gasBill": 350,
                                                "oilBill": 340,
                                                "carMileage": 2000,
                                                "flightUnder": 0,
                                                "flightOver": 1,
                                                "recyclePaper": true,
                                                "recycleAluminium": true
                                                },
                                                "emissions": {
                                                "electricBill": 36750,
                                                "gasBill": 36750,
                                                "oilBill": 226000,
                                                "carMileage": 1580,
                                                "flightUnder": 0,
                                                "flightOver": 4400,
                                                "recyclePaper": 0,
                                                "recycleAluminium": 0
                                                },
                                                "totalEmissions": 305480
                                                },
                                                {
                                                    "date": {
                                                    "year": "2016",
                                                    "month": "December"
                                                    },
                                                    "entries": {
                                                    "electricBill": 400,
                                                    "gasBill": 450,
                                                    "oilBill": 430,
                                                    "carMileage": 3000,
                                                    "flightUnder": 1,
                                                    "flightOver": 0,
                                                    "recyclePaper": true,
                                                    "recycleAluminium": true
                                                    },
                                                    "emissions": {
                                                    "electricBill": 42000,
                                                    "gasBill": 47250,
                                                    "oilBill": 339000,
                                                    "carMileage": 2370,
                                                    "flightUnder": 1100,
                                                    "flightOver": 0,
                                                    "recyclePaper": 0,
                                                    "recycleAluminium": 0
                                                    },
                                                    "totalEmissions": 431720
                                                    },
                                                    {
                                                        "date": {
                                                        "year": "2017",
                                                        "month": "January"
                                                        },
                                                        "entries": {
                                                        "electricBill": 450,
                                                        "gasBill": 250,
                                                        "oilBill": 200,
                                                        "carMileage": 1200,
                                                        "flightUnder": 1,
                                                        "flightOver": 0,
                                                        "recyclePaper": true,
                                                        "recycleAluminium": true
                                                        },
                                                        "emissions": {
                                                        "electricBill": 47250,
                                                        "gasBill": 26250,
                                                        "oilBill": 22600,
                                                        "carMileage": 948,
                                                        "flightUnder": 1100,
                                                        "flightOver": 0,
                                                        "recyclePaper": 0,
                                                        "recycleAluminium": 0
                                                        },
                                                        "totalEmissions": 98148
                                                        },
                                                        {
                                                            "date": {
                                                            "year": "2017",
                                                            "month": "February"
                                                            },
                                                            "entries": {
                                                            "electricBill": 470,
                                                            "gasBill": 500,
                                                            "oilBill": 340,
                                                            "carMileage": 1800,
                                                            "flightUnder": 1,
                                                            "flightOver": 1,
                                                            "recyclePaper": false,
                                                            "recycleAluminium": true
                                                            },
                                                            "emissions": {
                                                            "electricBill": 49350,
                                                            "gasBill": 52500,
                                                            "oilBill": 38420,
                                                            "carMileage": 1422,
                                                            "flightUnder": 1100,
                                                            "flightOver": 4400,
                                                            "recyclePaper": 184,
                                                            "recycleAluminium": 0
                                                            },
                                                            "totalEmissions": 147376
                                                            },
                                                            {
                                                                "date": {
                                                                "year": "2017",
                                                                "month": "March"
                                                                },
                                                                "entries": {
                                                                "electricBill": 120,
                                                                "gasBill": 130,
                                                                "oilBill": 200,
                                                                "carMileage": 800,
                                                                "flightUnder": 0,
                                                                "flightOver": 0,
                                                                "recyclePaper": true,
                                                                "recycleAluminium": true
                                                                },
                                                                "emissions": {
                                                                "electricBill": 12600,
                                                                "gasBill": 13650,
                                                                "oilBill": 22600,
                                                                "carMileage": 632,
                                                                "flightUnder": 0,
                                                                "flightOver": 0,
                                                                "recyclePaper": 0,
                                                                "recycleAluminium": 0
                                                                },
                                                                "totalEmissions": 49482
                                                                },
                                                                {
                                                                    "date": {
                                                                    "year": "2017",
                                                                    "month": "April"
                                                                    },
                                                                    "entries": {
                                                                    "electricBill": 150,
                                                                    "gasBill": 100,
                                                                    "oilBill": 300,
                                                                    "carMileage": 2000,
                                                                    "flightUnder": 0,
                                                                    "flightOver": 1,
                                                                    "recyclePaper": false,
                                                                    "recycleAluminium": true
                                                                    },
                                                                    "emissions": {
                                                                    "electricBill": 15750,
                                                                    "gasBill": 10500,
                                                                    "oilBill": 33900,
                                                                    "carMileage": 1580,
                                                                    "flightUnder": 0,
                                                                    "flightOver": 4400,
                                                                    "recyclePaper": 184,
                                                                    "recycleAluminium": 0
                                                                    },
                                                                    "totalEmissions": 66314
                                                                    },
                                                                     {
                                                                        "date": {
                                                                        "year": "2017",
                                                                        "month": "May"
                                                                        },
                                                                        "entries": {
                                                                        "electricBill": 170,
                                                                        "gasBill": 130,
                                                                        "oilBill": 290,
                                                                        "carMileage": 1300,
                                                                        "flightUnder": 1,
                                                                        "flightOver": 0,
                                                                        "recyclePaper": false,
                                                                        "recycleAluminium": false
                                                                        },
                                                                        "emissions": {
                                                                        "electricBill": 17850,
                                                                        "gasBill": 13650,
                                                                        "oilBill": 32770,
                                                                        "carMileage": 1027,
                                                                        "flightUnder": 1100,
                                                                        "flightOver": 0,
                                                                        "recyclePaper": 184,
                                                                        "recycleAluminium": 166
                                                                        },
                                                                        "totalEmissions": 66747
                                                                        },
                                                                        {
                                                                            "date": {
                                                                            "year": "2017",
                                                                            "month": "June"
                                                                            },
                                                                            "entries": {
                                                                            "electricBill": 120,
                                                                            "gasBill": 130,
                                                                            "oilBill": 250,
                                                                            "carMileage": 800,
                                                                            "flightUnder": 0,
                                                                            "flightOver": 0,
                                                                            "recyclePaper": false,
                                                                            "recycleAluminium": false
                                                                            },
                                                                            "emissions": {
                                                                            "electricBill": 12600,
                                                                            "gasBill": 13650,
                                                                            "oilBill": 28250,
                                                                            "carMileage": 632,
                                                                            "flightUnder": 0,
                                                                            "flightOver": 0,
                                                                            "recyclePaper": 184,
                                                                            "recycleAluminium": 166
                                                                            },
                                                                            "totalEmissions": 55482
                                                                            },
                                                                            {
                                                                                "date": {
                                                                                "year": "2017",
                                                                                "month": "July"
                                                                                },
                                                                                "entries": {
                                                                                "electricBill": 170,
                                                                                "gasBill": 80,
                                                                                "oilBill": 220,
                                                                                "carMileage": 1100,
                                                                                "flightUnder": 1,
                                                                                "flightOver": 0,
                                                                                "recyclePaper": true,
                                                                                "recycleAluminium": true
                                                                                },
                                                                                "emissions": {
                                                                                "electricBill": 17850,
                                                                                "gasBill": 8400,
                                                                                "oilBill": 24860,
                                                                                "carMileage": 869,
                                                                                "flightUnder": 1100,
                                                                                "flightOver": 0,
                                                                                "recyclePaper": 0,
                                                                                "recycleAluminium": 0
                                                                                },
                                                                                "totalEmissions": 53079
                                                                                },
                                                                                {
                                                                                    "date": {
                                                                                    "year": "2017",
                                                                                    "month": "August"
                                                                                    },
                                                                                    "entries": {
                                                                                    "electricBill": 80,
                                                                                    "gasBill": 90,
                                                                                    "oilBill": 100,
                                                                                    "carMileage": 400,
                                                                                    "flightUnder": 1,
                                                                                    "flightOver": 0,
                                                                                    "recyclePaper": true,
                                                                                    "recycleAluminium": true
                                                                                    },
                                                                                    "emissions": {
                                                                                    "electricBill": 8400,
                                                                                    "gasBill": 9450,
                                                                                    "oilBill": 11300,
                                                                                    "carMileage": 316,
                                                                                    "flightUnder": 1100,
                                                                                    "flightOver": 0,
                                                                                    "recyclePaper": 0,
                                                                                    "recycleAluminium": 0
                                                                                    },
                                                                                    "totalEmissions": 30566
                                                                                    },
                                                                                    {
                                                                                        "date": {
                                                                                        "year": "2017",
                                                                                        "month": "September"
                                                                                        },
                                                                                        "entries": {
                                                                                        "electricBill": 130,
                                                                                        "gasBill": 110,
                                                                                        "oilBill": 200,
                                                                                        "carMileage": 1000,
                                                                                        "flightUnder": 0,
                                                                                        "flightOver": 0,
                                                                                        "recyclePaper": true,
                                                                                        "recycleAluminium": true
                                                                                        },
                                                                                        "emissions": {
                                                                                        "electricBill": 13650,
                                                                                        "gasBill": 11550,
                                                                                        "oilBill": 22600,
                                                                                        "carMileage": 790,
                                                                                        "flightUnder": 0,
                                                                                        "flightOver": 0,
                                                                                        "recyclePaper": 0,
                                                                                        "recycleAluminium": 0
                                                                                        },
                                                                                        "totalEmissions": 48590
                                                                                        },
                                                                                        {
                                                                                            "date": {
                                                                                            "year": "2017",
                                                                                            "month": "October"
                                                                                            },
                                                                                            "entries": {
                                                                                            "electricBill": 300,
                                                                                            "gasBill": 400,
                                                                                            "oilBill": 200,
                                                                                            "carMileage": 1100,
                                                                                            "flightUnder": 2,
                                                                                            "flightOver": 0,
                                                                                            "recyclePaper": false,
                                                                                            "recycleAluminium": false
                                                                                            },
                                                                                            "emissions": {
                                                                                            "electricBill": 31500,
                                                                                            "gasBill": 42000,
                                                                                            "oilBill": 22600,
                                                                                            "carMileage": 869,
                                                                                            "flightUnder": 2200,
                                                                                            "flightOver": 0,
                                                                                            "recyclePaper": 184,
                                                                                            "recycleAluminium": 166
                                                                                            },
                                                                                            "totalEmissions": 99519
                                                                                            },
                                                                                            {
                                                                                                "date": {
                                                                                                "year": "2017",
                                                                                                "month": "November"
                                                                                                },
                                                                                                "entries": {
                                                                                                "electricBill": 300,
                                                                                                "gasBill": 400,
                                                                                                "oilBill": 340,
                                                                                                "carMileage": 1300,
                                                                                                "flightUnder": 0,
                                                                                                "flightOver": 0,
                                                                                                "recyclePaper": true,
                                                                                                "recycleAluminium": true
                                                                                                },
                                                                                                "emissions": {
                                                                                                "electricBill": 31500,
                                                                                                "gasBill": 42000,
                                                                                                "oilBill": 38420,
                                                                                                "carMileage": 1027,
                                                                                                "flightUnder": 0,
                                                                                                "flightOver": 0,
                                                                                                "recyclePaper": 0,
                                                                                                "recycleAluminium": 0
                                                                                                },
                                                                                                "totalEmissions": 112947
                                                                                                },
                                                                                                {
                                                                                                    "date": {
                                                                                                    "year": "2017",
                                                                                                    "month": "December"
                                                                                                    },
                                                                                                    "entries": {
                                                                                                    "electricBill": 320,
                                                                                                    "gasBill": 480,
                                                                                                    "oilBill": 380,
                                                                                                    "carMileage": 1700,
                                                                                                    "flightUnder": 0,
                                                                                                    "flightOver": 0,
                                                                                                    "recyclePaper": true,
                                                                                                    "recycleAluminium": true
                                                                                                    },
                                                                                                    "emissions": {
                                                                                                    "electricBill": 33600,
                                                                                                    "gasBill": 50400,
                                                                                                    "oilBill": 42940,
                                                                                                    "carMileage": 1343,
                                                                                                    "flightUnder": 0,
                                                                                                    "flightOver": 0,
                                                                                                    "recyclePaper": 0,
                                                                                                    "recycleAluminium": 0
                                                                                                    },
                                                                                                    "totalEmissions": 128283
                                                                                                    },
                                                                                                    {
                                                                                                        "date": {
                                                                                                        "year": "2018",
                                                                                                        "month": "January"
                                                                                                        },
                                                                                                        "entries": {
                                                                                                        "electricBill": 380,
                                                                                                        "gasBill": 450,
                                                                                                        "oilBill": 380,
                                                                                                        "carMileage": 1300,
                                                                                                        "flightUnder": 0,
                                                                                                        "flightOver": 0,
                                                                                                        "recyclePaper": true,
                                                                                                        "recycleAluminium": true
                                                                                                        },
                                                                                                        "emissions": {
                                                                                                        "electricBill": 39900,
                                                                                                        "gasBill": 47250,
                                                                                                        "oilBill": 42940,
                                                                                                        "carMileage": 1027,
                                                                                                        "flightUnder": 0,
                                                                                                        "flightOver": 0,
                                                                                                        "recyclePaper": 0,
                                                                                                        "recycleAluminium": 0
                                                                                                        },
                                                                                                        "totalEmissions": 131117
                                                                                                        },
                                                                                                        {
                                                                                                            "date": {
                                                                                                            "year": "2018",
                                                                                                            "month": "February"
                                                                                                            },
                                                                                                            "entries": {
                                                                                                            "electricBill": 500,
                                                                                                            "gasBill": 550,
                                                                                                            "oilBill": 300,
                                                                                                            "carMileage": 1500,
                                                                                                            "flightUnder": 0,
                                                                                                            "flightOver": 0,
                                                                                                            "recyclePaper": true,
                                                                                                            "recycleAluminium": true
                                                                                                            },
                                                                                                            "emissions": {
                                                                                                            "electricBill": 52500,
                                                                                                            "gasBill": 57750,
                                                                                                            "oilBill": 33900,
                                                                                                            "carMileage": 1185,
                                                                                                            "flightUnder": 0,
                                                                                                            "flightOver": 0,
                                                                                                            "recyclePaper": 0,
                                                                                                            "recycleAluminium": 0
                                                                                                            },
                                                                                                            "totalEmissions": 145335
                                                                                                            },
                                                                                                            {
                                                                                                                "date": {
                                                                                                                "year": "2018",
                                                                                                                "month": "March"
                                                                                                                },
                                                                                                                "entries": {
                                                                                                                "electricBill": 100,
                                                                                                                "gasBill": 100,
                                                                                                                "oilBill": 200,
                                                                                                                "carMileage": 800,
                                                                                                                "flightUnder": 2,
                                                                                                                "flightOver": 0,
                                                                                                                "recyclePaper": true,
                                                                                                                "recycleAluminium": true
                                                                                                                },
                                                                                                                "emissions": {
                                                                                                                "electricBill": 10500,
                                                                                                                "gasBill": 10500,
                                                                                                                "oilBill": 22600,
                                                                                                                "carMileage": 632,
                                                                                                                "flightUnder": 2200,
                                                                                                                "flightOver": 0,
                                                                                                                "recyclePaper": 0,
                                                                                                                "recycleAluminium": 0
                                                                                                                },
                                                                                                                "totalEmissions": 46432
                                                                                                                },
                                                                                                                {
                                                                                                                    "date": {
                                                                                                                    "year": "2018",
                                                                                                                    "month": "April"
                                                                                                                    },
                                                                                                                    "entries": {
                                                                                                                    "electricBill": 120,
                                                                                                                    "gasBill": 80,
                                                                                                                    "oilBill": 120,
                                                                                                                    "carMileage": 700,
                                                                                                                    "flightUnder": 0,
                                                                                                                    "flightOver": 1,
                                                                                                                    "recyclePaper": true,
                                                                                                                    "recycleAluminium": true
                                                                                                                    },
                                                                                                                    "emissions": {
                                                                                                                    "electricBill": 12600,
                                                                                                                    "gasBill": 8400,
                                                                                                                    "oilBill": 13560,
                                                                                                                    "carMileage": 553,
                                                                                                                    "flightUnder": 0,
                                                                                                                    "flightOver": 4400,
                                                                                                                    "recyclePaper": 0,
                                                                                                                    "recycleAluminium": 0
                                                                                                                    },
                                                                                                                    "totalEmissions": 39513
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "date": {
                                                                                                                        "year": "2018",
                                                                                                                        "month": "May"
                                                                                                                        },
                                                                                                                        "entries": {
                                                                                                                        "electricBill": 120,
                                                                                                                        "gasBill": 80,
                                                                                                                        "oilBill": 120,
                                                                                                                        "carMileage": 700,
                                                                                                                        "flightUnder": 0,
                                                                                                                        "flightOver": 1,
                                                                                                                        "recyclePaper": true,
                                                                                                                        "recycleAluminium": true
                                                                                                                        },
                                                                                                                        "emissions": {
                                                                                                                        "electricBill": 12600,
                                                                                                                        "gasBill": 8400,
                                                                                                                        "oilBill": 13560,
                                                                                                                        "carMileage": 553,
                                                                                                                        "flightUnder": 0,
                                                                                                                        "flightOver": 4400,
                                                                                                                        "recyclePaper": 0,
                                                                                                                        "recycleAluminium": 0
                                                                                                                        },
                                                                                                                        "totalEmissions": 39513
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "date": {
                                                                                                                            "year": "2018",
                                                                                                                            "month": "June"
                                                                                                                            },
                                                                                                                            "entries": {
                                                                                                                            "electricBill": 80,
                                                                                                                            "gasBill": 100,
                                                                                                                            "oilBill": 200,
                                                                                                                            "carMileage": 800,
                                                                                                                            "flightUnder": 1,
                                                                                                                            "flightOver": 0,
                                                                                                                            "recyclePaper": true,
                                                                                                                            "recycleAluminium": true
                                                                                                                            },
                                                                                                                            "emissions": {
                                                                                                                            "electricBill": 8400,
                                                                                                                            "gasBill": 10500,
                                                                                                                            "oilBill": 22600,
                                                                                                                            "carMileage": 632,
                                                                                                                            "flightUnder": 1100,
                                                                                                                            "flightOver": 0,
                                                                                                                            "recyclePaper": 0,
                                                                                                                            "recycleAluminium": 0
                                                                                                                            },
                                                                                                                            "totalEmissions": 43232
                                                                                                                            }

]);

