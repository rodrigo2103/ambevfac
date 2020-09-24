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

import CadastroService from './helper/CadastroService.js';

import './Deletefactory.sass';
import { AvShuffle } from 'material-ui/svg-icons';
const cadastroService = new CadastroService();

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Mínimo de 3 caracteres!")
    .max(30, "Máximo de 30 caracteres!")
    .required("Campo obrigatório!"),
  username: Yup.string()
    .min(4, "Mínimo de 4 caracteres!")
    .max(16, "Máximo de 16 caracteres!")
    .required("Campo obrigatório!"),
    password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Campo obrigatório!"),
    codver: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Campo obrigatório!"),
  confirmPassword: Yup
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
        <a class="navbar-brand">Delete Factory</a>

      </nav>
      <div className="register-container">

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
                <Card.Body> 
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                     <div class="text-box">    
                      <Form.Group as={Col} md="6" controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          placeholder="Digite o nome da fábrica"
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
                      <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Control
                          type="password"
                          placeholder="Código AMBEV"
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
                      <div class="text-box">  
                      <Form.Group as={Col} md="6" controlId="validationFormik05">
                        <Form.Control
                          type="text"
                          placeholder="Codigo de verificacao"
                          name="codver"
                          value={values.codver}
                          onChange={handleChange}
                          isInvalid={!!errors.codver}
                          isValid={touched.codver && !errors.codver}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.area}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </div>
                    </Form.Row>
                    <div class="submit-button">
                    <Button disabled={isSubmitting} type="submit">
                      <span>Excluir Fabrica</span>
                    </Button>
                    </div>
                  </Form>
                  <div class="link-tmp">
                  <Link to="/factory" href="factory">FACTORY</Link>
                  </div>
                </Card.Body>
              </div>
              </Card>
            )}
        </Formik>
      </div>
    </div>
  );
}


export default class Renamefactory extends Component {

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
