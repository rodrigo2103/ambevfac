import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Header,Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Software.sass'

export default class Software extends Component {
  render() {

    return (

      <div className="lobby__container">

        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">SOFTWARE</a>

        </nav>
        <div class="row">
          <div class="col-sm">
            
              <ul class="list-c">
              <li class="list-group-item">
               



                <Link to="/factory" href="">FACTORY</Link>
              </li>

            </ul>
         






          </div>
          

        </div>

        <ul class="list-group">
            <li class="list-group-item">Name: Tanque</li>
            <li class="list-group-item">Tipo: Tanque de Fermentação</li>
            <li class="list-group-item">Modelo: XMXM</li>
            
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />

        </ul>
        

        <div class="card">
          
          
        <img src="https://thumbs.dreamstime.com/b/cervejeiro-ambev-cidade-de-pirai-em-rio-janeiro-brasil-118181657.jpg" class="img-fluid" alt="Responsive image"></img>
        </div>
        
      </div>

    )
  }
}