// src/Pages/UserProfile.js
import React from 'react';

import '../designs/css/main.css';

function UserProfile() {
  return (
    <>

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {/* ... Ajoutez d'autres sections ou composants si nécessaire */}
      </main>

    </>
  );
}

export default UserProfile;
