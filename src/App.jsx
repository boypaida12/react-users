/* eslint-disable no-unused-vars */
import { useState } from "react";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([
    {
      name: "John",
      email: "email@example.com",
      gen: 23,
      id: uuid()
    },
    {
      name: "Ama",
      email: "ama@example.com",
      gen: 23,
      id: uuid()
    },
    {
      name: "Peter",
      email: "peter@example.com",
      gen: 23,
      id: uuid()
    },
  ]);

  const handleAddUser = (userDetails) => {
    setUsers([...users, userDetails]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  }

  const handleEditUser = (id, updatedUser) => {
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <>
  
    <Container>
      <Row className="gap-2">
        <Col md={3}>
          <UsersForm userDetail={handleAddUser} />
        </Col>
        <Col className="border border-3 rounded-2 my-4">
          <Users usersjsx={users} deleteUser={handleDeleteUser} editUsers ={handleEditUser}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
