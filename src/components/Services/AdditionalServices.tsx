import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import { serviceData } from "./ServiceData";
import ContactUsModal from "../ContactUsModal";
import workTogether from "../../img/handshake.png";

export default function AdditionalServices() {
  return (
    <div className="add-services-container">
      <div className="service-card">
        <Card>
          <CardHeader>
            <h1>A Comprehensive View of Our Services</h1>
            <p className="subtitle">Commercial Business Only</p>
          </CardHeader>
          <CardBody>
            <div className="inner__row">
              {serviceData.map((category, i) => (
                <div className="inner__col" key={i}>
                  <h5>{category.categoryTitle}</h5>
                  <hr />
                  <ul>
                    {category.services.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <ContactUsModal />
          </CardFooter>
        </Card>
      </div>
      <div className="inner__row d-none d-lg-block">
        <img src={workTogether} alt="Two men shaking hangs" />
      </div>
    </div>
  );
}
