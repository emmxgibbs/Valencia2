import React from 'react';
import ReactDOM from 'react-dom';

function loggedIn() {
    return (
    <h2 id = 'logIn'> {
        loggedIn ? "Hello ${name}, welcome to Valencia!" : "Please log in to see your account information!"
        }
    </h2>
    );
}
//put some buttons in to log in?

//put in redirect to regular homepage to display the page below

ReactDOM.render(loggedIn, document.getElementById('frontend'));

function showHomepage() {
    return (
    <div className="clothes">
      <header className="clothes-header">
        <img src={logo} className="logo" alt="logo"/>
       
        <a
          className="link"
          href="localhost:8080/ethical-clothes/homepage"
          target="_blank"
        >
          Valencia
        </a>
      </header>
    </div>
  );
}

const clothes = (
    <ul>
        <img src='images/Maxi_dress.jpg' alt='Maxi-dress'>Maxi-dress</img>
        <img src='images/Straight_jeans.jpg' alt='Straight leg jeans'>Straight Jeans</img>
        <img src='images/Oversized_tee' alt='Oversized t-shirt'>Oversized T-shirt</img>
    </ul>
);
//how to put these in flex boxes or something?




