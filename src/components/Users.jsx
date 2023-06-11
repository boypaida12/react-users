/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slices/usersSlice";

function Users() {
  const state = useSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);
  const [editUser, setEditUser] = useState(null); //useState hook to handle prefilled information of users in modal

  const handleClose = () => {
    setLgShow(false);
  };

  const handleShow = (user) => {
    setEditUser(user); //setState takes the paramater of user because handle show is passed as an onclick function which resides in the map function to generate prefilled information for each user
    setLgShow(true);
  };

  const handleDelete = (userId) => {
    // props.deleteUser(userId);
    console.log('deleted')
    dispatch(deleteUser(userId))
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          {state.users.map((user, index) => (
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
          {/* {editUser} is passed as a prop to be used inside the editUserForm state to retrieve the current user information is which displayed as the prefilled information */}
          <EditUserForm editUserDetail={editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Users;
