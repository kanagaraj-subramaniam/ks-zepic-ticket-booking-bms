import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Store from "../../stores/data";
import Logo from "../../assets/images/logo.svg";
import SearchGray from "../../assets/images/search-gray.svg";
import HamburgerGray from "../../assets/images/hamburger-gray.svg";
import LocationModal from "../locationModal";
import AccountModal from "../accountModal";
import MenuModal from "../menuModel";
import SearchModal from "../searchModal";
import SignoutModal from "../signoutModal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
    const state = useSelector((state) => state);

    // Modals
    const [location, setLocation] = useState("Chennai");
    const [locationModalVisibility, setLocationModalVisibility] = useState(false);
    const [accountModalVisibility, setAccountModalVisibility] = useState(false);
    const [menuModalVisibility, setMenuModalVisibility] = useState(false);
    const [searchModalVisibility, setSearchModalVisibility] = useState(false);
    const [signoutModalVisibility, setSignoutModalVisibility] = useState(false);

    const openLocationModal = () => {
        setLocationModalVisibility(true);
        disableScroll();
    }

    const closeLocationModal = () => {
        setLocationModalVisibility(false);
        enableScroll();
    }

    const setSelectedLocation = (selectedLocation) => {
        setLocation(selectedLocation);
        setLocationModalVisibility(false);
    }

    const openAccountModal = () => {
        setAccountModalVisibility(true);
        disableScroll();
    }

    const closeAccountModal = () => {
        setAccountModalVisibility(false);
        enableScroll();
    }

    const openSignoutModal = () => {
        setSignoutModalVisibility(true);
        disableScroll();
    }

    const closeSignoutModal = () => {
        setSignoutModalVisibility(false);
        enableScroll();
    }

    const openMenuModal = () => {
        setMenuModalVisibility(true);
        disableScroll();
    }

    const closeMenuModal = () => {
        setMenuModalVisibility(false);
        enableScroll();
    }

    const openSearchModal = () => {
        setSearchModalVisibility(true);
        disableScroll();
    }

    const closeSearchModal = () => {
        setSearchModalVisibility(false);
        enableScroll();
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    }

    return (
        <section className="Navigation">
            <div className="Actions W100">
                <Container>
                    <div className="Flx">
                        <div className="Flx-fs W75">
                            <div className="Logo">
                                <NavLink to="/">
                                    <img src={Logo} alt="BookMyShow" title="BookMyShow" />
                                </NavLink>
                            </div>
                            <div className="Search" onClick={openSearchModal}>
                                <img src={SearchGray} alt="Search" />
                                <p>Search for Movies, Events, Plays, Sports and Activities</p>
                            </div>
                        </div>
                        <div className="Flx-fe W25">
                            <div className="Location" onClick={openLocationModal}>
                                <div>
                                    {location}
                                </div>
                                <span>&#x25BC;</span>
                            </div>
                            <div className="Access">
                                {state.userMobileNumber === 0 ?
                                    <button className="Btn-Primary-Sm" onClick={openAccountModal}> Sign in </button>
                                    :
                                    <button 
                                        className="Btn-Primary-Sm" 
                                        style={{width: "max-content", fontWeight: 500}} 
                                        onClick={openSignoutModal}> 
                                            Hi, {state.userMobileNumber} 
                                    </button>
                                }

                            </div>
                            <div className="Menu">
                                <img src={HamburgerGray} alt="Hamburger Menu" onClick={openMenuModal} title="Hamburger Menu" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="Links W100">
                <Container>
                    <div className="Flx">
                        <div className="Flx-fs W60 Main">
                            {Store.Data.MainMenu.map((item, i) => {
                                return (
                                    <span className="Prel" key={i}>
                                        <NavLink to={item.link}>
                                            {item.name}
                                            {item.isNew && <span>NEW</span>}
                                        </NavLink>
                                    </span>
                                );
                            })
                            }
                        </div>
                        <div className="Flx-fe W40 Sub">
                            {Store.Data.SubMenu.map((item, i) => {
                                return (
                                    <span className="Prel" key={i}>
                                        <NavLink to={item.link}>
                                            {item.name}
                                        </NavLink>
                                    </span>
                                );
                            })
                            }
                        </div>
                    </div>
                </Container>
            </div>

            {/* Modals */}
            <LocationModal
                locations={Store.Data.Locations}
                visible={locationModalVisibility}
                activeLocation={location}
                selectedLocation={setSelectedLocation}
                close={closeLocationModal}
            />

            <AccountModal
                visible={accountModalVisibility}
                close={closeAccountModal}
            />

            <MenuModal
                visible={menuModalVisibility}
                close={closeMenuModal}
            />

            <SearchModal
                visible={searchModalVisibility}
                close={closeSearchModal}
            />

            <SignoutModal
                visible={signoutModalVisibility}
                close={closeSignoutModal}
            />
        </section>
    );
}

export default Navigation;