"use client";

import React, { useState } from "react";
import DatesContainer from "./datesContainer";
import CardsContainer from "./cardsContainer";
import Link from "next/link";

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

export default function DayHandler(props: { weatherData: weatherType; placeName: string }) {
	const [day, setDay] = useState(14);

	function handleDayChange(newDay: number) {
		setDay(newDay);
	}

	return (
		<>
			<Link
				href="/"
				className="hoverGlassBackground text-white text-xl sm:text-2xl font-semibold absolute top-8 sm:top-12 md:top-16 w-fit transition-all left-1/2 -translate-x-1/2 rounded-lg py-2 px-4"
			>
				{props.placeName}
			</Link>
			<CardsContainer weatherData={props.weatherData} day={day} />
			<DatesContainer weatherData={props.weatherData} day={day} handleDayChange={handleDayChange} />
		</>
	);
}
