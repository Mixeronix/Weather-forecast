import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CountryTile(props: {
	countryData: {
		id: number;
		name: string;
		latitude: number;
		longitude: number;
		feature_code: string;
		country_code: string;
		country_id: number;
		country: string;
	};
}) {
	return (
		<Link
			href={{
				pathname: "/weather",
				query: { latitude: props.countryData.latitude, longitude: props.countryData.longitude, name: props.countryData.name + ", " + props.countryData.country },
			}}
			className="flex gap-x-5 hover:bg-blue-100/60 w-full bg-blue-100/80 border-2 mb-0.5  m-auto border-white px-7 py-3 rounded-2xl text-xl"
		>
			<Image
				src={`https://hatscripts.github.io/circle-flags/flags/${props.countryData.country_code.toLowerCase()}.svg`}
				alt={"Flag of country"}
				width={30}
				height={30}
			/>
			<span className="text-gray-900 font-medium">
				{props.countryData.name}, {props.countryData.country}
			</span>
		</Link>
	);
}
