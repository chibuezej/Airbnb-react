 import React from "react";
 import Logo from "../../public/assets/logo.png"
 import "./App.css"

 function Navbar () {
    return(
        <nav>
            <img src={Logo} alt="airbnb" />
        </nav>
    )
 }

 export default Navbar;