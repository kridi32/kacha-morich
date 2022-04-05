import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SIngleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
             {
                 reviews.map(review => <SingleReview review={review} key={review._id}/>)
             }
        </div>
    );
};

export default Reviews;