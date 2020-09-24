import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Header,Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './styles/Lobby.sass'

const factoryClassList = require("../Editfactory/services/Editfactory-services");
const factoryList= factoryClassList.default.fabricas;

var url = window.location.href
var urlSplit = url.split("/")
var urlID = urlSplit[4] 

//console.log(url.split("/"))
//console.log(urlSplit[4])

var factoryModel = { 
  codigo : 10,
  nome : 'CERVEJARIA ÁGUAS DA SERRA', 
  ambevCode: '123',
  endereço: 'Av.Skol',
  dimensão: '10.000m²',
  pontuação: 10
}

function alimentarFactoryModel() {

  var tmp = (urlID/10)-1

  if(urlID == null) {tmp=0}

    factoryModel.nome=factoryList[tmp].nome
    factoryModel.codigo = factoryList[tmp].codigo
    factoryModel.ambevCode=factoryList[tmp].ambevCode
    factoryModel.endereço =factoryList[tmp].endereço
    factoryModel.dimensão = factoryList[tmp].dimensão
    factoryModel.pontuação = factoryList[tmp].pontuação
  
}



export default class Factory extends Component {
  render() {

    return (

     

      <div className="lobby__container">

        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">FACTORY</a>

        </nav>
        <div class="row">
          <div class="col-sm">
            <ul class="list-a">
              <li class="list-group-item bg-light">
                <Nav className="mr-auto " >


                  <NavDropdown id="basic-nav-dropdown" title="Factory Menu" >
                    <NavDropdown.Item href="/registerfactory">Register Factory</NavDropdown.Item>
                    <NavDropdown.Item href="/editfactory">Factory List</NavDropdown.Item>
                    <NavDropdown.Item href="/registerequipment">Register Equipment</NavDropdown.Item>
                    <NavDropdown.Item href="/pessoas">RE</NavDropdown.Item>
                    


                  </NavDropdown>


                </Nav>
                
              </li>
              </ul>
              <ul class="list-b">
              <li class="list-group-item">
                
                <Nav className="mr-auto">


                  <NavDropdown id="basic-nav-dropdown" title="Pratical Utility">
                    <NavDropdown.Item href="/pool">POOL</NavDropdown.Item>
                    <NavDropdown.Item href="/software">SOFTWARE</NavDropdown.Item>
                    <NavDropdown.Item href="/equipment">EQUIPMENT</NavDropdown.Item>


                  </NavDropdown>


                </Nav>



                
              </li>
              </ul>
              <ul class="list-c">
              <li class="list-group-item">
               



                <Link to="/" href="">DASHBOARD</Link>
              </li>

            </ul>
         






          </div>
          

        </div>
        
        <ul class="list-group">
          
            
            <li class="list-group-item">{alimentarFactoryModel(), "Fabrica: " + JSON.stringify(factoryModel.nome)}</li>
            <li class="list-group-item">{"Endereço:" + JSON.stringify(factoryModel.endereço)}</li>
            <li class="list-group-item">{"Areá:" + JSON.stringify(factoryModel.dimensão)}</li>
            <li class="list-group-item">{"Código AMBEV:" + JSON.stringify(factoryModel.ambevCode)}</li>

        </ul>

        <br />
        <div class="card">
          
          <img class="card-img-bottom" src="https://logodownload.org/wp-content/uploads/2020/01/ambev-logo-1.png"></img>
        </div>
      </div>

    )
  }
}
