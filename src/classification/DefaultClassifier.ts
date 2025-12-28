import { Classifier } from "./Classifier";
import { ClassificationResult } from "./ClassificationResult";
import { FileDescriptor } from "../models/FileDescriptor";
import { LanguageProfile } from "../models/LanguageProfile";
import { RenderRule } from "../models/RenderRule";

export class DefaultClassifier implements Classifier {

    constructor(
        private readonly profiles: LanguageProfile[]
    ) {}

    classify(files: FileDescriptor[]): ClassificationResult[] {
        return files.map(file => this.classifyFile(file));
    }

    private classifyFile(file: FileDescriptor): ClassificationResult {
        const profile = this.resolveProfile(file);
        const rule = this.resolveRule(profile, file);

        return {
            file,
            profileId: profile?.id ?? "generic",
            category: profile?.displayName ?? "Weitere Dateien",
            rule
        };
    }

    /**
     * Ein Profil passt, wenn die Datei unter einem der Root-Folder liegt
     */
    private resolveProfile(file: FileDescriptor): LanguageProfile | undefined {
        return this.profiles.find(profile =>
            profile.rootFolders.some(root =>
                file.relativePath === root ||
                file.relativePath.startsWith(root + "/")
            )
        );
    }

    /**
     * Regelauflösung:
     * 1. Profil-Regel nach Extension
     * 2. Fallback: Wikilink (ALLE Files müssen inkludiert werden)
     */
    private resolveRule(
        profile: LanguageProfile | undefined,
        file: FileDescriptor
    ): RenderRule {
        if (profile) {
            const rule = profile.fileRules[file.extension];
            if (rule) {
                return rule;
            }
        }

        // Globaler Fallback (Graph-Sicherheit)
        return {
        mode: "link"
        };
    }
}
