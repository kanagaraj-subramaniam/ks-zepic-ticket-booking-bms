import React, { useState } from "react";
import Google from "../../assets/images/google.svg";
import Email from "../../assets/images/email.svg";
import Apple from "../../assets/images/apple.svg";
import CloseGray from "../../assets/images/close-gray.svg";
import Flag from "../../assets/images/indianflag.svg";
import Back from "../../assets/images/goback.svg";
import { NavLink } from "react-router-dom";

function AccountModal(props) {
    const [otpBlockVisible, setOtpBlockVisible] = useState(false);
    const [showTerms, setShowTerms] = useState(true);
    const [showActBtn, setShowActBtn] = useState(false);
    const [userNum, setUserNum] = useState("");

    const handleChange = (e) => {
        setUserNum(e.target.value);
        if (userNum.length >= 0) {
            setShowTerms(false);
            setShowActBtn(true);
        }
        else {
            setShowTerms(true);
            setShowActBtn(false);
        }
    };

    const onOtpClick = () => {
        if (userNum.length > 0) {
            setOtpBlockVisible(true);
        }
        else {
            setOtpBlockVisible(false);
        }
    }

    const handleRefresh = () => {
        setOtpBlockVisible(false);
        setShowTerms(true);
        setShowActBtn(false);
        setUserNum("");
    }

    const handleClose = () => {
        handleRefresh();
        props.close();
    }

    return (
        <div className="Modal" style={{display: props.visible ? "block" : "none"}}>
            <div className="Overlay" onClick={handleClose}>
                {/*  */}
            </div>
            <div className="Account">
                {!otpBlockVisible ?
                    <div>
                        <h4>
                            Get Started
                            <img src={CloseGray} alt="Close" onClick={handleClose} />
                        </h4>

                        <div className="Social">
                            <img src={Google} alt="Google" />
                            Continue with Google
                        </div>
                        <div className="Social">
                            <img src={Email} alt="Email" />
                            Continue with Email
                        </div>
                        <div className="Social">
                            <img src={Apple} alt="Apple" />
                            Continue with Apple
                        </div>

                        <div className="Or">OR</div>

                        <div className="Input">
                            <img src={Flag} className="Flag" alt="Flag" />
                            <div className="Ext">+91</div>
                            <input
                                type="number"
                                className="Num"
                                value={userNum}
                                onChange={handleChange}
                                placeholder="Continue with mobile number" />
                        </div>

                        <div className="Terms" style={{ display: !showTerms && "none" }}>
                            I agree to the <NavLink to="https://in.bookmyshow.com/terms-and-conditions">Terms & Conditions</NavLink> & <NavLink href="https://in.bookmyshow.com/privacy">Privacy Policy</NavLink>
                        </div>

                        <button className="Btn-Act" style={{ display: !showActBtn && "none" }} onClick={onOtpClick}>Continue</button>

                    </div>
                    :
                    <div>
                        <img src={Back} alt="Back" title="Go back" onClick={handleRefresh} />

                        <h3> Verify your Mobile Number </h3>
                        <h6> Enter OTP sent to <span>+91 {userNum}</span></h6>
                        <div>
                            <input type="number" className="Chk" />
                            <input type="number" className="Chk" />
                            <input type="number" className="Chk" />
                            <input type="number" className="Chk" />
                            <input type="number" className="Chk" />
                            <input type="number" className="Chk" />
                        </div>
                        <button className="Btn-Act Mt2" onClick={handleClose}>Continue</button>
                    </div>
                }

            </div>
        </div>
    );
}

export default AccountModal;