import Data from "@/components/card/data";
import HourData from "@/components/card/hourData";
import React from "react";

export default function WeatherCard(props: any) {
	return (
		<div className="aspect-9/16 h-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-blue-500">
			<Data weather={props.weatherData} place="Czestochowa, Polska" />
			<HourData weather={props.weatherData} />
		</div>
	);
}
