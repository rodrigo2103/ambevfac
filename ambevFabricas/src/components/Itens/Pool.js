import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Header,Form, FormControl, Button, Dropdown} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import './Pool.sass'

export default class Pool extends Component {
  render() {

    return (

      <div className="lobby__container">

        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">POOL</a>

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
            <li class="list-group-item">Componentes: ______</li>
            <li class="list-group-item">Última Manutenção: 00/00/0000</li>
            <li class="list-group-item">Hora: 00:00</li>
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />

        </ul>


        
      </div>

    )
  }
}