"use client";

import React, { useState } from "react";
import DatesContainer from "./datesContainer";
import CardsContainer from "./cardsContainer";

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

export default function DayHandler(props: { weatherData: weatherType }) {
	const [day, setDay] = useState(14);

	console.log(props);

	function handleDayChange(newDay: number) {
		setDay(newDay);
	}

	return (
		<>
			<CardsContainer weatherData={props.weatherData} day={day} />
			<DatesContainer weatherData={props.weatherData} day={day} handleDayChange={handleDayChange} />
		</>
	);
}
