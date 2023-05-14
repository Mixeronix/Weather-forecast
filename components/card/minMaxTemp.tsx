import React from "react";

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

function scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default function MinMaxTemp(props: { weather: weatherType }) {
	const weather: weatherType = props.weather;

	return (
		<div className="left-0 right-0 w-3/4 mx-auto absolute bottom-14 rounded-3xl flex">
			<div className="w-full gradient-background h-4 block rounded-lg left-0 absolute"></div>
			<div className={`start bg-gray-700 h-4 block left-0 rounded-s-lg absolute`} style={{ width: scale(weather.temperatureMin, -15, 35, 0, 100) + "%" }}></div>
			<div className={`end bg-gray-700 h-4 block right-0 rounded-e-lg absolute`} style={{ width: 100 - scale(weather.temperatureMax, -10, 30, 0, 100) + "% " }}></div>
		</div>
	);
}
