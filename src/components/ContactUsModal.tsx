import { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import FormContainer from "./EmailForm/FormContainer";
import constants from "./constants";

function ContactUsModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="contact-btn" onClick={toggle}>
        Contact Us
      </Button>
      <Modal className="project-modal" isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className="address-container">
            <span>
              <h3>Get in Touch</h3>
              <a href={`tel:+${constants.COMPANY_PHONE}`}>
                {" "}
                <FaPhone /> {constants.COMPANY_PHONE}
              </a>
              <br />
              <a
                href={`mailto:${constants.COMPANY_EMAIL}?subject=ClientQuestion`}
              >
                <FaEnvelope /> {constants.COMPANY_EMAIL}
              </a>
            </span>
          </div>
          <div className="form">
            <FormContainer />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ContactUsModal;
