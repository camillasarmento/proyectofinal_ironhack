// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar } from './components';
import { Hero} from './components';
import {ImageGrid} from './components';
import {Feedback} from './components';
import Footer from "./components/Footer";
import './App.css'
import Index from "./index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contacto} from "./pages/index.js";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

