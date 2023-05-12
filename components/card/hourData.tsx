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
	const weather: weatherType = props.weather;
	const hour = props.hour;
	const [selected, setSelected] = useState(hour);

	const hourData = weather.temps.slice(hour, hour + 6);

	return (
		<div className="w-full bottom-0 absolute rounded-3xl flex">
			{hourData.map((date, index) => (
				<div
					className={`flex-1 flex flex-col text-lg place-items-center text-white transition-all bg-gradient-to-t pt-2
                    ${index == 0 ? "rounded-bl-3xl" : ""} ${index == hourData.length - 1 ? "rounded-br-3xl" : ""} 
                    ${selected == index ? "from-blue-200/[0.6] to-blue-200/[0.2]" : "hover:from-blue-200/[0.3] hover:to-blue-200/[0]"}
                    `}
					onClick={() => {
						setSelected(index);
						props.changeHour(index + hour);
					}}
					key={index}
				>
					<Image src={ReturnIcon(weather.weathercodes[index + hour], index + hour)} alt="" width={50} height={50} />

					<span className="mt-3">{index + hour}:00</span>
					<span className="mb-3">{date}°</span>
				</div>
			))}
		</div>
	);
}
