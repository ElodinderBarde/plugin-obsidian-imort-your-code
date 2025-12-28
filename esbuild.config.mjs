import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: "main.js",
    platform: "node",
    target: "es2020",
    external: ["obsidian"]
}).catch(() => process.exit(1));
