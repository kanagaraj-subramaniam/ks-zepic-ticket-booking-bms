import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Banner(props) {
    return (
        <div className="Banner">
            <Container>
                <div>
                    <NavLink to={'/movies/ponniyin-selvan-part-2'}>
                        {props.film}- {props.language}
                    </NavLink>
                </div>
                <div>
                    <div className="Tags">
                        U
                    </div>
                    <div className="Tags">
                        Drama
                    </div>
                    <div className="Tags">
                        Historical
                    </div>
                    <div className="Tags">
                        Action
                    </div>
                    <div className="Tags">
                        Adventure
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;