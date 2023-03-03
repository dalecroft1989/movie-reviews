import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {AddReview} from "./Add";
import {Nav, Navbar, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <header className="text-center bg-black text-light">
            <h1 className="mb-0">Movie Reviews</h1>
        </header>
    );
}

function NavBars() {
    return (
        <Navbar bg="dark" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/" className="text-light">Movie Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/add" className="text-light">Add A Review</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}

function Reviews({reviews, removeReview}) {
    return (
        <div className="text-center bg-secondary">
            {reviews.map((review) => (
                <div>
                    <h2>{review.name}</h2>
                    <img src={"./" + review.poster} alt={review.name} style={{width: "250px", height: "350px"}}/>
                    <ul className="list-unstyled">
                        <li>Release Date: {review.releaseDate}</li>
                        <li>Actors: {review.actors}</li>
                        <li>Rating: {review.rating}</li>
                    </ul>
                    <Button variant="danger" onClick={() => removeReview(review)}>Remove Movie</Button>
                    <hr/>
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