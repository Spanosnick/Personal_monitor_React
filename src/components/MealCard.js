import React from "react";

function MealCard ({src, text}){

    return(
        <div className={'mealCard'} style={{backgroundImage: `url(../${src})`}}>
            <h4>{text}</h4>
        </div>
    )
};

export default MealCard;
