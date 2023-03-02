import express from 'express';
const app = express();
app.use(express.json());

let movieReviews =
    [
        {
            "name": "Heat",
            "poster": "heat.jpg",
            "releaseDate": "1995",
            "actors": "Al Pacino, Robert De Niro, Val Kilmer",
            "rating": "5/5"
        },
        {
            "name": "Training Day",
            "poster": "trainingday.jpg",
            "releaseDate": "2001",
            "actors": "Denzel Washington, Ethan Hawke, Scott Glenn",
            "rating": "5/5"
        },
        {
            "name": "Dazed and Confused",
            "poster": "dazed.jpg",
            "releaseDate": "1993",
            "actors": "Jason London, Wiley Wiggins, Joey Lauren Adams",
            "rating": "5/5"
        }
    ];

app.get('/movies', (req, res) => {
    res.json(movieReviews);
});

app.post('/updateReviews', (req, res) => {
    movieReviews.push(
        {"name":req.body.name,
        "poster":req.body.poster,
        "releaseDate":req.body.releaseDate,
        "actors":req.body.actors,
        "rating":req.body.rating} );
    console.log(req.body);
    res.send(req.body);
});

app.listen(8000, () => {
    console.log('YO');
});