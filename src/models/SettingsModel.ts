import {RenderRule} from "./RenderRule";


export interface ExtensionConfig{
    extension: string;
    rule: RenderRule;
}

export interface LanguageConfig{
    language: string;
    extensions: ExtensionConfig[];
}

export interface PluginSettings{
    targetRootFolder: string;
    languages: LanguageConfig[];
    analysisMode: boolean;
}

export interface SettingsModel {
    /** Zielordner relativ zum Vault */
    targetFolder: string;

    /** Analyse- oder Produktivmodus */
    dryRun: boolean;

    /** Regeln zur Darstellung pro Dateityp */
    renderRules: RenderRule[];
}