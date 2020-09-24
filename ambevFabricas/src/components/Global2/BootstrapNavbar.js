import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Header,Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { MdRemove } from 'react-icons/md';
import { removeToken } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';
import { logout } from '../../services/auth';
import { BsAspectRatioFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import styled from "styled-components";

class BootstrapNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  logout = () => {
    //this.props.removeToken();
    //logout();
    history.push('/');
  }
  
  render() {
    const Toggle = styled(NavDropdown)`
     :after {
         display: none;
     }
    `;
    const { isAuthenticated } = this.props;
    return (
      
      <div>
        <div className="row">
          <div className="col-md-12">
            
            <Router>
              
              <Navbar  bg="secondary" variant="dark" expand="lg" sticky="top">
              
              <Navbar.Brand href="#home">AMBEV world</Navbar.Brand>  
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                  <Nav className="mr-auto">
          
                  
                    <NavDropdown id="basic-nav-dropdown">
                      <NavDropdown.Item href="/">LOGIN</NavDropdown.Item>
                      <NavDropdown.Item href="cadastro">REGISTER</NavDropdown.Item>
                      <NavDropdown.Item href="factory">FACTORY</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="loc">MAP</NavDropdown.Item>
                      <NavDropdown.Item onClick={this.logout}>LOG OUT</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                 
                  
                  <Form inline>
                    <FormControl type="text" placeholder="Search" id="myInput" className="mr-sm-2" />
                    <Button variant="outline-light" >Search</Button>
                  </Form>
                </Navbar.Collapse>
                
              </Navbar>
              <br />
             </Router>             
           </div>          
          </div>
        </div>
        )  
    }
}

export default BootstrapNavbar;