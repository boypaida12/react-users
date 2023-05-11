/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Users(props) {
  return (
    <>
      <Container className="mt-4">
        <Row>
          {props.usersjsx.map((user, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                <Card.Body>
                  <Card.Title>User Details</Card.Title>
                  <Card.Text>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Gen: {user.gen}</p>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#007FFF" }}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#D22B2B" }}
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
    </>
  );
}

export default Users;
