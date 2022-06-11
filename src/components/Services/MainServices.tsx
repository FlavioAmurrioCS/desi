import { Button, Card, CardTitle, CardText } from "reactstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import titleImg from "../../img/what-we-do.png";

export default function MainServices() {
  return (
    <div className="main-services-container mb-5">
      <div className="inner__row">
        <img
          src={titleImg}
          className="services-img d-none d-lg-block"
          alt="What we do"
        />
        <Card className="row__card rounded-0" body>
          <CardTitle>
            <h1>DMV's Most Reliable Electricians</h1>
          </CardTitle>
          <CardText>
            <p className="pb-2">
              As a commercially focused enterprise, DESI Electric specializes in
              the following three areas:
            </p>
            <ul className="ps-4">
              <li>Electrical Build Outs</li>
              <li>High Voltage Installs</li>
              <li>Heavy Panel Upgrades</li>
            </ul>
            <br />
            <p>
              For a complete and comprehensive list of our abilities, see below:
            </p>
          </CardText>
        </Card>
      </div>
    </div>
  );
}
