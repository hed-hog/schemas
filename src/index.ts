import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { generateSchema, getProgramFromFiles } from "typescript-json-schema";
import { INTERFACES_PATH, SCHEMA_DIR } from "./constants";
import './interfaces';
import { ItemType } from "./types";
import { compilerOptions, settings } from "./utils";

const ITENS: ItemType[] = [
    {
        finalFileName: "hedhog.schema.json",
        interfaceName: "Hedhog",
        interfaceTsFile: "./src/interfaces/Hedhog.ts"
    },
]

if (!INTERFACES_PATH.every(file => existsSync(file))) {
    throw new Error("One or more TypeScript files in INTERFACES_PATH do not exist.");
}

ITENS.forEach((item: ItemType) => {
    if (!item.interfaceName || !item.interfaceTsFile || !item.finalFileName) {
        throw new Error(`Invalid item configuration: ${JSON.stringify(item)}`);
    }

    const program = getProgramFromFiles(INTERFACES_PATH, compilerOptions);
    const schema = generateSchema(program, item.interfaceName, settings);


    if (!schema) {
        throw new Error(`Failed to generate schema for interface ${item.interfaceName}`);
    }

    const outputPath = resolve(SCHEMA_DIR, item.finalFileName);

    try {
        mkdirSync(dirname(outputPath), { recursive: true });
        writeFileSync(outputPath, JSON.stringify(schema, null, 2), "utf-8");
        console.log(`Schema saved to ${outputPath}`);
    } catch (error) {
        console.error(`Failed to save schema to ${outputPath}:`, error);
    }
});

