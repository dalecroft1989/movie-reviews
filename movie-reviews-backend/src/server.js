import express from 'express';
import {MongoClient} from 'mongodb';
import * as path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('posters'));

app.get('/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-reviews');

    const movieReviews = await db.collection('movie').find().toArray();
    console.log(movieReviews);
    res.json(movieReviews);


});

app.post('/addReview', async(req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-reviews');

    const insertReview = await db.collection('movie').insertOne(
        {'name':req.body.name,
            poster:req.body.poster,
            releaseDate:req.body.releaseDate,
            actors:req.body.actors,
            rating:req.body.rating});
    console.log(insertReview);
    res.redirect('/');
});

app.listen(8000, () => {
    console.log('YO');
});