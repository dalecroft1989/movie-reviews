import React, {useEffect} from 'react';
import './App.css';

function Header() {
    return (
        <header>
            <h1>Movie Reviews</h1>
        </header>
    );
}

function Reviews({reviews}) {
    return (
       <div>
           {reviews.map((review) => (
                <div>
                    <h2>{review.name}</h2>
                    <img src={"./" + review.poster} alt={review.name} />
                    <p>Release Date: {review.releaseDate}</p>
                    <p>Actors: {review.actors}</p>
                    <p>Rating: {review.rating}</p>
                </div>
              ))}
       </div>
    );
}

function App() {
    const [reviews, setReviews] = React.useState(null);

    useEffect(() => {
        fetch("./reviews.json")
            .then(response => response.json())
            .then(setReviews)
            .catch(error => console.log(error.message));
    }, []);

    if (reviews === null) {
        return <p>Loading...</p>
    }else {
        return (
            <>
                <Header/>
                <Reviews reviews={reviews}
                />
            </>
        );
    }
}

export default App;
