import Swal from 'sweetalert2';
import React, { useState, useEffect, Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import history from '../../history';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {Row, Table } from 'react-bootstrap';
import ModalRemocao from './modal-remocao';

import factoryForm from  './services/form';
import factoryServices from './services/Editfactory-services';


import CadastroService from './helper/CadastroService.js';

import './Editfactory.sass';

export default function ListaFabrica() {

  const [fabricas, setFabricas] = useState([]);
  const [fabricaRemover, setFabricaRemover] = useState(null);

  const listaFabricas = () => {
      factoryServices
          .getFabricas()
          .then(fabricas => setFabricas(fabricas));
  };
  
  const removerFabrica = (fabrica) => {
      factoryServices.removeFabrica(fabrica.codigo)
          .then(() => {
              setFabricaRemover(null);
              listaFabricas();
          });

  };

    useEffect(() => {
      listaFabricas();
  }, []);

  return (<>
 
        <Row>
            <Col><h1>Fabricas</h1></Col>
            <Col md={{ span: 2, order: 'last' }}>  
            <Link to={'/registerfactory'}><Button>Cadastrar Fabrica</Button></Link>
            </Col>
            
        </Row>
    
      <Row>
          <Col>
              <Table responsive >
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Nome</th>
                          <th>ambevCode</th>
                          <th>Endereço</th>
                          <th>Dimensão</th>
                          <th>Pontuação</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      {fabricas.map(x => (
                          <tr>
                              <td>{x.codigo}</td>
                              <td>{x.nome}</td>
                              <td>{x.ambevCode}</td>
                              <td>{x.endereço}</td>
                              <td>{x.dimensão}</td>
                              <td>{x.pontuação}</td>
                              <td>
                                  <Link to={`/alterfactory/${x.codigo}`}>
                                    <Button style={{position:"relative", left :'100px'}}>Editar</Button>
                                  </Link>

                                  <Button variant="danger" onClick={() => setFabricaRemover(x)}  style={{position:"relative", left :'100px'}}>
                                    Remover
                                  </Button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </Table>
          </Col>
      </Row>

      <ModalRemocao
          fabrica={fabricaRemover}
          onCancel={() => setFabricaRemover(null)}
          onConfirm={() => removerFabrica(fabricaRemover)}
      />
  </>)
  
}
