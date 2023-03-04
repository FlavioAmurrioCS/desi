import { Link } from "react-router-dom";
import constants from "../constants";

export default function Header() {
  return (
    <div className="header-container">
      <h1>Past Work Projects</h1>
      <p className="subtitle line-break project-container">
        {constants.OUR_PARTNERS}
      </p>
      <div className="pretend-footer">
        <p>
          Learn more about <Link to="/services">Our Services</Link>{" "}
        </p>
      </div>
    </div>
  );
}
