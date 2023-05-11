export default function ReturnIcon(code: number): string {
	let prefix: string = "";

	const hour: Date = new Date();
	if (code < 3) {
		if (hour.getHours() < 6 && hour.getHours() > 0) prefix = "n-";
		else prefix = "d-";
	}

	return `/icons/${prefix != "" ? prefix + code : code}.svg`;
}
