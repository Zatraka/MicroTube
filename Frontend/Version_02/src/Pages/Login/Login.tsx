import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom'

const LoginPage: React.FC = () => {
  return (
    <Link to = {`Login`} className="login-page">
      <div className="login-box">
        <h2>Anmeldung</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Benutzername</label>
            <input type="text" id="username" placeholder="Benutzername eingeben" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort</label>
            <input type="password" id="password" placeholder="Passwort eingeben" />
          </div>
          <div className="button-group">
            <button type="submit" className="confirm-button">Bestätigen</button>
            <button type="button" className="cancel-button">Abbrechen</button>
          </div>
        </form>
      </div>
    </Link>
  );
};

export default LoginPage;
