import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// import TabData from "../../../../components/CustomTabs/TabData";

// icons
import Typeofservice from "../../../images/typeofservice.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./ServiceServicesCarousel.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const ServiceServicesCarousel = () => {
	const [selected, setSelected] = useState(1);
	const [child, setChild] = useState(Typeofservice);
	// const [childSelected, setChildSelected] = useState(1);
	// const [option, selectedOption] = useState(TabData);

	// const handleClick = (e, selected) => {
	// 	const optionValue = childData.find((element) => element.value === e);
	// 	selectedOption(optionValue.component);
	// 	setChildSelected(selected);
	// 	console.log(childSelected);
	// };
	const handleClick = (e) => {
		setSelected(e + 1);
		console.log(e);
		const item = data.find((a) => a.id === e + 1);
		setChild(item.component);
		console.log(child);
	};
	return (
		<>
			<Swiper
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				freeMode={true}
				className={"ServiceServicesCarousel mt-2"}
				slidesPerView={"auto"}
			>
				{data.map((item, key) => {
					return (
						<SwiperSlide>
							<button
								className={`service-button ${
									selected === item.id ? "selected" : ""
								}`}
								onClick={() => handleClick(key)}
							>
								{item.name}
							</button>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Container>
				<Row>
					<Col xs={12}>
						<img src={child} className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</>
	);
};

const data = [
	{
		id: 1,
		name: "Annotation",
		component: Typeofservice,
	},
	{
		id: 2,
		name: "Data Genenration",
		component: Typeofservice,
	},
	{
		id: 3,
		name: "Ai as a Service",
		component: Typeofservice,
	},
];
