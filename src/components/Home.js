import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../context/MainContext";
function Home() {
    const MainContextState = useContext(MainContext)
    return (
        <div>
            <h1>Home</h1>
            {
                localStorage.getItem('token')

            }
            <nav>
                <Link to="/">ыбй</Link>
                <Link to="login">ЛАаыбй</Link>
                <Link to="profile">PROFILE</Link>
            </nav>
        </div>
    );
}

export default Home;
