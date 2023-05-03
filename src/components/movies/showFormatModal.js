import React from "react";
import CloseGray from "../../assets/images/close-gray.svg";
import { NavLink } from "react-router-dom";

function ShowFormatModal(props) {
    return (
        <div className="Modal" style={{ display: props.visible ? "block" : "none" }}>
            <div className="Overlay" onClick={() => props.close()}>
                {/*  */}
            </div>
            <div className="ShowFormat">
                <div className="Name">
                    {props.name}
                    <img src={CloseGray} alt="Close" onClick={() => props.close()} />
                </div>
                <span>Select language and format</span>

                <div>
                    {props.data.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className="Title">
                                    {item.language}
                                </div>
                                {item.format.map((format, f) => {
                                    return (
                                        <NavLink key={f} to={window.location + '/' + item.language.toLowerCase() + '/' + format.type.toLowerCase()} onClick={()=>props.close()}>
                                            <div className="Tags">
                                                {format.type}
                                            </div>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShowFormatModal;