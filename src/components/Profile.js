import React from "react";
function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            {
                localStorage.getItem('accessToken')
            }
            <h1>dassadsa:{process.env.REACT_APP_API_KEY}</h1>
            <button onClick={() => { localStorage.removeItem('accessToken') }}>DARARA</button>
        </div>
    );
}

export default Profile;
