"use client";

import Data from "@/components/card/data";
import HourData from "@/components/card/hourData";
import MinMaxTemp from "@/components/card/minMaxTemp";
import React, { useState, useEffect } from "react";

export default function WeatherCard(props: any) {
	const date: Date = new Date();
	const [displayedHour, setDisplayedHour] = useState(date.getHours());
	const [currentHour, setCurrentHour] = useState(date.getHours());
	const weatherData: object = props.weatherData;
	useEffect(() => {
		const newDate: Date = new Date();

		setCurrentHour(newDate.getHours());
	}, []);

	function changeHour(hour: number) {
		setDisplayedHour(hour);
	}

	return (
		<div
			className={`aspect-9/16 h-3/4 absolute top-0 left-0 bottom-0 right-0 m-auto inset-auto rounded-3xl bg-blue-500 transition-all 
			${props.index > props.show ? "translate-x-full " : ""} ${props.index < props.show ? "-translate-x-full " : ""} 
			${props.index == props.show + 1 || props.index == props.show - 1 ? "scale-50 blur-sm" : ""} 
			${props.index > props.show + 1 || props.index < props.show - 1 ? "scale-0 blur-3xl" : ""}`}
		>
			<Data weather={weatherData} place="Czestochowa, Polska" displayedHour={displayedHour} mainView={props.index == props.show} />

			{props.index == props.show && props.index == 0 ? (
				<HourData weather={weatherData} changeHour={changeHour} hour={currentHour} />
			) : (
				<MinMaxTemp weather={weatherData} />
			)}
		</div>
	);
}
