// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import UserProfile from './Pages/UserProfile';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authSlice from './features/auth/authSlice'; // Importer authSlice

const store = configureStore({
  reducer: {
    auth: authSlice.reducer, // Utiliser ".reducer" ici
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;


