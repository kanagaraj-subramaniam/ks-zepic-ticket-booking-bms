import React from "react";
import CloseGray from "../../assets/images/close-gray.svg";

function TermsModal(props) {

    return (
        <div className="Modal">
            <div className="Overlay" onClick={()=>props.handleClose()}>
                {/*  */}
            </div>
            <div className="Term">
                <div className="Heading">
                    Terms & Conditions
                    <img src={CloseGray} alt="Close" onClick={()=>props.handleClose()} />
                </div>
                <div className="Details">
                    1. Wearing of face mask inside the multiplex is compulsory. Masks need to be worn even while watching a movie inside the auditorium.<br />
                    2. Entry is allowed only for valid ticket holders.<br />
                    3. Guests aged under 18 will not be allowed in `A` rated movies.<br />
                    4. Children above the age of 3 years require tickets for `U` or `U/A` rated movies.<br />
                    5. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.<br />
                    6. Tickets once purchased cannot be cancelled, exchanged or refunded.<br />
                    7. Guest Agrees to be contacted by INOX Management for the purpose of seeking feedback for service improvement.<br />
                    8. Decision(s) taken by INOX shall be final and binding, Rights of admission reserved.<br />
                    9. Outside food and beverages are not allowed inside the cinema premises.<br />
                    10. Patrons under the influence of alcohol or drugs will not be allowed inside the Cinema Premises.
                </div>
                <div className="Actions">
                    <button className="Btn-Cn" onClick={()=>props.handleClose()}>Cancel</button>
                    <button className="Btn-Ac" onClick={()=>props.setStepsFromTerm(2)}>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default TermsModal;