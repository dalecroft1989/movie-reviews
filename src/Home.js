import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {AddReview} from "./Add";
import {Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <header className="text-center">
            <h1>Movie Reviews</h1>
        </header>
    );
}

function NavBars() {
    return (
        <Navbar>
            <Nav.Item>
                <Nav.Link href="/">Movie Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/add">Add A Review</Nav.Link>
            </Nav.Item>
        </Navbar>
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
        fetch("/movies")
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
                <Header />
                <NavBars />
                <Routes>
                    <Route path="/" element={<Reviews reviews={reviews} removeReview = {removeReview}/>} />
                    <Route path="/Add" element={<AddReview reviews={reviews} setReviews = {setReviews}/>} />
                </Routes>
            </>
        );
    }
}

export default Home;