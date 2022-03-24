import './Meal.css'
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Meal = ({ meal, handleDetailsCart }) => {



    const { strMeal, strMealThumb, strInstructions } = meal;

    return (
        <div >
            <Card className='shadow p-3 mb-5 bg-body rounded border-0 ' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <h3>{strMeal}</h3>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary" className='btn-details' onClick={() => handleDetailsCart(meal)}>Meal Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;