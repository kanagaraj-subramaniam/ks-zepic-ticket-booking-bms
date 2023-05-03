import React, { useState } from "react";
import Search from "../../assets/images/search.svg";
import { Container } from "react-bootstrap";

function Dates(props) {
    const [activeDate, setActiveDate] = useState("01 MAY 2023");

    const [priceFilter, setPriceFilter] = useState("All");
    const [showFilter, setShowFilter] = useState("All");

    const handleDateChange = (date) => {
        setActiveDate(date);
        props.setSelectedDate(date);
    }

    const handlePriceChange = (price) => {
        setPriceFilter(price);
        props.setPriceFilter(price);
    }

    const handleShowChange = (show) => {
        setShowFilter(show);
        props.setShowFilter(show);
    }

    return (
        <div className="Dates">
            <Container>
                <div>
                    {props.list.map((item, i) => {
                        return (
                            <div
                                className={item.key === activeDate ? 'Item Active' : 'Item'}
                                key={i}
                                onClick={() => handleDateChange(item.key)}
                            >
                                <div className="Day">{item.day}</div>
                                <div className="Date">{item.date}</div>
                                <div className="Month">{item.month}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="Options">
                    <div className="Format">
                        {props.language} - <span>{props.type}</span>
                    </div>
                    <div className="Filter" style={{borderBottom: priceFilter !== "All" && "4px solid #f84464"}}>
                        {priceFilter === "All" ? "Filter on Price Range" : priceFilter}
                        <div className="Filter-Box">
                            <div onClick={()=>handlePriceChange("All")}> All</div>
                            <div onClick={()=>handlePriceChange("Rs. 0-100")}> Rs. 0-100</div>
                            <div onClick={()=>handlePriceChange("Rs. 101-200")}> Rs. 101-200</div>
                        </div>
                    </div>
                    <div className="Filter" style={{borderBottom: showFilter !== "All" && "4px solid #f84464"}}>
                        {showFilter === "All" ? "Filter on Availability" : showFilter}
                        <div className="Filter-Box">
                            <div onClick={()=>handleShowChange("All")}> All</div>
                            <div onClick={()=>handleShowChange("Available")}> Available</div>
                            <div onClick={()=>handleShowChange("Fast Filling")}> Fast Filling</div>
                        </div>
                    </div>
                    <div className="Search">
                        <img src={Search} alt="Search" />
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default Dates;