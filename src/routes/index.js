import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../components/home";
import Movies from "../components/movies";
import NotFound from "../components/notFound";
import Theaters from "../components/theaters";
import Success from "../components/success";
import ScrollToTop from "../routes/scrollToTop";

function RoutesDefault() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='movies/ponniyin-selvan-part-2' element={<Movies />} />
                    <Route path='movies/ponniyin-selvan-part-2/:language/:type' element={<Theaters />} />
                    <Route path='booking/success' element={<Success />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
}

export default RoutesDefault;