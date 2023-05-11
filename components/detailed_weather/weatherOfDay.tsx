import React from "react";
import Image from "next/image";
import ReturnIcon from "../returnIcon";

type weatherType = {
	date: string;
	temperatureAvg: number;
	temperatureMax: number;
	temperatureMin: number;
	weathercode: number;
	windspeed: number;
	temps: [number];
	uv: number;
	weathercodes: [number];
};

export default function WeatherOfDay(props: any) {
	const weather: weatherType = props.weather;
	const todaysDate = new Date(weather.date);
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const daysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	const month = todaysDate.getMonth();
	const date = todaysDate.getDate();
	const day = todaysDate.getDay();

	return (
		<div className=" mx-auto w-fit pt-2 sm:pt-4 lg:pt-8 xl:pt-12  text-white">
			{/* Icon with date */}
			<div className="flex mb-11 space-x-3 justify-center">
				<Image width={90} height={90} alt="" src={ReturnIcon(weather.weathercode)} />
				<div className="flex flex-col justify-center ">
					<span className="text-3xl">Today</span>
					<span className="text-xl">{daysNames[day] + ", " + date + " " + monthNames[month]}</span>
				</div>
			</div>

			{/* Temperature */}
			<div className="flex justify-center">
				<h1 className="text-9xl  ">{weather.temperatureAvg}</h1>
				<span className="text-4xl  font-light">°C</span>
			</div>

			{/* Place */}
			<div className="mt-12 text-center">{props.place}</div>

			{/* Wind and temperature */}
			<div className="flex mt-8  gap-x-6">
				<span>UV Index {weather.uv}</span>
				&#x2022;
				<span>Wind speed {weather.windspeed} km/h</span>
			</div>
		</div>
	);
}
