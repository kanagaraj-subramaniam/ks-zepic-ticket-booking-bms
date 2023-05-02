import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../navigation";
import Footer from "../footer";
import Store from "../../stores/data";
import NF from "../../assets/images/404.png";
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <Navigation />

            <section className="Single">
                <Container>

                    <img src={NF} alt="NF" />

                    <p>404 - Page Not Found</p>

                    <NavLink to="/">
                        Go to Home
                    </NavLink>

                </Container>
            </section>

            <Footer links={Store.Data.FooterLinks} />
        </div>
    );
}

export default NotFound;