import React from 'react'
import  './App.css'

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="nav-bar">
        <div className="navbar-left">
        <h2>Home Content</h2>
        </div>
        <div className="navbar-right">
        <a class="Home">Home</a>
        <a class="Home">Profile</a>
        <a class="Home">Contact</a>
        <a class="Home">About us</a>
        </div>
      </div>

      <div className="Context">
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit libero molestiae cum deserunt maiores tempora perferendis temporibus enim veritatis, odit porro blanditiis quisquam officia explicabo quos nam odio ad?</p>
        </div>
        <div className="image">
          <img src="https://i.pinimg.com/736x/02/b7/d3/02b7d33ea616c46706e84fdc51ca7743.jpg" alt="Photo" />
        </div>
      </div>

      <div className="services">
      <h2>SERVICES</h2>
      <div className="ser-content">
        <div className="ser-1">
          <h3>web development</h3>
          <p>Html , Css , Bootstrap</p>
        </div>
        <div className="ser-1">
          <h3>web development</h3>
          <p>Html , Css , Bootstrap</p>
        </div>
        <div className="ser-1">
          <h3>web development</h3>
          <p>Html , Css , Bootstrap</p>
        </div>
      </div>
      </div> 

      <div className="contact-page">
        <h2>CONTACTS</h2>
        <div className="contact-details">
          <p>vinodguttula0899@gmail.com</p>
          <p>+91 9346999046</p>
          <p>Instagram</p>
        </div>
      </div>

    </div>
  )
}

export default Homepage