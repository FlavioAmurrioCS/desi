import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import receptionUp from "../../img/receptionUP.png";
import receptionDown from "../../img/receptionDown.png";

export default function Hero(): JSX.Element {
  return (
    <div className="hero__container">
      <div className="container__inner">
        <Fade direction="down">
          <img
            src={receptionUp}
            className="hero__prop-img"
            alt="Line art reception table"
          />
        </Fade>

        <Fade>
          <div className="title-card">
            <p className="title">
              <strong>Desi</strong> Electric
            </p>
            <hr className="title-divider"></hr>
            <p className="subtitle">DMV's Finest Electricians</p>
          </div>
        </Fade>
        <Fade direction="up">
          <img
            src={receptionDown}
            className="hero__prop-img"
            alt="Line art reception table"
          />
        </Fade>
      </div>
    </div>
  );
}
