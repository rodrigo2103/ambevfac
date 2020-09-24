import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Header,Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';



import './Equipment.sass'





export default class Equipment extends Component {
  render() {
    

    return (

      <div className="lobby__container">

        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">EQUIPMENT</a>
           
        </nav>
        <div class="row">
          <div class="col-sm">
            
              <ul class="list-c">
              <li class="list-group-item">
               

                
                <a class="navbar-brand">SEARCH</a>
                            <div class="active-cyan-4 mb-4">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
              </li>
              
                        
              
            </ul>
         


          </div>
          

        </div>
        
        
            <ul class="list-group list-group-horizontal">
                <li id="rcorners1" class="list-group-item">First item</li>
                <li id="rcorners2" class="list-group-item">Second item</li>
                <li id="rcorners3" class="list-group-item">Third item</li>
                <li id="rcorners4" class="list-group-item">Fourth item</li>
            </ul>
            
        




        
      </div>

    )
  }
}