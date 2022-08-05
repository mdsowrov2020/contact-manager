import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList/ContactList";
import CreateContact from "../../components/Forms/createContactForm/CreateContact";
import "./home.css";

const Home = (props) => {
  const CONTACT_KEY = "contacts";
  const [showCreateContact, setCreateContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const allContacts = JSON.parse(localStorage.getItem(CONTACT_KEY));
    setContacts(allContacts);
    console.log(allContacts);
  }, []);

  return (
    <>
      {showCreateContact && (
        <CreateContact addContactHandler={addContactHandler} />
      )}

      <section className="home">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="contacts">
                <div className="contact-top">
                  <p>Contact Management System</p>
                  <button
                    className="custom-btn"
                    onClick={() => setCreateContact(!showCreateContact)}
                  >
                    {!showCreateContact ? "create new contact" : "close"}
                  </button>
                </div>

                {contacts.map((con, i) => {
                  return (
                    <Row
                      key={i}
                      className="contact-list mt-4 justify-content-center"
                    >
                      <ContactList con={con} />
                    </Row>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
