import { useState } from 'react';

export const useLogin = (
  username: string,
  password: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
) => {
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake-API-Aufruf
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

  return { error, isLoading, handleSubmit, handleCancel };
};
