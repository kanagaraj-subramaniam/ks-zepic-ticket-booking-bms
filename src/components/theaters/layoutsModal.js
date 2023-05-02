import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Edit from "../../assets/images/editw.svg";
import Close from "../../assets/images/closew.svg";
import Arrow from "../../assets/images/arroww.svg";
import Screen from "../../assets/images/screen.png";
import Banner from "../../assets/images/paymentbanner.png";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import { NavLink } from "react-router-dom";

function LayoutsModal(props) {
    const [seats, setSeats] = useState([]);
    const [payment, setPayment] = useState(false);

    const seatSelect = (row, column, isBooked) => {
        if (!isBooked) {
            let seatNo = row.concat(column).toString();

            if (!isAvailableInSeats(seatNo)) {
                if (seats.length < props.selectedSeats) {
                    setSeats(seats => [...seats, seatNo]);
                }
            }
            else {
                setSeats(seats.filter(item => item !== seatNo));
            }
        }
    }

    const isAvailableInSeats = (seat) => {
        return seats.includes(seat);
    }

    const handlePaymentClick = () => {
        let newURL = window.location.origin + "/booking/success";
        window.location.href = newURL;

    }

    return (
        <div className="Modal">
            <div className="Overlay" onClick={() => props.handleClose()}>
                {/*  */}
            </div>
            <div className="Layout">
                <div className="Header">
                    <Container>
                        <NavLink to={'/movies/ponniyin-selvan-part-2'}>
                            {props.film}
                            <span>U</span>
                        </NavLink>
                        <div>
                            {props.theater} | Today, 02 May, {props.time}
                        </div>
                        <div className="Seat-Select" style={{ display: payment && "none" }} onClick={() => props.setStepsFromLayout(2)}>
                            {props.selectedSeats} Ticket(s)
                            <img src={Edit} alt="Edit" className="Edit" />
                        </div>
                        <img src={Close} alt="Close" className="Close" onClick={() => props.handleClose()} />
                        <img src={Arrow} alt="Arrow" className="Arrow" onClick={() => props.handleClose()} />
                    </Container>
                </div>

                {!payment ?
                    <div>
                        <div className="Time">
                            <Container>
                                <div>
                                    {props.time}
                                </div>
                            </Container>
                        </div>

                        <div className="Rows">
                            <Container>
                                <div className="Seat-Type">{props.ticketClass} - Rs. {props.ticketCost}</div>
                                <div className="Seat-Selection">
                                    {props.layout.map((lay, l) => {
                                        return (
                                            <div key={l}>
                                                <div className="Seat-Row">{lay.row}</div>
                                                {lay.column.map((col, c) => {
                                                    return (
                                                        <button onClick={() => seatSelect(lay.row, col.number, col.isBooked)} className={`Seat-Column ${col.isBooked ? "Booked" : ""} ${isAvailableInSeats(lay.row.concat(col.number).toString()) ? "Active" : ""}`} key={c}>
                                                            {col.number}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}

                                    <img src={Screen} alt="Screen" className="Screen" />
                                    <div className="Screen-Info">All eyes this way please!</div>
                                </div>
                            </Container>
                        </div>

                        <div className="Indication">
                            <div className="Booked-Seat"></div>
                            <div className="Seat-Info">Sold</div>
                            <div className="Available-Seat"></div>
                            <div className="Seat-Info">Available</div>
                            <div className="Selected-Seat"></div>
                            <div className="Seat-Info">Selected</div>
                        </div>

                        {seats.length === props.selectedSeats && <div className="Payment">
                            <button onClick={() => setPayment(true)}>Pay Rs. {props.selectedSeats * props.ticketCost}</button>
                        </div>}

                    </div>
                    :
                    <div className="Payment-Con">
                        <Container>
                            <div className="Flx">
                                <div className="W70">
                                    <img src={Banner} className="Banner" alt="Banner" />
                                    <div className="Card">
                                        <div className="Heading">Grab a <span>bite!</span></div>
                                        <div className="Details">Prebook Your Meal and Save More!</div>

                                        <div>
                                            <div className="Slide">
                                                <img src={Banner1} alt="Banner" />
                                            </div>
                                            <div className="Slide">
                                                <img src={Banner2} alt="Banner" />
                                            </div>
                                            <div className="Slide">
                                                <img src={Banner3} alt="Banner" />
                                            </div>
                                        </div>

                                        <div className="Note">
                                            Note:<br />
                                            1. Images are for representation purposes only.<br />
                                            2. Prices inclusive of taxes.
                                        </div>
                                    </div>

                                </div>
                                <div className="W30">
                                    <div className="Card">
                                        <div className="Heading">BOOKING SUMMARY</div>

                                        <div className="Info">
                                            <span className="Fl">
                                                {seats.map((seat, s) => {
                                                    return (
                                                        <span key={s}>
                                                            {seat}
                                                            <span>{s + 1 < seats.length && ', '}</span>
                                                        </span>
                                                    );
                                                })}

                                                <span className="Tick">
                                                    ({props.selectedSeats} Tickets)
                                                </span>
                                                <span className="Audi">
                                                    SCREEN 3
                                                </span>
                                            </span>
                                            <span className="Fr">
                                                Rs. {props.selectedSeats * props.ticketCost}
                                            </span>
                                        </div>

                                        <div className="Info">
                                            <span className="Fl Cf">
                                                Convenience fees
                                            </span>
                                            <span className="Fr">
                                                Rs. {props.selectedSeats * 30}
                                            </span>
                                        </div>

                                        <div className="Sub">
                                            <div className="Info">
                                                <span className="Fl">
                                                    Sub total
                                                </span>
                                                <span className="Fr">
                                                    Rs. {(props.selectedSeats * props.ticketCost) + (props.selectedSeats * 30)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="Payable">

                                            <div className="Info">
                                                <span className="Fl">
                                                    Amount Payable
                                                </span>
                                                <span className="Fr">
                                                    Rs. {(props.selectedSeats * props.ticketCost) + (props.selectedSeats * 30)}
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="Action">
                                        <div className="Details">
                                            Show the m-ticket QR Code on your mobile to enter the cinema.
                                        </div>
                                        <div className="Details">
                                            By proceeding, I express my consent to complete this transaction.
                                        </div>

                                        <div className="Act" onClick={() => handlePaymentClick()}>
                                            <div className="Info">
                                                <span className="Fl">
                                                    TOTAL: Rs. {(props.selectedSeats * props.ticketCost) + (props.selectedSeats * 30)}
                                                </span>
                                                <span className="Fr">
                                                    Proceed
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Container>
                    </div>
                }
            </div>

        </div >
    );
}

export default LayoutsModal;