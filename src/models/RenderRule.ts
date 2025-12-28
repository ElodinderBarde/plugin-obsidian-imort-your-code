export type RenderMode =
    | "embed"
    | "link"
    | "asset"
    | "skip";

export interface RenderRule {
    mode: RenderMode;

    embedType?: string;
}
