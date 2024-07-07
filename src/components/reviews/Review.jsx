import React from "react";
import "./review.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Rating } from "@mui/material";

const dummyReviews = [
  {
    author: "John Doe",
    rating: 5,
    text: "Great service. Quick and Humble Staff. Recommended by my side.",
  },
  {
    author: "Jane Smith",
    rating: 4.5,
    text: "Excellent service and Affordable. Professional Staff.  Really recommended",
  },
  {
    author: "Jane Smith",
    rating: 3,
    text: "Great service. Quick and Humble Staff. Recommended by my side.",
  },
  {
    author: "Jane Smith",
    rating: 2,
    text: "Excellent service and Affordable. Professional Staff.  Really recommended",
  },
  {
    author: "Jane Smith",
    rating: 2.5,
    text: "Great service. Quick and Humble Staff. Recommended by my side.",
  },
  {
    author: "Jane Smith",
    rating: 2.5,
    text: "Excellent service and Affordable. Professional Staff.  Really recommended",
  },
  {
    author: "Jane Smith",
    rating: 4,
    text: "Great service. Quick and Humble Staff. Recommended by my side.",
  },
  {
    author: "Jane Smith",
    rating: 3.5,
    text: "Excellent service and Affordable. Professional Staff.  Really recommended",
  },
  {
    author: "Jane Smith",
    rating: 1,
    text: "Great service. Quick and Humble Staff. Recommended by my side.",
  },
  // Add more dummy reviews as needed
];

const Review = () => {
  return (
    <div className="reviews">
      <Sidebar />
      <div className="reviewsContainer">
        <Navbar />
        <div className="container">
          <h2>Reviews</h2>
          <div className="card-container">
            {dummyReviews.map((review, index) => (
              <div key={index} className="card">
                <div className="review">
                  <p className="review-author">{review.author}</p>
                  <Rating
                    name="rating"
                    value={review.rating}
                    precision={0.5}
                    readOnly
                  />
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
