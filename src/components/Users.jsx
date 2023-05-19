/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function Users(props) {
  const [lgShow, setLgShow] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleClose = () => {
    setLgShow(false);
    setEditUser(null)
  };

  const handleShow = (user) => {
    setEditUser(user);
    setLgShow(true)
  };

  const handleDelete = (userId) => {
    props.deleteUser(userId);
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          {props.usersjsx.map((user, index) => (
            <Col key={index}>
              <Card style={{ width: "16rem", marginBottom: "2rem" }}>
                <Card.Body>
                  <Card.Title>User Details</Card.Title>
                  <Card.Text>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Gen: {user.gen}</p>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#007FFF" }}
                      onClick={() => handleShow(user)}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#D22B2B" }}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal size="lg" show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm editUserDetail={editUser} editUser={props.editUsers} closeModal={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Users;
