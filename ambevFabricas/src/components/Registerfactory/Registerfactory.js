import Swal from 'sweetalert2';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import history from '../../history';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
//import registerfactoryservice from './services/registerfactory-service';

import CadastroService from './helper/CadastroService.js';

import './Registerfactory.sass';
const cadastroService = new CadastroService();

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Mínimo de 5 caracteres!")
    .max(50, "Máximo de 50 caracteres!")
    .required("Campo obrigatório!"),
  area: Yup.string()
    .min(4, "Mínimo de 4 caracteres!")
    .max(16, "Máximo de 16 caracteres!")
    .required("Campo obrigatório!"),
    location: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Campo obrigatório!"),
    complement: Yup.string()
    .max(16, "Too Long!")
    .required("Campo obrigatório!"),
  password: Yup
    .string()
    .required("Campo obrigatório!")
    .test('passwords-match', 'As senhas devem ser iguais', function(value) {
      return this.parent.password === value;
    }),
  email: Yup.string()
    .email("Formato Inválido")
    .required("Campo obrigatório!")
});

function fireAlert(value) {
  Swal.fire({
    title: 'Fábrica registrada!',
    type: 'success',
    text: value.data,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.value) {
      history.push('/');
    }
  });
}

function createAccount(values) {
  const { name, area, location, password } = values;
  const payload = { name, area, location, password };
  cadastroService.createAccount(payload).then(({ data }) => {
    fireAlert(data);
  });
}

function FormCadastro() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary" style={{ width: '100vw'}}> 
        <a class="navbar-brand">Register Factory</a>

      </nav>
      <div class="register-container">
      <Formik
          validationSchema={SignupSchema}
          onSubmit={(values) => createAccount(values)}
          initialValues={{
            name: '',
            area: '',
            location: '',
            password: '',
            confirmPassword: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            isSubmitting,
            values,
            touched,
            errors,
          }) => (
              <Card style={{ border: '0px' }}>

              <div class="register-area">
                <Card.Body >
                  
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                    <div class="text-box">  
                      <Form.Group  as={Col} md="6" controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          placeholder="Insira o nome da fábrica"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          isValid={touched.name && !errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </div>  
                      <div class="text-box">  
                      <Form.Group as={Col} md="6" controlId="validationFormik02">
                        <Form.Control
                          type="text"
                          placeholder="Insira a área da fabrica"
                          name="area"
                          value={values.area}
                          onChange={handleChange}
                          isInvalid={!!errors.area}
                          isValid={touched.area && !errors.area}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.area}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </div>
                       
                      </Form.Row>
                      <Form.Row>
                      <div class="text-box"> 
                      <Form.Group as={Col} md="6" controlId="validationFormik03">
                        <Form.Control
                          type="text"
                          placeholder="Insira o endereço da fabrica"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                          isInvalid={!!errors.location}
                          isValid={touched.location && !errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </div>
                      <div class="complement"> 
                      <Form.Group as={Col} md="6" controlId="validationFormik05">
                        <Form.Control
                          type="text"
                          placeholder="Complemento"
                          name="complement"
                          value={values.complement}
                          onChange={handleChange}
                          isInvalid={!!errors.complement}
                          isValid={touched.complement && !errors.complement}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.complement}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </div>
                      <div class="text-box"> 
                      <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Control
                          type="password"
                          placeholder="Insira o Código AMBEV da fabrica"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    
                      </div>
                    </Form.Row> 

                    <div class="excluir-button">
                      <Button disabled={isSubmitting} type="submit">
                       <span>Registrar Fabrica</span>
                      </Button>
                      <Link to="/factory" href="factory">FACTORY</Link>
                    </div>            

                  </Form>  
                </Card.Body>

                  </div>

              </Card>
            )}
        </Formik>
      </div>
    </div>
  );
}
export default class Registerfactory extends Component {

  constructor(props) {
    super(props);
    this.cadastroService = new CadastroService();
  }

  render() {
    return(
      <div className="register">
        <FormCadastro/>
      </div>
    );
  }
}
