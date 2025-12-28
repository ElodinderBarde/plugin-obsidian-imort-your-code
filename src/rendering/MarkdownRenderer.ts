import { ClassificationResult } from "../classification/ClassificationResult";

export interface MarkdownRenderer {
    render(results: ClassificationResult[]): string[];
}
