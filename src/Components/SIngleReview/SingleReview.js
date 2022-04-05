import React from 'react';

const SingleReview = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div className='border border-green-600 p-6 m-10 rounded-md text-left'>
            <h2 className='font-bold m-0 text-gray-700 text-3xl'>{name}</h2> <br />
            <small className='font-semibold text-gray-500 text-xl font-mono'>Rating: {rating}/5 </small>
            <p className='  my-4 text-gray-600 text-lg '>{review}</p>
        </div>
    );
};

export default SingleReview; 