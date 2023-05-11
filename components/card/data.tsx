import React from "react";
import Image from "next/image";
import ReturnIcon from "../returnIcon";
import GetWeatherAtTime from "../returnCurrentWeather";

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

type displayedWeather = { temp: number; apparentTemp: number; wind: number; weatherCode: number };

export default function WeatherOfDay(props: any) {
	const weather: weatherType = props.weather;

	const weatherToDisplay: displayedWeather = GetWeatherAtTime(weather, props.displayedHour);

	return (
		<div className=" text-white top-1/2 absolute -translate-y-2/3  w-full ">
			{/* Temperature */}
			<div className="flex justify-center mt-10 font-extrabold">
				<h1 className="text-8xl">{weatherToDisplay.temp}</h1>
				<span className="text-4xl font-light">°</span>
			</div>

			{/* Icon with date */}
			<div className="flex justify-center -mt-8">
				<Image width={300} height={300} alt="" src={ReturnIcon(weatherToDisplay.weatherCode, props.displayedHour)} />
			</div>

			{/* Icon with date */}
			<div className="flex gap-x-8 mt-8 justify-center text-md">
				<span className="">Feels like: {weatherToDisplay.apparentTemp}°</span>
				<span className="">Wind speed: {weatherToDisplay.wind} km/h</span>
			</div>
		</div>
	);
}
