import React, { useState } from 'react';
import './Login.css';
import { useLogin } from '../../Hooks/useLogin';
import Spinner from '../../Components/Spinner/Spinner';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading, handleSubmit, handleCancel } = useLogin(username, password, setUsername, setPassword);

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Anmeldung</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group">
            <label htmlFor="username">Benutzername</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Benutzername eingeben"
              disabled={isLoading}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              disabled={isLoading}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="confirm-button" disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Bestätigen'}
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel} disabled={isLoading}>
              Abbrechen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
