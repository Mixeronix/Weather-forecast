import React from "react";
import Image from "next/image";
import ReturnIcon from "../returnIcon";

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

export default function DateCard(props: any) {
	const weatherData: weatherType = props.weatherData;

	const todaysDate = new Date(weatherData.date);
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = todaysDate.getMonth();
	const day = todaysDate.getDate();

	return (
		<div
			className="w-24 h-24 mb-4 bg-gradient-to-b hover:from-blue-200/[0.25] hover:to-blue-200/[0.1] rounded-lg flex flex-col justify-center absolute top-0 left-0 bottom-0 right-0 m-auto"
			style={{ transform: `translate(${100 * (props.index - props.show)}%)`, opacity: `${100 - Math.abs(props.index - props.show) * 20}%` }}
		>
			<Image
				width={50}
				height={50}
				alt="Weather icon"
				className="scale-50 mx-auto -mt-12 md:my-0 -mb-10 sm:scale-75 md:scale-90 lg:scale-100"
				src={ReturnIcon(weatherData.weathercode, props.hours)}
			/>
			<span className="text-white text-center text-xl font-bold">{day + " " + monthNames[month]}</span>
		</div>
	);
}
