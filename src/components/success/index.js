import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../navigation";
import Footer from "../footer";
import Store from "../../stores/data";
import Ok from "../../assets/images/ok.png";
import { NavLink } from "react-router-dom";

function Success() {
    return (
        <div>
            <Navigation />

            <section className="Single">
                <Container>

                    <img src={Ok} alt="Ok" />

                    <p>Ticket Booked Successfully</p>

                    <NavLink to="/">
                        Go to Home
                    </NavLink>

                </Container>
            </section>

            <Footer links={Store.Data.FooterLinks} />
        </div>
    );
}

export default Success;