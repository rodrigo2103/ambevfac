import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from "./Map";

import './style.css';

const data = [
  {
    name: "CERVEJARIA ÁGUAS DA SERRA",
    address: [-5.570557, -50.325882],
    codigo:10
  },
  {
    name: "CERVEJARIA PÉ DE SERRA",
    address: [-40.570558, -65.325882],
    codigo:20
  },
  {
    name: "CERVEJARIA GOLIAS",
    address: [-25.570558, -65.325882],
    codigo:30
  },
  {
    name: "CERVEJARIA RODRIGUES",
    address: [-20.570558, -50.325882],
    codigo:40
  },
  {
    name: "CERVEJARIA GUIMARAES",
    address: [-25.570558, -55.325882],
    codigo:50
  },
  {
    name: "CERVEJARIA SILVA",
    address: [-15.570558, -59.325882],
    codigo:60
  },
  {
    name: "CERVEJARIA DO LUCIO",
    address: [-5.570558, -70.325882],
    codigo:70
  }
];

const App = () => (
  
  <div style={{ width: "100%", height: "600px" }}>
    <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">MAP</a>
          
        </nav>
    <Map data={data} center={{ lat: -23.4273, lng: -51.9375 }} zoom={4} />
    
  </div>
);

render( <App />, document.getElementById('root'));

export default App;