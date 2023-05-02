import React from "react";
import { Container } from "react-bootstrap";
import Hut from "../../assets/images/hut.svg";
import CS from "../../assets/images/cs.svg";
import Booking from "../../assets/images/booking.svg";
import Subscribe from "../../assets/images/subscribe.svg";
import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/insta.svg";
import Youtube from "../../assets/images/yt.svg";
import Pinterest from "../../assets/images/pin.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import { NavLink } from "react-router-dom";

function Footer(props) {
    return (
        <section className="Footer">
        <div className="Contact">
            <Container>
                <div className="Flx">
                    <div className="Flx-fs W75">
                        <img src={Hut} alt="Hut" />
                        <span> <strong>List your Show</strong> Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</span>
                    </div>
                    <div className="Flx-fe W25">
                        <button className="Btn-Primary-Lg"> Contact today! </button>
                    </div>
                </div>

            </Container>
        </div>
        <div className="Support">
            <Container>
                <div className="Flx Jc-Space">
                    <NavLink to="https://www.bookmyshow.com">
                        <div>
                            <img src={CS} alt="Customer Care" />
                            <p>24/7 CUSTOMER CARE</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://www.bookmyshow.com">
                        <div>
                            <img src={Booking} alt="Booking" />
                            <p>RESEND BOOKING CONFIRMATION</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://www.bookmyshow.com">
                        <div>
                            <img src={Subscribe} alt="Subscribe" />
                            <p>SUBSCRIBE TO THE NEWSLETTER</p>
                        </div>
                    </NavLink>
                </div>
            </Container>
        </div>
        <div className="Links">
            <Container>
                {props.links.map((item, i) => {
                    return (
                        <div className="Title" key={i}>
                            {item.name}
                            <div className="Items">
                                {item.links.map((link, l) => {
                                    return (
                                        <NavLink to={link.link} key={l}>{link.name}</NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </Container>
        </div>
        <div className="Logo">
            <Container>
                <div className="Line">
                </div>
                <img src={Logo} alt="Logo" />
            </Container>
        </div>
        <div className="Social">
            <Container>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Facebook} alt="Facebook" />
                </NavLink>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Twitter} alt="Twitter" />
                </NavLink>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Instagram} alt="Instagram" />
                </NavLink>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Youtube} alt="Youtube" />
                </NavLink>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Pinterest} alt="Pinterest" />
                </NavLink>
                <NavLink to="https://www.bookmyshow.com/">
                    <img src={Linkedin} alt="Linkedin" />
                </NavLink>
            </Container>
        </div>
        <div className="Copyright">
            <Container>
                <div>
                    Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                    <br />
                    The content and images used on this site are copyright protected and copyrights vests with the respective owners. 
                    <br />
                    The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
                </div>
            </Container>
        </div>
    </section>
    );
}

export default Footer;