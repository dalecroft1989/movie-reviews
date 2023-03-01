import React, {useRef} from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Add Review</h1>
        </header>
    );
}

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/add">Add Review</Link></p>
                </ul>
            </nav>
        </header>
    );
}

export function AddReview({reviews, setReviews}) {
    const movieName = useRef()
   // const moviePoster = useRef()
    const movieReleaseDate = useRef()
    const movieActors = useRef()
    const movieRating = useRef()

    const submit = (event) => {
        event.preventDefault();
        const movieData = {};

        movieData.name = movieName.current.value;
        movieData.poster = "dazed.jpg";
        movieData.releaseDate = movieReleaseDate.current.value;
        movieData.actors = movieActors.current.value;
        movieData.rating = movieRating.current.value;

        const allReviews = []
        reviews.forEach(review => {
            allReviews.push(review);
        })
        allReviews.push(movieData);
        setReviews(allReviews);
    }

    return (
        <form onSubmit={submit}>
            <p><label>Movie Name: <input
            ref={movieName}
            type="text"/>
            </label></p>
            <p><label>Release Date: <input
            ref={movieReleaseDate}
            type="text"/>
            </label></p>
            <p><label>Actor: <input
            ref={movieActors}
            type="text"/>
            </label></p>
            <p><label>Rating: <input
            ref={movieRating}
            type="text"/>
            </label></p>
            <button>ADD</button>
        </form>
    )
}