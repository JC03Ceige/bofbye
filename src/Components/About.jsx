import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <div className="about" id="about">
      <Container fluid>
        <h1>Our Story</h1>
        <Row>
          <Col className="col-10 p-3 story">
            <div className="px-5">
              <p>
                This initiative was instigated when a colony of bees made their
                home under our dining room floor. WHAT A STINGER! We started
                looking for beekeepers in the area, found none, but did find
                that others are in the same sticky situation. The only solution
                was to exterminate the bees, which, of course, is not an option.
                We took up the mantle of beekeeper, and so, The Bakovensfontein
                Bees Project took flight. This, when taking into account the
                amount of hives that need to be saved and the amount of time we
                have to do it in, is very costly and very labor intensive.
              </p>
              <p>
                As we are creating this fundraiser campaign, there are already
                12 hives (that we know of) where the landlords have decided to
                exterminate them, and the braai talk is abuzz with talks of yet
                more people looking to get rid of their bees. Our goal is to get
                at least 10 empty beehives, to start off with, before the end of
                September (it's a real tight squeeze). Then we also have to get
                the necessary equipment with which to extract the bees and move
                them into their new hives.
              </p>
              <p>
                We were blessed enough to get two phenomenal mentors with over
                16 years of bee-saving and beekeeping experience between them,
                and more and more beekeeping old hands are sharing their wisdom
                and knowledge as they hear about our cause.
              </p>
              <p>
                <em>
                  * At Bakovensfontein, we strive to provide sustainable food
                  sources with a strong focus on how our products can add to a
                  cleaner, greener future. Our Bee Project is one such
                  initiative. Our main goal is to deliver top tier honey and
                  beeswax products, and assisting local farmers with
                  pollination, while saving the local bee population from
                  extermination.
                </em>
              </p>
            </div>
          </Col>
          <Col className="col-2">
            <div className="ggfwidget">
              <iframe
                className="iframe"
                title="gogetfunding"
                src="https://gogetfunding.com/embed-widget2?campaignid=7666428&frame_type=t3"
                scrolling="no"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
