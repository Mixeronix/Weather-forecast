export default function GetCurrentWeather(temps: Array<number>): number {
	const date: Date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	if (minutes > 30) {
		return temps[hours + 1];
	} else return temps[hours];
}
