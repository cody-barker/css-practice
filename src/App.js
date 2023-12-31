import './App.css';
import React from 'react';
import SammyTheShark from './images/small-profile.jpeg'

function App() {
  return (
    <>
      <div className="header">
        <img src={SammyTheShark} className="profile-small" alt="Sammy the Shark, DigitalOcean’s mascot"></img>
        <h1>Sammy the Shark</h1>
        <h5>SENIOR SELACHIMORPHA AT DIGITALOCEAN</h5>
      </div>

      <div class="column-2">
            <h1>About me</h1>
            <p>Hi! I'm Sammy the Shark, Senior Selachimorpha at DigitalOcean by day, dabbler in all things dev by night. This site is a demonstration website for the tutorial series "<a href="https://www.digitalocean.com/community/tutorial_series/how-to-build-a-website-with-css">How To Build a Website With CSS</a>," which walks you through building and customizing this website from start to finish.</p>
            <p>If you're following this tutorial series, you can replace this text with your own "About Me" content.</p>    
        </div>

      <div class="column-2 large-profile"></div>
    </>
  )
}

export default App
