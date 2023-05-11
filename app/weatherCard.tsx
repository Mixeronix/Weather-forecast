"use client";

import Data from "@/components/card/data";
import HourData from "@/components/card/hourData";
import React, { useState, useEffect } from "react";

export default function WeatherCard(props: any) {
	const [displayedHour, setDisplayedHour] = useState(0);

	useEffect(() => {
		const date: Date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();

		if (minutes > 30) {
			setDisplayedHour(hours + 1);
		} else setDisplayedHour(hours);
	}, []);

	function changeHour(hour: number) {
		setDisplayedHour(hour);
	}

	return (
		<div className="aspect-9/16 h-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-blue-500">
			<Data weather={props.weatherData} place="Czestochowa, Polska" hour={displayedHour} />
			<HourData weather={props.weatherData} changeHour={changeHour} />
		</div>
	);
}
