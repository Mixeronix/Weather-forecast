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

export default function GetCurrentWeather(weather: weatherType): { temp: number; apparentTemp: number; wind: number; weatherCode: number } {
	const date: Date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	let i;
	if (minutes > 30) {
		i = hours + 1;
	} else i = hours;

	return { temp: weather.temps[i], apparentTemp: weather.apparentTemp[i], wind: weather.windSpeed[i], weatherCode: weather.weathercodes[i] };
}
