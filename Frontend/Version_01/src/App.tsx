import logo from 'C:/Users/User/Desktop/Git-R/MicroTube/Frontend/Version_01/src/assets/Icons/logo.png';
import React, { useState } from 'react';

function ButtonHomepatch({ title }: { title: string }) 
{
  const [color, setColor] = useState('red');

  // Funktion, um die Farbe zu ändern, wenn der Button geklickt wird
  const handleClick = () => 
  {
    setColor(color === 'red' ? 'green' : 'red');
  };

  return (
    <button 
      onClick={handleClick}
      style={{ backgroundColor: color }} 
    >
      {title}
    </button>
  );
}


export function Profile({ name }:{ name:string }) 
{
  return (
      <img src={logo} alt="mein YT-Logo" width={600} height={400} />
  )
}

const App = () => 
  {
  return (
    <div>
      <h1>Test Button</h1>
      <ButtonHomepatch title="Test01 Button" />
       <br></br>
       <Profile name = "h"/>
    </div>
  )

};

export default App;