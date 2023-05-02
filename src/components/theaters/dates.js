import React from "react";
import Search from "../../assets/images/search.svg";
import { Container } from "react-bootstrap";

function Dates(props) {
    return (
        <div className="Dates">
            <Container>
                <div>
                    {props.list.map((item, i) => {
                        return (
                            <div className={item.isActive ? 'Item Active' : 'Item'} key={i}>
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
                    <div className="Filter">
                        Filter Price Range
                    </div>
                    <div className="Filter">
                        Filter Show Timimgs
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