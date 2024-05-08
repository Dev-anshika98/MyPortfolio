import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anshika</span> from <span className="purple">  India.</span>
            <br />
            Frontend developer with a flair for UI/UX design and a ReactJS aficionado !
            <br />
            Oh, and here's the kicker: I thrive in problem-solving, whether it's in a hackathon or a project sprint.
            <br />
            Oh, and did I mention? I love to participate in hackathons and also Proud winner of the prestigious INNOTECH 2023 tech fest, 
            <br />
            Beyond the confines of coding, I'm also a community builder, having organized 5+ notable events during in my college from FOSSCof'23 to Web3sangam, Say Hello to Linux, and Devspirit: A React Bootcamp.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> 
            </li> */}
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
