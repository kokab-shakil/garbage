import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading";
import car from "../../images/car.svg";

export default function TabData() {
  return (
    <Row className={"d-flex justify-content-center"}>
      <div className={"card p-0 d-flex flex-wrap flex-row mb-3"}>
        <Col xs={12} md={6} className="p-0">
          <img src={car} className="img-fluid w-100" alt="car" />
        </Col>
        <Col xs={12} md={6}>
          <Heading
            headingClass="pt-4"
            HeadingText="Annotations"
            para
            paraText="We understand that pixel-perfect annotations are the foundation of an efficiently trained AI-model. We have an in-house team of 30+ annotators. We make sure that the resources working on your data are well trained. With the help of our AI tools and algorithms, we provide extremely precise data with up to 99% accuracy."
          />
        </Col>
      </div>
      <CustomButton
        btnText="Request a Demo"
        btnClasses="text-white"
        btnColor="green"
      />
    </Row>
  );
}
