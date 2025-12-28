import { App, Editor, Notice } from "obsidian";
import { FileCollector } from "../traversal/FileCollector";
import { Classifier } from "../classification/Classifier";
import { MarkdownRenderer } from "../rendering/MarkdownRenderer";

export class IndexCommand {

    constructor(
        private readonly app: App,
        private readonly collector: FileCollector,
        private readonly classifier: Classifier,
        private readonly renderer: MarkdownRenderer
    ) {}

    async execute(): Promise<void> {
        const editor = this.getActiveEditor();
        if (!editor) {
            new Notice("Keine aktive Datei.");
            return;
        }

        // 1. Collect (async!)
        const files = await this.collector.collect();

        // 2. Classify
        const classified = this.classifier.classify(files);

        // 3. Render
        const rendered = this.renderer.render(classified);

        // 4. Output
        editor.setValue(rendered.join("\n"));
    }


    private getActiveEditor(): Editor | null {
        return this.app.workspace.activeEditor?.editor ?? null;
    }
}
