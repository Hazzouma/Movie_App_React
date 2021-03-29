import ReactStars from "react-rating-stars-component";
import React from "react";


function RatingStars({rateStars}) {
    const ratingChanged = (newRating) => {
        rateStars(newRating);
    };
    return (
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={34}
        isHalf={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        />
    )
}

export default RatingStars
