import * as glob from "glob";
import { resolve } from "node:path";

export const INTERFACES_PATH = glob.sync("./src/interfaces/**/*.ts");
export const SCHEMA_DIR = resolve(__dirname, "..", '..', "schemas");