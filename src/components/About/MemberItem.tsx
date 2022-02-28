import { Button, Card, CardBody } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
// import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function MemberItem() {
  // const { id } = useParams();

  return (
    <div className="member-row individual-view">
      <div className="inner_col">
        <Card className="member-title-card">
          <div className="cardimage-container">
            {/* <CardImg
                top
                width="100%"
                src={member.src}
                alt="Image Not Available"
              /> */}
          </div>
          <CardBody>
            {/* <CardTitle>{member.memberName}</CardTitle>
              <CardSubtitle>{member.jobPosition}</CardSubtitle> */}
            <Link to="/about">
              <Button>
                <FaArrowLeft /> Go Back
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      <div className="inner_col">{/* <p>{member.details}</p> */}</div>
      <div className="inner_col">
        {/* <p>{member.detailsCont}</p>
          <h6>Contact {member.memberName}</h6>
          <p>
            <FaEnvelope />
            {"   "} <a href={`mailto:${member.email}`}> {member.email} </a>
          </p>
          <p>
            <FaPhone /> {"    "}{" "}
            <a href={`tel:+${member.phone}`}> {member.phone}</a>
          </p> */}
      </div>
    </div>
  );
}
