import getData from "@/components/featchData";
import DayHandler from "./dayHandler";

type weatherType = [
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
];

export default async function Home() {
	const weatherData: weatherType = await getData();

	return (
		<main className="h-screen w-full bg-blue-950">
			<DayHandler weatherData={weatherData} />
		</main>
	);
}
