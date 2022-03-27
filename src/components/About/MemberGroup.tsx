import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import items from "./MembersData";
import placeholder from "../../img/person_placeholder.svg";

export default function MemberGroup() {
  return (
    <div className="team-container">
      <div className="header">
        <h2>Meet Our Leadership</h2>
      </div>
      <div className="member-row">
        {items.map((member, i) => (
          <Link
            className="inner_col"
            key={i}
            to={{
              pathname: `/members/${member.memberName}`,
            }}
          >
            <Card className="member-title-card scale-up">
              <div className="cardimage-container">
                <CardImg
                  width="100%"
                  src={member.src || placeholder}
                  alt={member.memberName}
                />
              </div>
              <CardBody>
                <CardTitle>{member.memberName}</CardTitle>
                <CardSubtitle>{member.jobPosition}</CardSubtitle>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
