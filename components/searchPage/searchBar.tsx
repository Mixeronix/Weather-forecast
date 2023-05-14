"use client";

import React, { useState } from "react";

type dataType = {
	results: [
		{
			id: number;
			name: string;
			latitude: number;
			longitude: number;
			feature_code: string;
			country_code: string;
			country_id: number;
			country: string;
		}
	];
};

export default function SearchBar() {
	const [search, setSearch] = useState("");

	async function handleTextChange(text: string) {
		setSearch(text);

		const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=10&language=en&format=json`, { cache: "no-store" });
		const data: dataType = await res.json();
	}

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-3/4">
			<input
				value={search}
				onChange={(e) => handleTextChange(e.target.value)}
				className="bg-blue-100/80 border-2 text-gray-900 focus:outline-none m-auto border-white px-7 py-5 w-full rounded-lg text-xl"
			/>
		</div>
	);
}
