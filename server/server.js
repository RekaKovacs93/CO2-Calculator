const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())
app.use(express.json())

const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router')

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then((client)=> {
        const db = client.db('CO2_trackings');
        const trackingsCollection = db.collection('trackings');
        const trackingsRouter = createRouter(trackingsCollection);
        app.use('/api/trackings/', trackingsRouter);
    })

app.listen(9000, ()=>{
    console.log(`Listening on port 9000`)
})
