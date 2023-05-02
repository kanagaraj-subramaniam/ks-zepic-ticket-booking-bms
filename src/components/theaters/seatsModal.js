import React, { useState, useEffect } from "react";
import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import Four from "../../assets/images/4.png";
import Five from "../../assets/images/5.png";

function SeatsModal(props) {
    const [seat, setSeat] = useState(2);

    const setSeats =(seat)=> {
        setSeat(seat);
        props.setSeats(seat);
    }

    useEffect(() => {
        if (props.selectedSeats) {
            setSeat(props.selectedSeats);
        }
    }, [props.selectedSeats]);

    return (
        <div className="Modal">
            <div className="Overlay" onClick={() => props.handleClose()}>
                {/*  */}
            </div>
            <div className="Seat">
                <div className="Heading">
                    How Many Seats?
                </div>
                <div className="Actions">
                    <div className="Img">
                        {seat === 1 && <img src={One} alt="One" />}
                        {seat === 2 && <img src={Two} alt="Two" />}
                        {seat === 3 && <img src={Three} alt="Three" />}
                        {seat === 4 && <img src={Four} alt="Four" />}
                        {seat === 5 && <img src={Five} style={{ maxWidth: "160px" }} alt="Five" />}
                    </div>

                    <div className="Num">
                        <div className={seat === 1 ? "Active" : ""} onClick={() => setSeats(1)}>1</div>
                        <div className={seat === 2 ? "Active" : ""} onClick={() => setSeats(2)}>2</div>
                        <div className={seat === 3 ? "Active" : ""} onClick={() => setSeats(3)}>3</div>
                        <div className={seat === 4 ? "Active" : ""} onClick={() => setSeats(4)}>4</div>
                        <div className={seat === 5 ? "Active" : ""} onClick={() => setSeats(5)}>5</div>
                    </div>
                </div>
                <div className="Details">
                    <div className="Class">{props.class}</div>
                    <div className="Cost">Rs. {props.cost}</div>
                    <div className="Filling">{props.isFastFilling ? 'Filling Fast' : 'Available'}</div>
                </div>
                <button className="Btn-Ac" onClick={()=>props.setStepsFromSeat(3)}>Select Seats</button>
            </div>
        </div>
    );
}

export default SeatsModal;