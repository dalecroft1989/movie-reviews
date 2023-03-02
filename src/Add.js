import React, {useRef} from "react";

export function AddReview({reviews, setReviews}) {
    const movieName = useRef()
    const moviePoster = useRef()
    const movieReleaseDate = useRef()
    const movieActors = useRef()
    const movieRating = useRef()

    return (
        <>
            <form action={'addReview'} method="post">
                <p><label>Movie Name: <input
                    name={"name"}
                    ref={movieName}
                    type="text"/>
                </label></p>
                <p><label>Poster: <select
                    name={"poster"}
                    ref={moviePoster}
                    >
                    <option value={"sleep.jpg"}>MOVIE</option>
                    <option value={"exorcist.jpg"}>Exorcist</option>
                </select></label></p>
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
                <input type={"submit"} value={"Add"} />
            </form>
        </>
    )
}