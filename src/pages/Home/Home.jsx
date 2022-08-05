import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList/ContactList";
import CreateContact from "../../components/Forms/createContactForm/CreateContact";
import "./home.css";

const Home = (props) => {
  const CONTACT_KEY = "contactList";
  const [showCreateContact, setCreateContact] = useState(false);
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(CONTACT_KEY)) || []
  );
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    window.localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <section className="home">
        <Container>
          <Row className="justify-content-center">
            <Col md={7}>
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

                {showCreateContact && (
                  <div className="mt-4">
                    <CreateContact addContactHandler={addContactHandler} />
                  </div>
                )}

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
