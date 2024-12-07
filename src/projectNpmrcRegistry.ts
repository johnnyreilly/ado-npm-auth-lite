import type { ParsedProjectNpmrc } from "./types.js";

import { makeFromRegistry } from "./projectNpmrcShared.js";
import { fallbackLogger, type Logger } from "./shared/cli/logger.js";

/**
 * Parse the registry parameter to acquire necessary info
 */
export function projectNpmrcRegistry({
	registry,
	logger = fallbackLogger,
}: {
	registry: string;
	logger?: Logger;
}): ParsedProjectNpmrc {
	logger.info(`Parsing from registry: ${registry}`);

	return makeFromRegistry({ registry, logger });
}
