import React from "react";
import { Container } from "react-bootstrap";
import Star from "../../assets/images/star.svg";

function BookingModal(props) {
    return (
        <section className="Booking-Modal" style={{display: props.visible ? "block" : "none"}}>
            <Container>
                <h2> {props.name} </h2>
                <div className="Review">
                    <img src={Star} alt="Star" />
                    <span><strong>{props.rating}/10</strong> {props.votes} votes</span>
                </div>
                <button className="Btn-Tickets" onClick={()=>props.click()}>Book tickets</button>
            </Container>
        </section>
    );
}

export default BookingModal;