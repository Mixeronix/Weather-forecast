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
	const weatherData: weatherType = props.weatherData;

	return (
		<div>
			{weatherData.map((data, index) => (
				<WeatherCard weatherData={data} index={index} show={props.day} key={index} />
			))}
		</div>
	);
}
