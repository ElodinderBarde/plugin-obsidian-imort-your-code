import { App, TFile } from "obsidian";
import { FileCollector } from "./FileCollector";
import { FileDescriptor } from "../models/FileDescriptor";

export class DefaultFileCollector implements FileCollector {

    constructor(private readonly app: App) {}

    async collect(): Promise<FileDescriptor[]> {
        const files = this.app.vault.getFiles();
        return files.map(file => this.toDescriptor(file));
    }

    private toDescriptor(file: TFile): FileDescriptor {
        return {
            absolutePath: file.path,
            relativePath: file.path,
            name: file.basename,
            extension: file.extension
        };
    }
}
