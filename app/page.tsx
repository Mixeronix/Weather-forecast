import SearchBar from "@/components/searchPage/searchBar";

export default async function Home() {
	return (
		<main className="h-screen w-full bg-gray-200">
			<span className="absolute bottom-3/4 -translate-y-full w-full text-center text-3xl sm:text-5xl text-gray-800 font-semibold">Weather forecast</span>
			<SearchBar />
		</main>
	);
}
