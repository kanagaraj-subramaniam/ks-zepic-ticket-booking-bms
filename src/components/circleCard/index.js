import React from "react";

function CircleCard(props) {
    return (
        <div>
            {props.data.map((item, i) => {
                return (
                    <div className="Circle-Card" key={i}>
                        <img src={item.asset} alt={item.name} />
                        <div>{item.name}</div>
                        <span>{item.title}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default CircleCard;