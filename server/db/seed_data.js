use CO2_trackings;
db.dropDatabase();

db.trackings.insertMany([
    {
     "electric bill":200,
     "gas bill": 100,
     "car millage": 1000,
     "number of short flights":2,
     "number of long flights": 1,
     "recycle paper": 10,
     "recycle aluminium": 5

    }
    
]);

