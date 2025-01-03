import React from 'react';
import './Spinner.css';

/*
Dynamischer Spinner Component:
    Die Breite der Spinner-Ränder (borderWidth) basiert auf der Spinner-Größe (size / 10).

    Props für Größe und Farbe:
        - size: Gibt die Breite und Höhe des Spinners in Pixeln an.
        - color: Legt die Farbe des oberen Randes fest (der rotierende Teil).

Beispiele:
    - Standard-Spinner Component
        <Spinner/>

    - Großer Spinner mit einer anderen Farbe
        <Spinner size={40} color="#ff5722" />

    - Kleiner Spinner:
        <Spinner size={10} color="#000" />

*/


interface SpinnerProps {
  size?: number; // Größe in Pixel
  color?: string; // Farbe
}

const Spinner: React.FC<SpinnerProps> = ({ size = 20, color = '#4caf50' }) => {
  return (
    <span
      className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 10}px`,
        borderTopColor: color,
      }}
    ></span>
  );
};

export default Spinner;
