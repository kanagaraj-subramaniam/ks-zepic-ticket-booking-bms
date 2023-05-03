import React, { useState, useEffect } from "react";
import Close from "../../assets/images/closeblack.svg";
import Arrow from "../../assets/images/arrowblack.svg";
import { Container } from "react-bootstrap";
import Heart from "../../assets/images/heart.svg";
import { NavLink } from "react-router-dom";
import Store from "../../stores/data";

function SearchModal(props) {
    const [txt, setTxt] = useState("");
    const [result, setResult] = useState(false);
    const [resultArray, setResultArray] = useState([]);

    useEffect(() => {
        handleOnTxtChange();
    }, [txt]);

    const handleOnChange = (e) => {
        setTxt(e.target.value);
    }

    const handleOnTxtChange = () => {
        if (txt.length > 0) {
            let array = Store.Data.SearchQuery1;
            const filteredArray = array.filter(
                (arr) => arr.movie.includes(txt.toLowerCase())
            );

            if (filteredArray.length === 0) {
                setResultArray([{ movie: "No Data Found", link: "#" }]);
            }
            else {
                setResultArray(filteredArray);
            }
            setResult(true);
        }
        else {
            setResult(false);
            setResultArray([]);
        }
    }

    const handleClose = () => {
        setTxt("");
        setResult(false);
        setResultArray([]);
        props.close();
    }

    return (
        <div className="Modal" style={{ display: props.visible ? "block" : "none" }}>
            <div className="Search">
                <div className="Input">
                    <div className="Cnt">
                        <input type="text" value={txt} onChange={(e) => handleOnChange(e)} placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                        <div className="Rslt" style={{ display: result ? "block" : "none" }}>
                            {resultArray.map((result, r) => {
                                return (
                                    <div key={r} className={result.movie === "No Data Found" ? "Nf" : ""}>

                                        {result.movie === "No Data Found"
                                            ?
                                            "No data found :("
                                            :
                                            <NavLink key={r} to={result.link}>
                                                {result.movie}
                                            </NavLink>

                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" onClick={() => handleClose()} />
                    <img src={Close} alt="Close" className="Close" onClick={() => handleClose()} />
                </div>
                <div className="Content">
                    <Container>
                        <div>
                            <div className="Tab">
                                Movies
                            </div>
                            <div className="Filter">
                                <div className="Desc">Filter</div>
                                <div>Tamil</div>
                                <div>Telugu</div>
                                <div>Hindi</div>
                                <div>English</div>
                            </div>
                        </div>
                        <div className="Box">
                            <div>
                                <p>TAMIL</p>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Amaravathi (U)
                                    <img src={Heart} alt="Heart" />
                                    <span>79%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    August 16, 1947 (UA)
                                    <img src={Heart} alt="Heart" />
                                    <span>89%</span>
                                </NavLink>

                                <NavLink to="https://www.bookmyshow.com/">
                                    Deiva Machan (U)
                                    <img src={Heart} alt="Heart" />
                                    <span>69%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Pathu Thala (UA)
                                    <img src={Heart} alt="Heart" />
                                    <span>84%</span>
                                </NavLink>
                            </div>
                            <div>
                                <p>ENGLISH</p>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Evil Dead Rise (A)
                                    <img src={Heart} alt="Heart" />
                                    <span>75%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Sisu (A)
                                    <img src={Heart} alt="Heart" />
                                    <span>90%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Polite Society (A)
                                    <img src={Heart} alt="Heart" />
                                    <span>65%</span>
                                </NavLink>
                            </div>
                            <div>
                                <p>TELUGU</p>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Agent (UA)
                                    <img src={Heart} alt="Heart" />
                                    <span>59%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Virupaksha (A)
                                    <img src={Heart} alt="Heart" />
                                    <span>93%</span>
                                </NavLink>
                                <NavLink to="https://www.bookmyshow.com/">
                                    Ponniyin Selvan - Part 2 (U)
                                    <img src={Heart} alt="Heart" />
                                    <span>87%</span>
                                </NavLink>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;