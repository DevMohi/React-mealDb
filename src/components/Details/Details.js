import React from 'react';
import './Details.css'
const Details = ({ detail }) => {
    const { strMeal, strArea, strMealThumb, strInstructions } = detail;
    return (
        <div>

            <div className='border mb-2 mx-auto w-75 p-3 shadow p-3 mb-5 bg-body rounded border-0'>
                <h5>Name: {strMeal}</h5>
                <h5>Area: {strArea}</h5>
            </div>
        </div>
    );
};

export default Details;