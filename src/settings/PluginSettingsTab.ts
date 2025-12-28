import { PluginSettings } from "../models/PluginSettings";
import { DEFAULT_PROFILES } from "../profiles/defaultProfiles";

export const DEFAULT_SETTINGS: PluginSettings = {
    targetRootFolder: "Quellcode",
    analysisMode: false,
    profiles: DEFAULT_PROFILES
};
