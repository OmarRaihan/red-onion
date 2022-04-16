
import React from 'react';
import './Dinner.css'

const Dinner = ({dinner}) => {
    const {img, name, description, price} = dinner;
    return (
        <div className='card-container mx-auto'>
            <div className="card border-0" style={{ width: "16rem" }}>
                <img src={img} alt="" />
                <div className="info mt-4">
                    <h6>{name}</h6>
                    <p>{description}</p>
                    <h5>${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Dinner;