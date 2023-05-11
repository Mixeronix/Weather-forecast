import WeatherCard from "./weatherCard";
import getData from "@/components/featchData";

export default async function Home() {
	var day = 0;
	const weatherData: Array<object> = await getData();

	return (
		<main className="h-screen w-full bg-blue-950">
			<WeatherCard weatherData={weatherData[day]} />
		</main>
	);
}
