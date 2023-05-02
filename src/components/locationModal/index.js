import React from "react";

function LocationModal(props) {
    return (
        <div className="Modal" style={{display: props.visible ? "block" : "none"}}>
            <div className="Overlay" onClick={()=>props.close()}>
                {/*  */}
            </div>
            <div className="Location">
                <h4>Popular Cities</h4>
                <div className="Item">
                    {props.locations.map((item, i) => {
                        return (
                            <div key={i} onClick={()=> props.selectedLocation(item.name)}>
                                <img src={props.activeLocation === item.name ? item.assetActive : item.asset} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        );
                    })}
                </div>
                <span>View All Cities</span>
            </div>
        </div>
    );
}

export default LocationModal;