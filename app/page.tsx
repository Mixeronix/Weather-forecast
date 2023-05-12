import getData from "@/components/featchData";
import CardsContainer from "./cardsContainer";

export default async function Home() {
	const weatherData: Array<object> = await getData();

	return (
		<main className="h-screen w-full bg-blue-950 overflow-hidden">
			<CardsContainer weatherData={weatherData} />
		</main>
	);
}
