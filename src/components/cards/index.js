import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <section className="Details">
            <Container>
                {props.fullBanner ?
                    <>
                        {props.list.map((item, i) => {
                            return (
                                <NavLink to={item.link} key={i}>
                                    <img src={item.asset} key={item} alt={item.name} className="Banner" />
                                </NavLink>
                            );
                        })
                        }
                    </>
                    :
                    <>
                        <div>
                            <h2 style={{color: props.darkMode && "#FFFFFF"}}> 
                                {props.title}
                                {props.new && <span>NEW</span>}  
                            </h2>
                            {props.desc && <h5 style={{color: props.darkMode && "#FFFFFF"}}> {props.desc} </h5>}
                            {props.moreLink && <NavLink to={props.moreLink} className="More">See All &gt;</NavLink>}
                        </div>
                        <div className="Card">
                            <div className="FlxWrap">
                                {props.list.map((item, i) => {
                                    return (
                                        <div className="Item" key={i}>
                                            <NavLink to={item.link}>
                                                <img src={item.asset} alt={item.name} />
                                                {!props.onlyBanner &&
                                                    <>
                                                        <div className="Name" style={{color: props.darkMode && "#FFFFFF"}}>{item.name}</div>
                                                        <div className="Type" style={{color: props.darkMode && "#FFFFFF"}}>{item.type}</div>
                                                    </>
                                                }
                                            </NavLink>
                                        </div>
                                    );
                                })
                                }

                            </div>

                        </div>
                    </>
                }

            </Container>
        </section>
    );
}

export default Card;