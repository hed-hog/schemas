// ./utils/index.ts
import { CompilerOptions, PartialArgs } from "typescript-json-schema";

export const compilerOptions: CompilerOptions = {
    strictNullChecks: true,
    additionalProperties: true,
};

export const settings: PartialArgs = {
    required: true,
};
