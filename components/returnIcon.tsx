export default function ReturnIcon(code: number, hour: number): string {
	let prefix: string = "";

	if (code < 3) {
		if (hour < 6 && hour > 0) prefix = "n-";
		else prefix = "d-";
	}

	return `/icons/${prefix != "" ? prefix + code : code}.svg`;
}
