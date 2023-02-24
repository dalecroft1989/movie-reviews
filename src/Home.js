import React, {useEffect} from 'react';
import {Link, Routes, Route} from "react-router-dom";
import {AddReview} from "./Add";


function Header() {
    return (
        <header>
            <h1>Movie Reviews</h1>
        </header>
    );
}
function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/addreview">Add Review</Link></p>
                </ul>
            </nav>
        </header>
    );
}

function Reviews({reviews, removeReview}) {
    return (
        <div>
            {reviews.map((review) => (
                <div>
                    <h2>{review.name}</h2>
                    <img src={"./" + review.poster} alt={review.name} style={{width: "250px", height: "350px"}}/>
                    <ul>
                        <li>Release Date: {review.releaseDate}</li>
                        <li>Actors: {review.actors}</li>
                        <li>Rating: {review.rating}</li>
                    </ul>
                    <button onClick={() => removeReview(review)}>Remove Movie</button>
                    </div>
            ))}
        </div>
    );
}

function Home() {
    const [reviews, setReviews] = React.useState(null);

    useEffect(() => {
        fetch("./reviews.json")
            .then(response => response.json())
            .then(setReviews)
            .catch(error => console.log(error.message));
    }, []);

    const removeReview = (review) => {
        const newReviews = reviews.filter((r) => r !== review);
        setReviews(newReviews);
    }

    if (reviews === null) {
        return <p>Loading...</p>
    }else {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Reviews reviews={reviews} removeReview = {removeReview}/>} />
                    <Route path="/Add" element={<AddReview reviews={reviews} setReviews = {setReviews}/>} />
                </Routes>
            </>
        );
    }
}

export default Home;