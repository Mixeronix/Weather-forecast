"use client";

import React, { useState } from "react";
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
	const [selected, setSelected] = useState(0);

	const weather: weatherType = props.weather;
	const date: Date = new Date();
	const hours = date.getHours();

	const hourData = weather.temps.slice(hours, hours + 7);

	return (
		<div className="w-full bottom-0 absolute rounded-3xl flex">
			{hourData.map((date, index) => (
				<div
					className={`flex-1 flex flex-col text-lg place-items-center text-white transition-all bg-gradient-to-t pt-2
                    ${index == 0 ? "rounded-bl-3xl" : ""} ${index == 6 ? "rounded-br-3xl" : ""} 
                    ${selected == index ? "from-blue-200/[0.6] to-blue-200/[0.2]" : "hover:from-blue-200/[0.3] hover:to-blue-200/[0]"}
                    `}
					onClick={() => {
						setSelected(index);
						props.changeHour(index + hours);
					}}
				>
					<Image src={ReturnIcon(weather.weathercodes[index])} alt="" width={50} height={50} />

					<span className="mt-3">{index + hours}:00</span>
					<span className="mb-3">{date}°</span>
				</div>
			))}
		</div>
	);
}
