import './App.css';
import React from 'react';
import SammyTheShark from './images/small-profile.jpeg'

function App() {
  return (
    <div>
      <img src={SammyTheShark} className="profile-small" alt="Sammy the Shark, DigitalOcean’s mascot"></img>
      <h1>Sammy the Shark</h1>
      <h5>SENIOR SELACHIMORPHA AT DIGITALOCEAN</h5>
    </div>
  )
}

export default App
