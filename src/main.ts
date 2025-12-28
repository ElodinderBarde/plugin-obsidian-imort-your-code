import { Plugin } from "obsidian";

export default class CodeIndexerPlugin extends Plugin {

    async onload() {
        console.log("Code Indexer Plugin loaded");
    }

    onunload() {
        console.log("Code Indexer Plugin unloaded");
    }

}
