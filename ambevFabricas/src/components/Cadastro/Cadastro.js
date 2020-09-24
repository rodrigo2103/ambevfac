import Swal from 'sweetalert2';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import history from '../../history';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CadastroService from './helper/CadastroService.js';

import './Cadastro.sass';
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
    title: 'Parabéns!',
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
  const { name, email, username, password } = values;
  const payload = { name, email, username, password };
  cadastroService.createAccount(payload).then(({ data }) => {
    fireAlert(data);
  });
}

function FormCadastro() {
  return (
    
    <div>
      <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand">USER REGISTER</a>
          
        </nav>
    <div className="register-container">
      
      <Formik
        validationSchema={SignupSchema}
        onSubmit={(values) => createAccount(values)}
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
          tel: '',
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
          <Card style={{ width: '100vw' }}>
            <Card.Body>
              
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                      <Form.Control
                        type="text"
                        placeholder="Name"
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
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik02">
                      <Form.Control
                        type="text"
                        placeholder="LastName"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        isInvalid={!!errors.lastname}
                        isValid={touched.lastname && !errors.lastname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastname}
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          isValid={touched.email && !errors.username}

                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormiknumber">
                      <Form.Control
                        type="tel"
                        placeholder="Phone"
                        name="Phone"
                        value={values.confirmPhone}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPhone}
                      />
                      
                    </Form.Group>
                    </Form.Row>
                    
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Post</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                      <option>Manager</option>
                      <option>Machine worker</option>
                      <option>Programmer</option>
                      <option>Supervisor</option>
                      <option>Industrial director</option>
                    </select>
                  </div>
                  <br />
                  <Button class="button" disabled={isSubmitting} type="submit" >
                    <span>Criar Cadastro</span>
                  </Button>
                </Form>
              </Card.Body>
            </Card>
        )}
      </Formik>
    </div>
    </div>
  );
}
export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.cadastroService = new CadastroService();
  }

  render() {
    return(
      
      <div className="register">
        <div></div>
        <FormCadastro/>

      </div>

    );
  }
}
