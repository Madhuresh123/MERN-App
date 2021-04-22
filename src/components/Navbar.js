import React from "react";

function Navbar(){
    return (
        <header>
          <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#home">Home</a></li>
                <li style={{float: 'left'}}><a href="#home">My App</a></li>
          </ul>
        </header>
    );
}

export default Navbar; 