import { FileDescriptor } from "../models/FileDescriptor";
import { RenderRule } from "../models/RenderRule";

export interface ClassificationResult {
    file: FileDescriptor;

    /** interne Referenz (z. B. "cpp", "node", "generic") */
    profileId: string;

    /** Anzeige-Section im Output */
    category: string;

    /** Darstellungsregel */
    rule: RenderRule;
}
