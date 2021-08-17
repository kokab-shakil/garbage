import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import udemy from "../../../images/CarouselImages/udemy.svg";
import InfiniteCarousel from "react-leaf-carousel";
import { CustomCarousel } from "../../../components/CustomCarousel/CustomCarousel";
import car2 from "../../../images/car2.png";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Manychat from "../../../images/Manychat.svg";
import facebook from "../../../images/facebook.svg";
// import { LogoCarousel } from "../../../components/ItemCarousel/LogoCarousel";
import TestCarousel from "../../../components/ItemCarousel/TestCarousel";
import { LogoCarousel } from "./newcomponents/LogoCarousel";

export const HappyClient = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12}>
				<Heading
					headingClass="d-flex justify-content-center"
					HeadingText={[
						"Our",
						<span className="position-relative">
							<span className="px-2 underlined">Happy</span>
						</span>,
						"Clients",
					]}
					para
					paraText="We are trusted by leading machine learning teams for the training of their AI-models"
					paraClass="text-center"
				/>
			</Col>
			<Col xs={12} className="py-3">
				{/* <LogoCarousel /> */}
				<LogoCarousel />
			</Col>
			<Col xs={12} md={12} lg={7}>
				<img src={car2} alt="" style={{ width: "68vw" }}></img>
			</Col>
			<Col xs={12} md={12} lg={5}>
				<Card
					style={{
						boxShadow: "0px 3px 6px #00000029",
					}}
				>
					<Card.Body>
						<Card.Title>
							<img src={Manychat} alt="" />
						</Card.Title>
						<Card.Text className={"border-bottom pb-3"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis d
							minim veniam, quis
						</Card.Text>
						<Card.Link href="#">
							<img src={facebook} alt="" />
							<h1 className="text-xs">Larry Page</h1>
						</Card.Link>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};