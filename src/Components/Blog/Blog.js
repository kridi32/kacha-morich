import React from 'react';

const Blog = () => {
    return (
        <div>
           <h1 className='text-3xl my-10  text-green-800 font-bold '>Conceptual Question and their answers</h1>
           <div className="border border-green-700 p-2 mx-8 rounded-md my-6">
               <h2 className='font-semibold text-2xl text-slate-800 my-3 '>What is semantic tags?</h2>
               <p className='text-semibold text-gray-700 text-lg '>Semantic tags are those tags that can be used instead of div and those tags has their specific name (such as header, footer, section etc). This makes code easy to read and helps search engin to crowl and rank the page higher.  </p>
           </div>
           <div className="border border-green-700 p-2 mx-8 rounded-md my-6">
               <h2 className='font-semibold text-2xl text-slate-800 my-3 '>What is the diffirace between inline, block and inline-block elements?</h2>
               <p className='text-semibold text-gray-700 text-lg '>Inline elements does not take full width where block elements takes the full width avaliable. But you can not change height of an inline element where as we can change that on block element. for this issues, there is an alternative called inline block element that has some inline bahaviour(does not take full width) with some block behaviour(you can change height). </p>
           </div>
        </div>
    );
};

export default Blog;