/* eslint-disable no-unused-vars */
import { useState } from "react";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([
    {
      name: "John",
      email: "email@example.com",
      gen: 23,
    },
    {
      name: "Ama",
      email: "ama@example.com",
      gen: 23,
    },
    {
      name: "Peter",
      email: "peter@example.com",
      gen: 23,
    },
  ]);

  const handleAddUser = (userDetails) => {
    setUsers([...users, userDetails]);
  };

  return (
    <>
  
    <Container>
      <Row className="gap-2">
        <Col md={3}>
          <UsersForm userDetail={handleAddUser} />
        </Col>
        <Col className="border border-3 rounded-2 my-4">
          <Users usersjsx={users} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
