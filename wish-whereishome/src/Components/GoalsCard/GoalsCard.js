import React from "react";
import './GoalsCard.css';


const GoalsCard = ({number, goal, text}) => {



    return (
        <div class="goal-card">
        <div class="box">
            <div class="content">
                <h2>{number}</h2>
                <h3>{goal}</h3>
                <p>{text}</p>
            </div>
        </div>
    </div>
    );
}
export default GoalsCard;

