import React, { useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import "./CreateContactForm.css";

const CreateContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const addContact = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("Input fields cannot be empty");
    }
    addContactHandler(contact);
    setContact({ name: "", email: "", phone: "" });
  };
  return (
    <div className="">
      <div className="create-contact-form">
        <Form onSubmit={addContact}>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              className="custom-input"
              type="text"
              value={contact.name}
              onChange={handleInput}
              name="name"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              className="custom-input"
              type="email"
              value={contact.email}
              onChange={handleInput}
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              className="custom-input"
              type="text"
              value={contact.phone}
              onChange={handleInput}
              name="phone"
              placeholder="Enter number"
            />
          </Form.Group>

          <Button className="submit-btn" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateContact;
