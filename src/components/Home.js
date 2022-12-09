import React from "react";
import { Link } from "react-router-dom";
import { login } from '../features/authReducer';
import Home2 from '../assets/images/background/Home.jpg';
function Home() {
    return (
        <div>
            <img src={Home2} />
        </div >
    );
}

export default Home;
