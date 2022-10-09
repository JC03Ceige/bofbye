import React from "react";
import { Col, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import Bye from "../Assets/Images/bye.JPG";
import Garing from "../Assets/Images/garingbos.JPG";
import GaringCU from "../Assets/Images/garingbosCU.JPG";
import Stoor from "../Assets/Images/huisiesonsopnder.JPG";
import NuweKaste from "../Assets/Images/nuwekiste.JPG";
import Skape from "../Assets/Images/skapeSonsOpkoms.JPG";

const gallery = [];

const Gallery = () => {
  return (
    <div className="hive" id="hive">
      <h1>The Hive</h1>
      <Row xs={1} md={2} className="g-4 mt-4">
        {/*{Array.from({ length: 4 }).map((_, idx) => (*/}
        <Col>
          <Card>
            <Card.Img variant="top" src={Bye} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={GaringCU} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Stoor} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Garing} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={NuweKaste} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Skape} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/*}))}*/}
      </Row>
    </div>
  );
};

export default Gallery;
