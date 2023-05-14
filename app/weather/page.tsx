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

export default async function Home({ searchParams }: any) {
	const weatherData: weatherType = await getData(searchParams.longitude, searchParams.latitude);

	console.log(searchParams);

	return (
		<main className="h-screen w-full bg-blue-950">
			<DayHandler weatherData={weatherData} placeName={searchParams.name} />
		</main>
	);
}
