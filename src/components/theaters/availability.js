import React, { useState, useEffect } from "react";
import { Container, OverlayTrigger, Popover } from "react-bootstrap";
import Heart from "../../assets/images/heart-t.svg";
import Info from "../../assets/images/info.svg";

function Availability(props) {
    const [initialList, setInitialList] = useState([...props.list]);

    useEffect(() => {
        filter();
    }, [props.priceFilter, props.showFilter]);

    const filter = () => {
        let arr = JSON.parse(JSON.stringify(props.list));
        let result = arr.filter(x => {
            x.timings = x.timings.filter(y => filterParams(y));
            return x;
        });

        setInitialList(result);
    }

    const filterParams = (time) => {
        if (props.priceFilter === "All" && props.showFilter === "All")
            return time;
        if (props.priceFilter === "All" && props.showFilter === "Available")
            return time.isFastFilling === false;
        if (props.priceFilter === "All" && props.showFilter === "Fast Filling")
            return time.isFastFilling === true;
        if (props.priceFilter === "Rs. 0-100" && props.showFilter === "All")
            return time.ticketCost > 0 && time.ticketCost <= 100;
        if (props.priceFilter === "Rs. 0-100" && props.showFilter === "Available")
            return time.ticketCost > 0 && time.ticketCost <= 100 && time.isFastFilling === false;
        if (props.priceFilter === "Rs. 0-100" && props.showFilter === "Fast Filling")
            return time.ticketCost > 0 && time.ticketCost <= 100 && time.isFastFilling === true;
        if (props.priceFilter === "Rs. 101-200" && props.showFilter === "All")
            return time.ticketCost > 100;
        if (props.priceFilter === "Rs. 101-200" && props.showFilter === "Available")
            return time.ticketCost > 100 && time.isFastFilling === false;
        if (props.priceFilter === "Rs. 101-200" && props.showFilter === "Fast Filling")
            return time.ticketCost > 100 && time.isFastFilling === true;
    }

    return (
        <div className="Availability">
            <Container>
                <div className="Status">
                    <div className="Available"></div>
                    <div className="Txt">Available</div>
                    <div className="Filling"></div>
                    <div className="Txt">Fast Filling</div>
                </div>
                {initialList.map((item, i) => {
                    return (
                        <div className="Seats" key={i} style={{ display: item.date === props.selectedDate && item.timings.length > 0 ? "block" : "none" }}>
                            <div className="Flx">
                                <div className="W25">
                                    <div className="Name">
                                        <img src={Heart} alt="Heart" />
                                        {item.name} {item.timings.length}
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
                                                <div
                                                    onClick={() => props.setSteps(1, item.name, time.ticketCost, time.time, time.seatType, time.isFastFilling)}
                                                    className={time.isFastFilling ? "Timings Filling" : "Timings Available"}>
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