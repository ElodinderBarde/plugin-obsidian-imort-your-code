import { MarkdownRenderer } from "./MarkdownRenderer";
import { ClassificationResult } from "../classification/ClassificationResult";

export class DefaultMarkdownRenderer implements MarkdownRenderer {

    render(results: ClassificationResult[]): string[] {
        const lines: string[] = [];

        const grouped = this.groupByCategory(results);

        for (const [category, entries] of grouped.entries()) {
            lines.push(`## ${category}`);
            lines.push("");

            for (const entry of entries) {
                lines.push(this.renderEntry(entry));
            }

            lines.push(""); // Abstand zwischen Sections
        }

        return lines;
    }

    private groupByCategory(
        results: ClassificationResult[]
    ): Map<string, ClassificationResult[]> {

        const map = new Map<string, ClassificationResult[]>();

        for (const result of results) {
            if (!map.has(result.category)) {
                map.set(result.category, []);
            }
            map.get(result.category)!.push(result);
        }

        return map;
    }

    private renderEntry(entry: ClassificationResult): string {
        const path = entry.file.relativePath;

        // Basis: Wikilink (Pflicht)
        return `- [[${path}]]`;
    }
}
