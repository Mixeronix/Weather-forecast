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

export default function HourData(props: any) {
	const weather: weatherType = props.weather;
	const date: Date = new Date();
	const hours = date.getHours();

	const hourData = weather.temps.slice(hours, hours + 7);

	return (
		<div className="w-full bottom-5 absolute rounded-3xl flex">
			{hourData.map((date, index) => (
				<div className="flex-1 flex flex-col text-lg place-items-center text-white hover:bg-blue-50 hover:text-blue-500 rounded-lg transition-all ">
					<Image src={ReturnIcon(weather.weathercodes[index])} alt="" width={50} height={50} />

					<span className="mt-3">{index + hours}:00</span>
					<span className="mb-3">{date}°</span>
				</div>
			))}
		</div>
	);
}
