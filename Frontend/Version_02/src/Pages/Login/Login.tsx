import React, { useState } from 'react';
import './Login.css';

/*

    - Es wird geprüft, ob die Eingabefelder leer sind.
    - Eine Fehlermeldung wird angezeigt, wenn die Validierung fehlschlägt.

    - "Bestätigen" und "Abbrechen" werden während des Ladezustands deaktiviert.
    - Der Text auf dem "Bestätigen"-Button zeigt Lädt... an.
    - Felder für Benutzername und Passwort werden ebenfalls deaktiviert, während isLoading aktiv ist.
*/
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Benutzername und Passwort dürfen nicht leer sein!');
      return;
    }

    setError(null);
    setIsLoading(true);

    // Simuliere einen API-Aufruf (z.B. mit fetch oder axios)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake-API-Aufruf
      console.log('Benutzername:', username);
      console.log('Passwort:', password);
      alert('Anmeldung erfolgreich!');
    } catch (err) {
      console.error('Login fehlgeschlagen:', err);
      setError('Fehler beim Login. Bitte erneut versuchen.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Anmeldung</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
              {isLoading ? 'Lädt...' : 'Bestätigen'}
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel} disabled={isLoading}>Abbrechen</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
