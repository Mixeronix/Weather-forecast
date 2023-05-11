import TemparatureGraph from "@/components/detailed_weather/temparatureGraph";
import WeatherOfDay from "@/components/detailed_weather/weatherOfDay";
import React from "react";

export default function DetailedWeather(props: any) {
	return (
		<div className="w-5/12 ms-auto h-screen bg-detailedWeather bg-cover relative ">
			<TemparatureGraph />
			<WeatherOfDay weather={props.weatherData} place="Czestochowa, Polska" />
		</div>
	);
}
