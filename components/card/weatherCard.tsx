"use client";

import Data from "@/components/card/data";
import HourData from "@/components/card/hourData";
import MinMaxTemp from "@/components/card/minMaxTemp";
import React, { useState, useEffect } from "react";

type weatherType = {
	date: string;
	temperatureAvg: number;
	temperatureMax: number;
	temperatureMin: number;
	weathercode: number;
	windSpeed: number[];
	apparentTemp: number[];
	temps: number[];
	weathercodes: number[];
};

export default function WeatherCard(props: { weatherData: weatherType; index: number; show: number }) {
	const date: Date = new Date();
	const [displayedHour, setDisplayedHour] = useState(date.getHours());
	const [currentHour, setCurrentHour] = useState(date.getHours());
	const weatherData: weatherType = props.weatherData;
	useEffect(() => {
		const newDate: Date = new Date();

		setCurrentHour(newDate.getHours());
	}, []);

	function changeHour(hour: number) {
		setDisplayedHour(hour);
	}

	return (
		<div
			className={`aspect-5/6 w-10/12 sm:w-3/4 max-h-11/20 md:max-h-2/3 flex flex-col justify-around pb-32 gap-y-6 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 absolute top-0 left-0 bottom-0 right-0 m-auto rounded-3xl cardGlassBackground transition-all 
			${props.index > props.show ? "translate-x-full " : ""} ${props.index < props.show ? "-translate-x-full " : ""} 
			${props.index == props.show + 1 || props.index == props.show - 1 ? "scale-75 blur-sm" : ""} 
			${props.index > props.show + 1 || props.index < props.show - 1 ? "scale-0 blur-3xl" : ""}`}
		>
			<Data weather={weatherData} displayedHour={displayedHour} mainView={props.index == props.show} />

			{props.index == props.show && props.index == 14 ? (
				<HourData weather={weatherData} changeHour={changeHour} hour={currentHour} />
			) : (
				<MinMaxTemp weather={weatherData} />
			)}
		</div>
	);
}
