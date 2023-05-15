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
			className="items-center flex gap-x-5 hover:backdrop-blur-md hover:bg-white/60 transition-all duration-500 w-full glassBackground mb-1 m-auto px-5 sm:px-7 py-3 sm:py-5 rounded-xl text-md sm:text-xl"
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
