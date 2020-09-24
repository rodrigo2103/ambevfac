import './style.sass';

import React from "react";
import logo from "../../img/logo.png";
//import Sidenav from '../Sidenav/Sidenav';





function Scene() {
    
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light ">
                
                <a href="/" class="navbar-brand"><img src={logo}></img></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                    <div class="navbar-nav">
                        <a href="/" class="nav-item nav-link">HOME</a>
                        <a href="/cadastro" class="nav-item nav-link">REGISTER</a>
                        
                        <a href="/factory" class="nav-item nav-link">FACTORY</a>
                        <a href="/loc" class="nav-item nav-link">MAP</a>
                        
                        <a href="" class="nav-item nav-link">LOG OUT</a>
                        <a href="sidenav2" class="nav-item nav-link">DASHBOARD</a>
                        <a href="sidenav3" class="nav-item nav-link">DASHBOARD2</a>
                    </div>
                    <div class="navbar-nav ml-auto action-buttons">
                        <div class="nav-item dropdown">
                            <a href="/login" class="nav-item nav-link">Login</a>
                            <div class="dropdown-menu action-form">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Scene;