//import './LandingPage.css'; Does not currently exist
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import logo from "../logo.svg";
// import { useRouter } from 'next-routes'

import {
  ListGroup,
  FormControl,
  InputGroup,
  Form,
  Button,
  Modal,
  Nav,
} from "react-bootstrap";
// import axios from "axios";

export default class LandingPage extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       show: false,
  //       newUser: false,
  //       username: "",
  //       password: "",
  //       loggedIn: false,
  //     };

  //     this.onChangeUsername = this.onChangeUsername.bind(this);
  //     this.onChangePassword = this.onChangePassword.bind(this);
  //     this.login = this.login.bind(this);
  //     this.handleModal = this.handleModal.bind(this);
  //   }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}
