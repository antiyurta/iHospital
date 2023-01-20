import React from 'react';
import { Link } from 'react-router-dom';
function History() {
   return (
      <div>
         <h1>History</h1>
         {localStorage.getItem('token')}
         <nav>
            <nav>
               <Link to="/">ыбй</Link>
               <Link to="/login">ЛАаыбй</Link>
               <Link to="/profile">PROFILE</Link>
               <Link to="/history">HISTORY</Link>
            </nav>
         </nav>
      </div>
   );
}

export default History;
