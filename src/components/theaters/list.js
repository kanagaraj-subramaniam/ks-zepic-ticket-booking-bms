import React from "react";
import Store from "../../stores/data";
import { useParams } from "react-router-dom";
import Availability from "../../components/theaters/availability.js";
import Dates from "../../components/theaters/dates.js";
import Banner from "../../components/theaters/banner.js";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function List(props) {
    const { language, type } = useParams();
    return (
        <div>
            {/* Theaters */}
            <section className="Theaters">
                {/* Banner */}
                <Banner language={language} film={props.film} />

                {/* Dates */}
                <Dates list={Store.Data.TheaterDates} language={language} type={type} />

                {/* Availability */}
                <Availability list={Store.Data.Theaters} setSteps={props.setSteps} />

                {/* Breadcrumbs */}
                <section className="Breadcrumbs Mtm25">
                    <Container>
                        <NavLink to="/">Home</NavLink>
                        &nbsp;→&nbsp;
                        <NavLink to="/">Movies in Chennai</NavLink>
                        &nbsp;→&nbsp;
                        <NavLink to="/">{props.film}</NavLink>
                    </Container>
                </section>

                {/* Privacy */}
                <section className="Privacy-Box">
                    <Container>
                        <div>
                            <span>Privacy Note</span>
                            By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy governing your access to Bookmyshow and provision of services by Bookmyshow to you. If you do not accept terms mentioned in the Privacy Policy, you must not share any of your personal information and immediately exit Bookmyshow.
                        </div>
                    </Container>
                </section>
            </section>
        </div>
    );
}

export default List;