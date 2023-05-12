import getData from "@/components/featchData";
import CardsContainer from "./cardsContainer";

export default async function Home() {
	var latitude = 0;
	var longitude = 0;

	navigator.geolocation.getCurrentPosition(({ coords }) => {
		latitude = coords.latitude;
		longitude = coords.longitude;
	});
	const weatherData: Array<object> = await getData();

	return (
		<main className="h-screen w-full bg-blue-950">
			<CardsContainer weatherData={weatherData} />
		</main>
	);
}
