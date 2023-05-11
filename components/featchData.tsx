import { type } from "os";

type fetchedDataType = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: String;
	timezone_abbreviation: String;
	elevation: number;
	hourly_units: { time: String; temperature_2m: String; weathercode: String };
	hourly: { time: string[]; temperature_2m: number[]; weathercode: number[] };
	daily: {
		time: string[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		windspeed_10m_max: number[];
		weathercode: number[];
		uv_index_clear_sky_max: number[];
	};
};

type weatherDataType =
	| [
			{
				date: string;
				temperatureAvg: number;
				temperatureMax: number;
				temperatureMin: number;
				weathercode: number;
				windspeed: number;
				uv: number;
				temps: number[];
				weathercodes: number[];
			}
	  ]
	| [];

export default async function getData() {
	var data: weatherDataType = [];

	const res = await fetch(
		"https://api.open-meteo.com/v1/forecast?latitude=50.82&longitude=19.11&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,windspeed_10m_max&current_weather=true&forecast_days=14&timezone=auto",
		{ cache: "no-store" }
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const tempData: fetchedDataType = await res.json();
	tempData.daily.time.map((d: string, index: number) => {
		const temps: Array<number> = tempData.hourly.temperature_2m.slice(index * 24, (index + 1) * 24);

		data[index] = {
			date: d,
			temperatureAvg: Math.round(temps.reduce((partialSum, a) => partialSum + a, 0) / 24),
			temperatureMax: tempData.daily.temperature_2m_max[index],
			temperatureMin: tempData.daily.temperature_2m_min[index],
			weathercode: tempData.daily.weathercode[index],
			windspeed: tempData.daily.windspeed_10m_max[index],
			uv: tempData.daily.uv_index_clear_sky_max[index],
			temps: temps,
			weathercodes: tempData.hourly.weathercode.slice(index * 24, (index + 1) * 24),
		};
	});

	return data;
}
