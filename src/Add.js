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

    return (
        <>
            <form method="post">
                <p><label>Movie Name: <input
                    name={"name"}
                    ref={movieName}
                    type="text"/>
                </label></p>
                {/*<p><label>Poster: <input*/}
                {/*    name={"poster"}*/}
                {/*    ref={moviePoster}*/}
                {/*    type="text"/>*/}
                <p><label>Release Date: <input
                    name={"releaseDate"}
                    ref={movieReleaseDate}
                    type="text"/>
                </label></p>
                <p><label>Actor: <input
                    name={"actors"}
                    ref={movieActors}
                    type="text"/>
                </label></p>
                <p><label>Rating: <input
                    name={"rating"}
                    ref={movieRating}
                    type="text"/>
                </label></p>
                <input type="submit" value={"Add"} />
            </form>
        </>
    )
}