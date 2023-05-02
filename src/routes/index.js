import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../components/home";
import Movies from "../components/movies";
import NotFound from "../components/notFound";
import Theaters from "../components/theaters";
import Success from "../components/success";

function RoutesDefault() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='movies/ponniyin-selvan-part-2' element={<Movies />} />
                <Route path='movies/ponniyin-selvan-part-2/:language/:type' element={<Theaters />} />
                <Route path='booking/success' element={<Success />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesDefault;