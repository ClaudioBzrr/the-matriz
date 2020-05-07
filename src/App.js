import React from 'react';
import Routes from './routes';
import matrix from './assets/matrix.mp4'
import './global.css'



function App() {
  return (
    <div>
    <video autoPlay muted loop playsInline>
      <source src={matrix} type="video/mp4"/>
    </video>
    <Routes/>
    </div>

  );
}

export default App;
