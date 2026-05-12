export type errorT = {
  code: number,
  response: string,
};

export type backendErrorT = {
	error: string;
};


export function getError(data: unknown): string {

	if (data === null) {
		return "Unknown error";
	}

	if (typeof data === "string")
		return data;

	if (typeof data === "object") {
		const obj = data as Record<string, unknown>;
		if (Object.keys(obj).length === 1) {
			const key = Object.keys(obj)[0];
			console.debug(obj[key]);
			return String(obj[key]);
		}
		if ("error" in data)
			return String(data.error);

		if ("detail" in data)
			return String(data.detail);

		return JSON.stringify(data);
	}

	return "Unknown error";
}