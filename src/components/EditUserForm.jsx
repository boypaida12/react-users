/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../slices/usersSlice";


function EditUserForm({ editUserDetail, closeModal }) {
  const dispatch = useDispatch();

  const [editedUser, setEditedUser] = useState({
    id: editUserDetail.id,
    name: editUserDetail.name,
    email: editUserDetail.email,
    gen: editUserDetail.gen,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // editUser(editedUserid, editedUser);
    dispatch(editUser(editedUser));
    closeModal();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
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
            value={editedUser.name}
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
            value={editedUser.email}
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
            value={editedUser.gen}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
}

export default EditUserForm;
