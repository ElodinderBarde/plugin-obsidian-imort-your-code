import { LanguageProfile } from "../models/LanguageProfile";

export function mergeProfiles(
    base: LanguageProfile[],
    overrides: LanguageProfile[]
): LanguageProfile[] {

    const result = new Map<string, LanguageProfile>();

    for (const profile of base) {
        result.set(profile.id, { ...profile });
    }

    for (const override of overrides) {
        const existing = result.get(override.id);

        if (!existing) {
            result.set(override.id, override);
            continue;
        }

        result.set(override.id, {
            ...existing,
            ...override,
            rootFolders: override.rootFolders ?? existing.rootFolders,
            fileRules: {
                ...existing.fileRules,
                ...override.fileRules
            }
        });
    }

    return Array.from(result.values());
}
