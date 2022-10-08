import React from "react";
import { Link } from "react-router-dom";
import { login } from '../features/authReducer';

function Home() {
    return (
        <div>

            <nav>
                <Link to="/">ыбй</Link>
                <Link to="login">ЛАаыбй</Link>
                <Link to="profile">PROFILE</Link>
            </nav>
        </div >
    );
}

export default Home;
