import React from "react";
import { Link } from "react-router-dom";
import { login } from '../features/authReducer';
import { selectCurrentToken } from "../features/authReducer";
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const count = useSelector(selectCurrentToken)
    return (
        <div>
            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
            <div className="border-4 border-solid border-indigo-600 rounded-full"> <button
                className="font-bold underline text-danger"
                onClick={() => dispatch(login("asdasd"))}
            >
                Increment
            </button></div>

            <p className="text-primary bg-warning" >{count}</p>

            {count}
            <h1>Home</h1>
            {
                localStorage.getItem('token')

            }
            <nav>
                <Link to="/">ыбй</Link>
                <Link to="login">ЛАаыбй</Link>
                <Link to="profile">PROFILE</Link>
            </nav>
        </div >
    );
}

export default Home;
