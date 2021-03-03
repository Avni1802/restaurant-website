import React from 'react';
import './Card.css';

const Card = ({title,ing,img}) =>{

    let ingredients = "";
    var myObject = ing;

    Object.keys(myObject).map(function(key, index) {
        if(index>=10 && index<=27 && myObject[key]!="")
        {
            ingredients+=", "+myObject[key];

        }
        else if(index===9){
            ingredients+=myObject[key];
        }
    });
    
    return(
        <div className="card">
            <img className="image" src={img} alt="" srcset=""/>
            <h1>{title}</h1>
            <p className="para"><strong>Ingredients: </strong>{ingredients}</p>
        </div>
    )
}

export default Card;