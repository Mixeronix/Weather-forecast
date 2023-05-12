"use client";

import WeatherCard from "@/components/card/weatherCard";
import React, { useState } from "react";

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
	const [day, setDay] = useState(14);
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
		<div>
			<button onClick={handlePrev} className="text-white text-lg absolute left-0 bottom-5 md:top-1/2 md:-translate-y-1/4">
				prev
			</button>
			{weatherData.map((data, index) => (
				<WeatherCard weatherData={data} index={index} show={day} key={index} />
			))}

			<button onClick={handleNext} className="text-white text-lg absolute bottom-5 right-0 md:top-1/2 md:-translate-y-1/4">
				next
			</button>
		</div>
	);
}
