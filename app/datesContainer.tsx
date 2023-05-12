"use client";

import DateCard from "@/components/date/dateCard";
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

export default function DatesContainer(props: any) {
	const [day, setDay] = useState(14);
	const date: Date = new Date();

	const weatherData: weatherType = props.weatherData;

	function handleDayChange(newDay: number) {
		setDay(newDay);
	}

	return (
		<section className="bottom-0 absolute w-screen h-fit">
			{weatherData.map((data, index) => (
				<DateCard weatherData={data} index={index} show={day} key={index} hour={date.getHours()} handleDayChange={handleDayChange} />
			))}
		</section>
	);
}
