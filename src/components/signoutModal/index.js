import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions";

function SignoutModal(props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSignout = () => {
        dispatch(signOut());
        props.close()
    }

    return (
        <div className="Modal" style={{ display: props.visible ? "block" : "none" }}>
            <div className="Overlay" onClick={() => props.close()}>
                {/*  */}
            </div>
            <div className="Account" style={{height: 180}}>
                <h4 style={{marginBottom: 0, fontWeight: 700}}>
                    Hello, {state.userMobileNumber}
                </h4>
                <button 
                    className="Btn-Act" 
                    onClick={() => {
                        handleSignout()
                    }}
                    >
                        Sign out
                </button>
            </div>
        </div>
    );
}

export default SignoutModal;