use CO2_trackings;
db.dropDatabase();

db.trackings.insertMany([
    {
     "electric bill":200,
     "gas bill": 100,
     "oil bill": 100,
     "millage on your car": 1000,
     "flights under 4 hours":2,
     "flights over 4 hours": 1,
     "recycle newspaper": false,
     "recycle aluminium and tin": false

    }
    
]);

