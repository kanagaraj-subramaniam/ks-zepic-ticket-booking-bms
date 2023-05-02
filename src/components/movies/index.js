import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Navigation from "../navigation";
import Footer from "../footer";
import Store from "../../stores/data";
import Card from "../cards";
import MoviesHero from "./hero";
import CircleCard from "../circleCard";
import BookingModal from "./bookingModal";
import ShowFormatModal from "./showFormatModal";
import Logo from "../../assets/images/mini-logo.png";
import { NavLink } from "react-router-dom";

function Movies() {
    const [showFormat, setShowFormat] = useState(false);
    const [isBookingVisible, setIsBookingVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > 550) {
            !showFormat && setIsBookingVisible(true);
        }
        else {
            setIsBookingVisible(false);
        }
    };

    const openShowFormat = ()=>{
        setIsBookingVisible(false);
        setShowFormat(true);
        disableScroll();
    };

    const closeShowFormat = ()=>{
        setShowFormat(false);
        listenToScroll();
        enableScroll();
    };

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    }

    const handleRedirect = (language, type) => {
        let newURL = window.location + '/' + language.toLowerCase() + '/' + type.toLowerCase();
        window.location.href = newURL;
    }

    return (
        <div>
            {/* Navigation */}
            <Navigation />

            {/* Hero */}
            <MoviesHero click={openShowFormat} />

            {/* Details  */}
            <section className="Movie-Details">
                <Container>
                    {/* About */}
                    <div>
                        <h2>
                            About the movie
                        </h2>
                        <p>
                            A plot to murder the king and the two princes of the Chola dynasty is underfoot. Can the Cholas survive the wrath of the Pandiya rebels, who are being led by the vengeful Nandhini?
                        </p>
                    </div>
                    {/* Offers */}
                    <div>
                        <h2>
                            Top offers for you
                        </h2>
                        <div className="Offers">
                            <div>
                                <img src={Logo} alt="Logo" />
                                10% Off on movie munchies!
                            </div>
                            <span>Tap to view details</span>
                        </div>
                    </div>
                    {/* Cast */}
                    <div>
                        <h2>
                            Cast
                        </h2>
                        <CircleCard data={Store.Data.Cast} />
                    </div>
                    {/* Crew */}
                    <div>
                        <h2>
                            Crew
                        </h2>
                        <CircleCard data={Store.Data.Crew} />
                    </div>
                    {/* Reviews */}
                    <div>
                        <h2>
                            Top reviews
                        </h2>
                        <div className="Tags">
                            <div> #SuperDirection <span>11425</span> </div>
                            <div> #GreatActing <span>11344</span> </div>
                            <div> #Wellmade <span>11255</span> </div>
                            <div> #Blockbuster <span>11178</span> </div>
                        </div>
                    </div>
                    {/* Suggestions */}
                    <div>
                        <h2 className="Mbm40">
                            You might also like
                        </h2>
                        <Card
                            list={Store.Data.SuggestedMovies}
                        />
                    </div>
                    {/* Report */}
                    <div className="Report">
                        Report content &gt;
                    </div>
                </Container>
            </section>

             {/* Breadcrumbs */}
             <section className="Breadcrumbs Mtm25">
                <Container>
                    <NavLink to="/">Online tickets</NavLink> 
                    &nbsp;→&nbsp; 
                    <NavLink to="/">Movie tickets</NavLink> 
                    &nbsp;→&nbsp;
                    <NavLink to="/">Latest Movies</NavLink> 
                    &nbsp;→&nbsp;
                    <NavLink to="/">Ponniyin Selvan - Part 2</NavLink>
                </Container>
            </section>

            {/* Footer */}
            <Footer links={Store.Data.FooterLinks} />

            {/* Modals */}
            <BookingModal 
                name="Ponniyin Selvan - Part 2" 
                rating="8.6" 
                votes="37.5k" 
                click={openShowFormat} 
                visible={isBookingVisible}
            />

            <ShowFormatModal
                name="Ponniyin Selvan - Part 2" 
                data={Store.Data.ShowFormat} 
                close={closeShowFormat}
                visible={showFormat}
                handleTheaterRedirect={handleRedirect}
            />

        </div>
    );
}

export default Movies;