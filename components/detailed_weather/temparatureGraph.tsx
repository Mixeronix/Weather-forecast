import React from "react";
import Image from "next/image";
import weatherImage from "@/public/icons/71.svg";

export default function TemparatureGraph() {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-y-full  -translate-x-1/2 text-white">
			{/* Icon with date */}
			<div className="flex mb-11 space-x-3 justify-center">
				<Image width={75} height={75} alt="" src={weatherImage} />
				<div className="flex flex-col justify-center">
					<span className="text-3xl">Today</span>
					<span className="text-xl">Sat, 3 Aug</span>
				</div>
			</div>

			{/* Temperature */}
			<div className="flex justify-center">
				<h1 className="text-9xl  ">29</h1>
				<span className="text-4xl  font-light">°C</span>
			</div>

			{/* Wind and temperature */}
			<div className="flex mt-14 w-fit gap-x-6">
				<span>Feels like 32 °C</span>
				<span>Wind speed 10 km/h</span>
			</div>
		</div>
	);
}
