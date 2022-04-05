import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SIngleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-5xl my-10  text-green-800 font-bold '> All Customer Reviews</h1>
             {
                 reviews.map(review => <SingleReview review={review} key={review._id}/>)
             }
        </div>
    );
};

export default Reviews;