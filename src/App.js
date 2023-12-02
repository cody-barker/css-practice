import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </nav>

      <section class="hero" id="home">
        <h1>Delicious Bakery</h1>
        <p>Freshly baked goods made with love</p>
      </section>

      <section class="menu" id="menu">
        <div class="menu-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG" alt="Bread"/>
          <h2>Bread</h2>
          <p>Our freshly baked bread is made with the finest ingredients.</p>
        </div>
        <div class="menu-item">
          <img src="https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg" alt="Cakes"/>
          <h2>Cakes</h2>
          <p>Indulge in our delicious cakes, perfect for any occasion.</p>
        </div>

      </section>


      <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Visit us at 123 Bakery Street, Cityville</p>
        <p>Email: info@deliciousbakery.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>
  </>
  )
}

export default App
