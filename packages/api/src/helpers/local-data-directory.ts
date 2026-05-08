import { basename, dirname, join } from "node:path";

export function getLocalDataDirectory(): string {
	const cwd = process.cwd();
	const parentDirectory = dirname(cwd);

	if (basename(cwd) === "web" && basename(parentDirectory) === "apps") {
		return join(dirname(parentDirectory), "data");
	}

	return join(cwd, "data");
}
