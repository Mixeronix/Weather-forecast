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

export default function GetWeatherAtTime(weather: weatherType, hour: number): { temp: number; apparentTemp: number; wind: number; weathercode: number } {
	return {
		temp: weather.temps[hour],
		apparentTemp: weather.apparentTemp[hour],
		wind: weather.windSpeed[hour],
		weathercode: weather.weathercodes[hour],
	};
}
