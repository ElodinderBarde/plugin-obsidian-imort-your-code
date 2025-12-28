import { LanguageProfile } from "./LanguageProfile";

export interface PluginSettings {

    targetRootFolder: string;

    analysisMode: boolean;

    profiles: LanguageProfile[];
}
