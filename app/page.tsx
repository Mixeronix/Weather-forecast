import getData from "@/components/featchData";
import DayHandler from "./dayHandler";

export default async function Home() {
	const weatherData: Array<object> = await getData();

	return (
		<main className="h-screen w-full bg-blue-950">
			<DayHandler weatherData={weatherData} />
		</main>
	);
}
