import {RenderRule} from "./RenderRule";

export interface LanguageProfile {
    id: string;
    displayName: string;
    rootFolders: string[];
    fileRules: Record<string, RenderRule>;
}
