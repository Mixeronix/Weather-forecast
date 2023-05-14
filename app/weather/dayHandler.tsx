"use client";

import React, { useState } from "react";
import DatesContainer from "./datesContainer";
import CardsContainer from "./cardsContainer";

export default function DayHandler(props: any) {
	const [day, setDay] = useState(14);

	function handleDayChange(newDay: number) {
		setDay(newDay);
	}

	return (
		<>
			<CardsContainer weatherData={props.weatherData} day={day} handleDayChange={handleDayChange} />
			<DatesContainer weatherData={props.weatherData} day={day} handleDayChange={handleDayChange} />
		</>
	);
}
