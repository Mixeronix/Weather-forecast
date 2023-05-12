type fetchedDataType = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: String;
	timezone_abbreviation: String;
	elevation: number;
	hourly_units: { time: String; temperature_2m: String; weathercode: String };
	hourly: { time: string[]; temperature_2m: number[]; weathercode: number[]; apparent_temperature: number[]; windspeed_10m: number[] };
	daily: {
		time: string[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		weathercode: number[];
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
				windSpeed: number[];
				apparentTemp: number[];
				temps: number[];
				weathercodes: number[];
			}
	  ]
	| [];

export default async function getData() {
	var data: weatherDataType = [];

	const res = await fetch(
		"https://api.open-meteo.com/v1/forecast?latitude=50.82&longitude=19.11&hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&past_days=14&forecast_days=16&timezone=auto"
		// { cache: "no-store" }
	);

	if (!res.ok) {
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
			temps: temps,
			windSpeed: tempData.hourly.windspeed_10m.slice(index * 24, (index + 1) * 24),
			apparentTemp: tempData.hourly.apparent_temperature.slice(index * 24, (index + 1) * 24),
			weathercodes: tempData.hourly.weathercode.slice(index * 24, (index + 1) * 24),
		};
	});

	return data;
}
