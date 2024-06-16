import {Feedback, Hero, ImageGrid, Navbar} from "./components/index.js";
import Footer from "./components/Footer.jsx";
import React from "react";

const Index = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <ImageGrid/>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Index