import SearchBar from "@/components/searchPage/searchBar";

export default async function Home() {
	return (
		<main className="h-screen w-full bg-[url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
			<span className="absolute bottom-3/4 -translate-y-full w-full text-center text-3xl sm:text-4xl text-gray-800 font-semibold">Weather forecast</span>
			<SearchBar />
		</main>
	);
}
