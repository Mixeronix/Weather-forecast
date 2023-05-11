import DetailedWeather from "./detailedWeather";
import getData from "@/components/featchData";

export default async function Home() {
	var day = 0;
	const weatherData: Array<object> = await getData();

	return (
		<>
			<DetailedWeather weatherData={weatherData[day]} />
		</>
	);
}
