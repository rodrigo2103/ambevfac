import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,

} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Header, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { MdRemove } from 'react-icons/md';
import { removeToken } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';
import { logout } from '../../services/auth';
import { BsAspectRatioFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import styled from "styled-components";

class Bar extends React.Component {
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

                            
                            
                            <br />
                            <Navbar bg="dark" variant="dark">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src="/logo.svg"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{' '}
      React Bootstrap
    </Navbar.Brand>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar;