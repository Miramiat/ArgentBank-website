// src/Pages/SignIn.js
import React, { useState } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginUserSuccess, loginUserFailure } from '../features/auth/authSlice';
import { login } from '../api/authApi'; // Assurez-vous d'avoir le chemin correct

import '../designs/css/main.css';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // États locaux pour les champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      dispatch(loginStart()); // Démarrez le chargement
      const user = await login(username, password); // Utilisez la fonction login de authApi
      dispatch(loginUserSuccess(user));
      navigate('/user-profile');
    } catch (error) {
      dispatch(loginUserFailure('Erreur lors de la connexion'));
      console.error('Erreur lors de la connexion :', error);
    } finally {
      setLoading(false); // Arrêtez le chargement, que la connexion réussisse ou échoue
    }
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Utiliser handleSignIn comme gestionnaire de clic pour le bouton Sign In */}
            <Button text={loading ? 'Signing In...' : 'Sign In'} onClick={handleSignIn} disabled={loading} />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
