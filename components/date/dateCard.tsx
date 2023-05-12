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
			onClick={() => props.handleDayChange(props.index)}
			className={`w-28 sm:w-24 h-12 sm:h-24 mb-1 sm:mb-3 lg:mb-4 bg-gradient-to-b align-middle items-center transition-all duration-500 rounded-lg flex flex-row sm:flex-col justify-center absolute top-0 left-0 bottom-0 right-0 m-auto 
            ${props.index == props.show ? "from-blue-200/[0.5] to-blue-200/[0.3]" : "hover:from-blue-200/[0.25] hover:to-blue-200/[0.1]"}`}
			style={{ transform: `translate(${105 * (props.index - props.show)}%)`, opacity: `${100 - Math.abs(props.index - props.show) * 20}%` }}
		>
			<Image width={50} height={50} alt="Weather icon" className="scale-50 sm:scale-90 -mx-2 sm:mx-auto" src={ReturnIcon(weatherData.weathercode, props.hours)} />
			<span className="text-white text-center text-md sm:text-lg font-medium">{props.index == 14 ? "Today" : day + " " + monthNames[month]}</span>
		</div>
	);
}
