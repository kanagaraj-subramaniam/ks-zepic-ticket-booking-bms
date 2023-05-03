import React, { useState } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import Store from "../../stores/data";
import List from "../../components/theaters/list.js";
import TermsModal from "./termsModal";
import SeatsModal from "./seatsModal";
import LayoutsModal from "./layoutsModal";
import { useSelector } from "react-redux";

function Theaters() {

    const state = useSelector((state) => state);
    
    const [view, setView] = useState("List");
    const [film, setFilm] = useState("Ponniyin Selvan - Part 2");
    const [step, setStep] = useState(0);
    const [ticketCost, setTicketCost] = useState(120);
    const [ticketClass, setTicketClass] = useState("First Class");
    const [isFastFilling, setIsFastFilling] = useState(false);
    const [theater, setTheater] = useState("");
    const [time, setTime] = useState("");
    const [selectedSeats, setSelectedSeats] = useState(2);
    const [selectDate, setSelectDate] = useState("01 MAY 2023");

    const resetStep = () => {
        setStep(0);
        setView("List");
        setFilm("Ponniyin Selvan - Part 2");
        setTicketCost(120);
        setTicketClass("First Class");
        setIsFastFilling(false);
        setTheater("");
        setTime("");
        setSelectedSeats(2);
        enableScroll();
    }

    const setStepsData = (step, theaterName, ticketCost, time, type, isFastFilling) => {
        setSteps(step);
        setTheater(theaterName);
        setTicketCost(ticketCost);
        setTime(time);
        setTicketClass(type);
        setIsFastFilling(isFastFilling);
    }

    const setStepsFromTerm = (step) => {
        setSteps(step);
    }

    const setSteps = (step) => {
        setStep(step);
        disableScroll();
    }

    const setStepsFromSeat = (step) => {
        setSteps(step);
    }

    const setSeats = (seat) => {
        setSelectedSeats(seat);
    }

    const setStepsFromLayout = (step) => {
        setSteps(step);
    }

    const setSelectedDate = (date) => {
        setSelectDate(date);
    }

    const handleTheaterLayout = (date, time, theater) => {
        var layout = state.theaterLayout.filter(function (el) {
            return el.date === date &&
                   el.time === time &&
                   el.theater === theater;
          });
      
        return layout; 
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    }

    return (
        <div>
            {/* Navigation */}
            <Navigation />

            {/* List */}
            {view === "List" && <List film={film} setSteps={setStepsData} setSelectedDate={setSelectedDate} selectedDate={selectDate} />}

            {/* Terms Modal */}
            {step === 1 && <TermsModal handleClose={resetStep} setStepsFromTerm={setStepsFromTerm} />}

            {/* Seats Modal */}
            {step === 2 &&
                <SeatsModal
                    handleClose={resetStep}
                    setStepsFromSeat={setStepsFromSeat}
                    cost={ticketCost}
                    class={ticketClass}
                    isFastFilling={isFastFilling}
                    setSeats={setSeats}
                    selectedSeats={selectedSeats}
                />
            }

            {/* Layouts Modal */}
            {step === 3 &&
                <LayoutsModal
                    handleClose={resetStep}
                    film={film}
                    theater={theater}
                    time={time}
                    selectedSeats={selectedSeats}
                    setStepsFromLayout={setStepsFromLayout}
                    layout={handleTheaterLayout(selectDate, time, theater)}
                    ticketClass={ticketClass}
                    ticketCost={ticketCost}
                    date={selectDate}
                />
            }

            {/* Footer */}
            <Footer links={Store.Data.FooterLinks} />
        </div>
    );
}

export default Theaters;