export default function ReturnIcon(code: number): string {
	let prefix: string = "";

	const date: Date = new Date();
	const hour = date.getHours();

	if (code < 3) {
		if (hour < 6 && hour > 0) prefix = "n-";
		else prefix = "d-";
	}

	return `/icons/${prefix != "" ? prefix + code : code}.svg`;
}
