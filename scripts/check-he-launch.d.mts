// Types for check-he-launch.mjs, so TypeScript callers (its tests) are checked.
export type LaunchFile = { path: string; text: string };
export type LaunchBlocker = { path: string; line: number; reason: string };

export function findLaunchBlockers(files: LaunchFile[]): LaunchBlocker[];
export function collect(root: string): LaunchFile[];
