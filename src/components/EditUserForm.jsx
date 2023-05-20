/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

export class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.editUserDetail.id,
      name: props.editUserDetail.name,
      email: props.editUserDetail.email,
      gen: props.editUserDetail.gen,
    };

    this.handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.editUser(this.state.id, this.state);
      this.props.closeModal();
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

export default EditUserForm;
