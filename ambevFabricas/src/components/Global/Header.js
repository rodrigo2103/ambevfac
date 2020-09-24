import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import { removeToken } from '../../actions';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import { MdRemove } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Navbar, Nav, NavDropdown, Brand } from 'react-bootstrap'
import './Header.sass'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  logout = () => {
    this.props.removeToken();
    logout();
    history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="header">
        <nav class="navbar navbar-light bg-light">
                  <a class="navbar-brand" href="#">
                    <img src="../logo_undo.png"   alt=""></img>
                  </a>
                </nav>
        <div className="header__first-quarter">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <div className="header__logout">

            <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item href="/">LOGIN</NavDropdown.Item>
              <NavDropdown.Item href="cadastro">CADASTRO</NavDropdown.Item>
              <NavDropdown.Item href="factory">FÁBRICA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="loc">MAPA</NavDropdown.Item>
              <NavDropdown.Item onClick={this.logout}>LOG OUT</NavDropdown.Item>
            </NavDropdown>
          </div>
            
        </div>
        <div className="header__second-quarter">
         <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="header__third-quarter">

          

        {!isAuthenticated &&
          <div className="header__logout" onClick={this.logout}>
            <MdRemove></MdRemove>
          </div>
        }
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  isAuthenticated: store.setToken.token
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)((Header));
