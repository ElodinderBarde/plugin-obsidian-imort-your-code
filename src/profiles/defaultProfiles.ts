import { LanguageProfile } from "../models/LanguageProfile";

export const DEFAULT_PROFILES: LanguageProfile[] = [
    {
        id: "source",
        displayName: "Quellcode",
        rootFolders: ["src", "source", "code"],
        fileRules: {
            ts: { mode: "embed", embedType: "ts" },
            js: { mode: "embed", embedType: "js" },
            cpp: { mode: "embed", embedType: "cpp" },
            h: { mode: "embed", embedType: "cpp" },
            java: { mode: "embed", embedType: "java" }
        }
    },
    {
        id: "docs",
        displayName: "Dokumentation",
        rootFolders: ["docs"],
        fileRules: {
            md: { mode: "link" }
        }
    }
];
