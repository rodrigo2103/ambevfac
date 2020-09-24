import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from "./Map";

import imgSolucao1 from '../../img/solucao1.gif'
import imgSolucao2 from '../../img/solucao2.gif'
import imgSolucao3 from '../../img/solucao3.gif'
import imgSolucao4 from '../../img/solucao4.gif'

import Header from '../Header/';

import './style.sass';

const data = [
  {
    name: "CERVEJARIA ÁGUAS DA SERRA",
    address: [-5.570557, -50.325882]
  },
  {
    name: "CERVEJARIA PÉ DE SERRA",
    address: [-40.570558, -65.325882]
  },
  {
    name: "CERVEJARIA GOLIAS",
    address: [-25.570558, -65.325882]
  },
  {
    name: "CERVEJARIA RODRIGUES",
    address: [-20.570558, -50.325882]
  },
  {
    name: "CERVEJARIA GUIMARAES",
    address: [-25.570558, -55.325882]
  },
  {
    name: "CERVEJARIA SILVA",
    address: [-15.570558, -59.325882]
  },
  {
    name: "CERVEJARIA DO LUCIO",
    address: [-5.570558, -70.325882]
  }
];

const App = () => (

  <div class="page">

    

    
    <div class="banner-conhece-nossa-empresa">
      <div class="rectangle-black"><div class="rectangle-blue"></div></div>

      <div class="banner-conhece-nossa-empresa-title"><h3> Já conhece nossa Empresa?</h3></ div>
    </div>
    <div class="section-fabricas">
      <div class="container-map">
        <Map data={data} center={{ lat: -23.4273, lng: -51.9375 }} zoom={1} />
      </div>
      <div class="container-fabricas">
        <div class="introducao-fabricas">
          <p>Espalhadas por todo o mundo contamos com cerca de 1327 fabricas produzindo as mais variadas bebidas com toda a qualidade que você já conhece.</p>
        </div>
        <div>
          Aqui ficará um formulario.Quando a pessoa selecionar uma fabrica no mapa aparecerá os principais dados da fabrica selecionada
        </div>
      </div>

    </div>
    
    <div class="outra-section"></div>


  </div>
);

render(<App />, document.getElementById('root'));

export default App;