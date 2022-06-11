import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CarouselWThumbnail from "./CarouselWThumbnail";

type CustomizedModalProps = {
  background: string;
  amountFunded?: string;
  buttonImage?: string;
  images: string[];
  buttonTitle?: string;
  modelTitle: string;
  modelSubtitle: string;
  requestedBy?: string;
  location: string;
  details: string;
};
export default function CustomizedModal({
  background,
  amountFunded,
  buttonImage,
  images,
  buttonTitle,
  modelTitle,
  modelSubtitle,
  requestedBy,
  location,
  details,
}: CustomizedModalProps) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const buttonStlye = {
    backgroundImage: `url(${background})`,
  };
  const companyIcon = {
    backgroundImage: `url(${background})`,
  };

  let amountFundedElement: JSX.Element = (
    <div>
      <h4>Amount Funded</h4>
      <p>{amountFunded}</p>
    </div>
  );

  return (
    <div>
      <Button
        className={buttonImage !== undefined ? "fundedWorkIcon" : "project-btn"}
        style={buttonImage !== undefined ? companyIcon : buttonStlye}
        onClick={toggle}
      >
        <div className="overlay">
          <p>{buttonTitle}</p>
        </div>
      </Button>
      {/* <Modal className="project-modal" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3>{modelTitle}</h3>
          <p>{modelSubtitle}</p>
        </ModalHeader>
        <ModalBody>
          <CarouselWThumbnail data={images} />

          <div className="content">
            <h4>Requested By</h4>
            <p>{requestedBy}</p>
            <h4>Location</h4>
            <p>{location}</p>
            {amountFunded !== undefined ? amountFundedElement : ""}
            <h4>Project Details</h4>
            <p>{details}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
}
