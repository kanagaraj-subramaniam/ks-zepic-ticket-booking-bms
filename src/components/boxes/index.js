import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Box(props) {
    return (
        <section className="Trending">
            <Container>
                <h2>{props.title}</h2>
                {props.list.map((item, i) => {
                    return (
                        <a href={item.link} key={i}>
                            <div className="Card">
                                <div className="Name">{item.name}</div>
                                <div className="Type">{item.type}</div>
                            </div>
                        </a>
                    )
                })}

            </Container>
        </section>
    );
}

export default Box;