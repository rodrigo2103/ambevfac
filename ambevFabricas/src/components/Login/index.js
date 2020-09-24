import Swal from 'sweetalert2';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../../actions';
import history from '../../history';
import { login } from '../../services/auth';
import { Card, Spinner, Button, FormControl } from 'react-bootstrap';
import LoginService from './helper/LoginService';
import './style.sass';


import logo from "../../img/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: '',
      password: '',
    };
    this.loginService = new LoginService();
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  setLoading = (value) => {
    this.setState({ loading: value });
  }

  handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.realizeLogin();
    }
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fireAlert = (value) => {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: value,

    });
  }

  realizeLogin = () => {
    const { username, password } = this.state;
    const payload = { username, password };
    if (this.state.loading === true) return;
    if (!this.state.username || !this.state.password) return;
    this.setLoading(true);
    this.loginService.login(payload).then(({ data }) => {
      this.setLoading(false);
      this.props.setToken(data.token);
      login(data.token);
      history.push('/lobby');
    }).catch(({ response }) => {
      this.fireAlert(response.data.message);
      this.setLoading(false);
    });
  }

  render() {
    return (
      <div>
        <div class="back-blue"></div>
        <div class="container-section">
          <div class="container-login"></div>
        </div>
        
      </div>
    )
  }
}
const mapStateToProps = store => ({
  token: store.setToken.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
