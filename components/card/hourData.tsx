"use client";

import React, { useEffect, useState } from "react";
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
	const [selected, setSelected] = useState(0);
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(false);

	function handleCount() {
		if (window.innerWidth > 2200) {
			setCount(15);
		} else if (window.innerWidth > 2000) {
			setCount(12);
		} else if (window.innerWidth > 1600) {
			setCount(10);
		} else if (window.innerWidth > 1200) {
			setCount(7);
		} else if (window.innerWidth > 800) {
			setCount(6);
		} else if (window.innerWidth > 600) {
			setCount(5);
		} else {
			setCount(4);
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleCount);
		handleCount();
		setVisible(true);
		return () => window.removeEventListener("resize", handleCount);
	}, []);

	const hourData = weather.temps.slice(hour, hour + count);

	return (
		<div className={`w-full bottom-0 absolute rounded-3xl flex transition-all duration-500 ${visible ? "opacity-100 blur-0" : "opacity-0 blur-3xl"}`}>
			{hourData.map((date, index) => (
				<div
					className={`flex-1 flex flex-col text-md place-items-center text-white transition-all bg-gradient-to-t pt-2
                    ${index == 0 ? "rounded-bl-3xl" : ""} ${index == hourData.length - 1 ? "rounded-br-3xl" : ""} 
                    ${selected == index ? "from-blue-200/[0.6] to-blue-200/[0.2]" : "hover:from-blue-200/[0.3] hover:to-blue-200/[0]"}
                    `}
					onClick={() => {
						setSelected(index);
						props.changeHour(index + hour);
					}}
					key={index}
				>
					<Image src={ReturnIcon(weather.weathercodes[index + hour], index + hour)} alt="" width={35} height={35} />

					<span className="mt-3 ">{index + hour >= 12 ? `${index + hour - 12} pm` : index + hour} </span>
					<span className="mb-3 ">{date}°</span>
				</div>
			))}
		</div>
	);
}
