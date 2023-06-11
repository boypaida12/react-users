/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/usersSlice";
import { v4 as uuid } from "uuid";

function UsersForm() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState({
    name: "",
    email: "",
    gen: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUsers({
      ...users,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setUsers({
      name: "",
      email: "",
      gen: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users)
    // userDetail(users);
    dispatch(addUser(users));
    handleReset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="name"
            value={users.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={users.email}
            onChange={handleChange}
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
            value={users.gen}
            onChange={handleChange}
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

export default UsersForm;
