import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../navigation";
import Card from "../cards";
import Box from "../boxes";
import Footer from "../footer";
import Store from "../../stores/data";
import Premiere from "../../assets/images/premiere.png";
import CarouselSlide from "../carousel";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            {/* Navigation */}
            <Navigation />

            {/* Carousel */}
            <CarouselSlide />

            {/* Recommended Movies */}
            <Card
                title="Recommended Movies"
                moreLink="https://bookmyshow.com/"
                list={Store.Data.RecommendedMovies}
            />

            {/* New Launch Banner */}
            <Card
                list={Store.Data.NewLaunch}
                fullBanner
            />

            {/* Best of Live Events */}
            <Card
                title="The Best Of Live Events"
                moreLink="https://bookmyshow.com/"
                list={Store.Data.BestOfLiveEvents}
                onlyBanner
            />

            {/* Premiere */}
            <section className="Premiere">
                <Container>
                    <img src={Premiere} alt="Premiere" className="Logo" />
                    <Card
                        title="Premieres"
                        desc="Brand new releases every Friday"
                        list={Store.Data.Premieres}
                        darkMode
                    />
                </Container>
            </section>

            {/* Online EVents */}
            <Card
                title="Online Streaming Events"
                moreLink="https://bookmyshow.com/"
                list={Store.Data.OnlineEvents}
            />

            {/* Outdoor EVents */}
            <Card
                title="Outdoor Events"
                moreLink="https://bookmyshow.com/"
                list={Store.Data.OutdoorEvents}
                new
            />

            {/* Trending Searches */}
            <Box
                title="Trending Searches Right Now"
                list={Store.Data.TrendingSearches}
            />

            {/* Comedy Events */}
            <Card
                title="Laughter Therapy"
                moreLink="https://bookmyshow.com/"
                list={Store.Data.ComedyEvents}
            />

            {/* Breadcrumbs */}
            <section className="Breadcrumbs">
                <Container>
                    <NavLink to="/">Home</NavLink>
                </Container>
            </section>

            {/* Footer */}
            <Footer links={Store.Data.FooterLinks} />

        </div>
    );
}

export default Home;