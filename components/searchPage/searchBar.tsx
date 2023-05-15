"use client";

import React, { useState } from "react";
import CountryTile from "./countryTile";

type dataType =
	| {
			id: number;
			name: string;
			latitude: number;
			longitude: number;
			feature_code: string;
			country_code: string;
			country_id: number;
			country: string;
	  }[]
	| [];

export default function SearchContainer() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState<dataType>([]);

	async function handleTextChange(text: string) {
		setSearch(text);

		const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=7&language=en&format=json`, { cache: "no-store" });
		const tempData = await res.json();
		if (tempData.results != undefined) setData(tempData.results);
		else setData([]);
	}

	return (
		<div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 translate-y-full flex flex-col w-4/5 sm:w-3/4">
			<input
				value={search}
				placeholder="Search for the place"
				onChange={(e) => handleTextChange(e.target.value)}
				className="glassBackground mb-1 text-gray-900 placeholder:text-gray-500 focus:outline-none m-auto px-5 sm:px-7 py-3 sm:py-5 w-full rounded-lg text-lg sm:text-xl"
			/>
			{data.length != 0 ? data.map((result, index) => <CountryTile countryData={result} key={index} />) : <></>}
		</div>
	);
}
