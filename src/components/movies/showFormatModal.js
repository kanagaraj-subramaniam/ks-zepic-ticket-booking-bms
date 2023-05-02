import React from "react";
import CloseGray from "../../assets/images/close-gray.svg";

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
                                        <div className="Tags" key={f} onClick={() => props.handleTheaterRedirect(item.language, format.type)}>
                                            {format.type}
                                        </div>
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