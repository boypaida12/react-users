/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

export class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };

    this.handleChange = (e) => {
      e.preventDefault();
      this.setState({
        id: uuid(),
        [e.target.name]: e.target.value,
      });
    };

    this.handleReset = () => {
      this.setState({
        name: "",
        email: "",
        gen: "",
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state)
      this.props.userDetail(this.state);
      this.handleReset();
    };
  }
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Gen"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default UsersForm;
