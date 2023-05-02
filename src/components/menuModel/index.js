import React from "react";
import Notifications from "../../assets/images/notifications.svg";
import Card from "../../assets/images/creditcard.png";
import HS from "../../assets/images/helpandsupport.png";
import Rewards from "../../assets/images/rewards.png";
import Smile from "../../assets/images/bookasmile.png";
import Arrow from "../../assets/images/arrowright.svg";

function MenuModal(props) {
    return (
        <div className="Modal" style={{display: props.visible ? "block" : "none"}}>
            <div className="Overlay" onClick={() => props.close()}>
                {/*  */}
            </div>
            <div className="Menu">
                <div className="Strip">Hey!</div>
                <div className="Item">
                    <img src={Notifications} alt="Notifications" />
                    <div> Notifications </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" />
                </div>
                <div className="Item">
                    <img src={Card} alt="Card" />
                    <div> Play Credit Card
                        <span>View your Play Credit Card details and offers</span> 
                    </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" />
                </div>
                <div className="Item">
                    <img src={HS} alt="HS" />
                    <div> Help & Support
                        <span>View commonly asked queries and Chat</span> 
                    </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" />
                </div>
                <div className="Item">
                    <img src={Rewards} alt="Rewards" />
                    <div> Rewards
                        <span>View your rewards & unlock new ones</span> 
                    </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" />
                </div>
                <div className="Item">
                    <img src={Smile} alt="Smile" />
                    <div> BookASmile </div>
                    <img src={Arrow} alt="Arrow" className="Arrow" />
                </div>

            </div>
        </div>
    );
}

export default MenuModal;