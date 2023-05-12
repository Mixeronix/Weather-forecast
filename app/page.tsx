import getData from "@/components/featchData";
import CardsContainer from "./cardsContainer";
import DatesContainer from "./datesContainer";

export default async function Home() {
	const weatherData: Array<object> = await getData();

	return (
		<main className="h-screen w-full bg-blue-950">
			<CardsContainer weatherData={weatherData} />
			<DatesContainer weatherData={weatherData} />
		</main>
	);
}
