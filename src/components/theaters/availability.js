import React from "react";
import { Container, OverlayTrigger, Popover } from "react-bootstrap";
import Heart from "../../assets/images/heart-t.svg";
import Info from "../../assets/images/info.svg";

function Availability(props) {
    return (
        <div className="Availability">
            <Container>
                <div className="Status">
                    <div className="Available"></div>
                    <div className="Txt">Available</div>
                    <div className="Filling"></div>
                    <div className="Txt">Fast Filling</div>
                </div>
                {props.list.map((item, i) => {
                    return (
                        <div className="Seats" key={i}>
                            <div className="Flx">
                                <div className="W25">
                                    <div className="Name">
                                        <img src={Heart} alt="Heart" />
                                        {item.name}
                                        <span>
                                            <img src={Info} alt="Info" />
                                            INFO
                                        </span>
                                    </div>
                                    <div>
                                        {item.isMticket && <span className="Mticket">M-Ticket</span>}
                                        {item.isFB && <span className="FB">Food & Beverage</span>}
                                    </div>

                                </div>
                                <div className="W75">
                                    {item.timings.map((time, t) => {
                                        return (
                                            <OverlayTrigger
                                                key={t}
                                                overlay={
                                                    <Popover>
                                                        <Popover.Body>
                                                            <span> Rs. {time.ticketCost} </span>
                                                        </Popover.Body>
                                                    </Popover>
                                                }>
                                                <div onClick={()=>props.setSteps(1, item.name, time.ticketCost, time.time, time.seatType, time.isFastFilling)} className={time.isFastFilling ? "Timings Filling" : "Timings Available"}>
                                                    {time.time}
                                                </div>
                                            </OverlayTrigger>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default Availability;