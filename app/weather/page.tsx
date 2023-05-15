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

	return (
		<main className="h-screen w-full bg-[url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
			<DayHandler weatherData={weatherData} placeName={searchParams.name} />
		</main>
	);
}
