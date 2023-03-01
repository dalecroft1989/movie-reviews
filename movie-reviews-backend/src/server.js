import express from 'express';
const app = express();
app.use(express.json());


app.get('/movies', (req, res) => {
    const obj =
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
    res.json(obj)
});

app.listen(8000, () => {
    console.log('YO');
});