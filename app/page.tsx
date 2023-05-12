import WeatherCard from "./weatherCard";
import getData from "@/components/featchData";

export default async function Home() {
	var day = 0;

	const weatherData: Array<object> = await getData();
	weatherData.reverse();

	return (
		<main className="h-screen w-full bg-blue-950">
			{weatherData.map((data, index) => (
				<WeatherCard weatherData={data} index={index} show={day} key={index} />
			))}
		</main>
	);
}
