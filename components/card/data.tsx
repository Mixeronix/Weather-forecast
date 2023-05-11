import React from "react";
import Image from "next/image";
import ReturnIcon from "../returnIcon";
import GetCurrentWeather from "../returnCurrentWeather";

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

export default function WeatherOfDay(props: any) {
	const weather: weatherType = props.weather;

	const { temp, weatherCode, apparentTemp, wind } = GetCurrentWeather(weather);

	return (
		<div className=" text-white top-1/2 absolute -translate-y-2/3  w-full ">
			{/* Temperature */}
			<div className="flex justify-center mt-10 font-extrabold">
				<h1 className="text-8xl">{temp}</h1>
				<span className="text-4xl font-light">°</span>
			</div>

			{/* Icon with date */}
			<div className="flex justify-center -mt-8">
				<Image width={300} height={300} alt="" src={ReturnIcon(weatherCode)} />
			</div>

			{/* Icon with date */}
			<div className="flex gap-x-8  mt-8 justify-center text-sm">
				<span className="">Feels like: {apparentTemp}°</span>
				<span className="">Wind speed: {wind} km/h</span>
			</div>
		</div>
	);
}
