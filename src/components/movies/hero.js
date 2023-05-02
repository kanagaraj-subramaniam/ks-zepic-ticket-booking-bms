import React from "react";
import { Container } from "react-bootstrap";
import Poster from "../../assets/images/movies/poster.png";
import Play from "../../assets/images/play.svg";
import Star from "../../assets/images/star.svg";
import Share from "../../assets/images/share.svg";

function MoviesHero(props) {
    return (
        <section className="Movie-Hero">
            <Container>
                <div>
                    <div className="W25">
                        <div className="Post">
                            <img src={Poster} alt="Poster" />
                            <div className="Info">
                                In cinemas

                            </div>
                            <div className="Play">
                                <img src={Play} alt="Play" />
                                <span>Trailers (8)</span>
                            </div>
                        </div>
                    </div>
                    <div className="W75">
                        <h2> Ponniyin Selvan - Part 2 </h2>
                        <div className="Review">
                            <img src={Star} alt="Star" />
                            <span><strong>8.6/10</strong> 37.5K votes &gt;</span>
                        </div>

                        <div className="Rating">
                            <h4>Add your rating & review</h4>
                            <h5>Your ratings matter</h5>
                            <button> Rate Now </button>
                        </div>

                        <div className="Tags">
                            <div>
                                <span>2D,</span>
                                <span>4DX,</span>
                                <span>IMAX 2D</span>
                            </div>
                            <div>
                                <span>Tamil,</span>
                                <span>Telugu,</span>
                                <span>Hindi,</span>
                                <span>Kannada,</span>
                                <span>Malayalam</span>
                            </div>
                        </div>

                        <div className="Info">
                            2h 44m
                            <span>•</span>
                            Action, Adventure, Drama, Historical
                            <span>•</span>
                            U
                            <span>•</span>
                            28 Apr, 2023
                        </div>

                        <button className="Btn-Tickets" onClick={()=>props.click()}>
                            Book tickets
                        </button>

                    </div>
                </div>
                <div className="Share">
                    <img src={Share} alt="Share" />
                    <span>Share</span>
                </div>
            </Container>
        </section>

    );
}

export default MoviesHero;