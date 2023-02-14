import React, {useEffect} from 'react';
import './App.css';
import reviews from './reviews.json';

function Header() {
    return (
        <header>
            <h1>Movie Reviews</h1>
        </header>
    );
}

function Reviews() {
   return (
       <div>
           {reviews.map((review) => (
                <div>
                    <h2>{review.name}</h2>
                    <p>Release Date: {review.releaseDate}</p>
                    <p>Actors: {review.actors}</p>
                    <p>Rating: {review.rating}</p>
                </div>
              ))}
       </div>
    );
}

function App() {
    // let [reviews, setReviews] = React.useState(null);
    //
    // useEffect(() => {
    //     fetch("./reviews.json")
    //         .then(response => response.json())
    //         .then(setReviews)
    //         .catch(error => console.log(error.message));
    // }, []);

    return (
        <>
            <Header/>
            <Reviews/>
        </>
    );
}

export default App;
