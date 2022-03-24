import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Details from '../Details/Details';
import Meal from './Meal/Meal';
import './MealDB.css'

const MealDB = () => {
    const [meals, setMeals] = useState([]);
    const [details, setDetails] = useState([]);

    const handleDetailsCart = (meal) => {
        const { strMeal, strArea, strMealThumb, strInstructions } = meal;
        const newMeal = [...details, meal]
        setDetails(newMeal);

    }

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div>
            <Row>
                <Col className='text-center px-0' sm={9}>
                    <h1 className='py-3'>All meals</h1>
                    <div className='py-4 meal-container'>
                        {
                            meals.map(meal => <Meal
                                key={meal.idMeal}
                                meal={meal}
                                handleDetailsCart={handleDetailsCart}
                            ></Meal>)
                        }
                    </div>

                </Col>


                <Col className=' details-container border' sm={3}>
                    <div className='details-main'>
                        <h3 className='py-3 text-center'>Details</h3>
                        {
                            details.map(detail => <Details detail = {detail}  key = {detail.idMeal}></Details>)
                        }
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default MealDB;