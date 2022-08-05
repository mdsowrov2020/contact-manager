import React from "react";
import { Col } from "react-bootstrap";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import "./contactList.css";

const ContactList = ({ con }) => {
  const { name, email, phone } = con;
  return (
    <>
      <Col md={3}>
        <div className="list-content">
          <p>{name}</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="list-content">
          <p>{email}</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="list-content">
          <p>{phone}</p>
        </div>
      </Col>
      <Col md={2}>
        <div className="action-btns">
          <button className="action-btn">
            <FaUserEdit />
          </button>
          <button className="action-btn danger">
            <FaTrashAlt />
          </button>
        </div>
      </Col>
    </>
  );
};

export default ContactList;
