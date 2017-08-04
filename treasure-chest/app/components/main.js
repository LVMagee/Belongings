import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Main = props =>(
    <div>
        <navbar />
        {props.children}
        <footer />
    </div>
);
