// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'; // Assurez-vous d'importer SignIn depuis le bon emplacement
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} /> {/* Utilisez le composant SignIn ici */}
          <Route path="/user-profile" element={<UserProfile />} />
          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


