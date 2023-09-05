import React from "react";

function MealCard ({src,text}){
    return(
        <div className={'mealCard'} style={{backgroundImage:"url(../meal1.png"}} >
            <h4>{text}</h4>
        </div>
    )
};

// public/assets/img/meal1.png
export default MealCard;