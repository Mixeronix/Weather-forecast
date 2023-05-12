"use client";

import React, { useState } from "react";
import WeatherCard from "./weatherCard";

type weatherType = [
	{
		date: string;
		temperatureAvg: number;
		temperatureMax: number;
		temperatureMin: number;
		weathercode: number;
		windSpeed: number[];
		apparentTemp: number[];
		temps: number[];
		weathercodes: number[];
	}
];

export default function CardsContainer(props: any) {
	const [day, setDay] = useState(0);
	const weatherData: weatherType = props.weatherData;

	function handleNext() {
		const current = day;
		if (current < weatherData.length - 1) {
			const next = current + 1;
			setDay(next);
		}
	}
	function handlePrev() {
		const current = day;
		if (current > 0) {
			const next = current - 1;
			setDay(next);
		}
	}

	return (
		<>
			{weatherData.map((data, index) => (
				<WeatherCard weatherData={data} index={index} show={day} key={index} />
			))}

			<button onClick={handleNext} className="text-white text-lg mr-10">
				next
			</button>
			<button onClick={handlePrev} className="text-white text-lg">
				prev
			</button>
		</>
	);
}
