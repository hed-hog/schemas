// ./utils/index.ts
import { CompilerOptions, PartialArgs } from "typescript-json-schema";

export const compilerOptions: CompilerOptions = {
    strictNullChecks: true,
    additionalProperties: true,
};

export const settings: PartialArgs = {
    required: false,
    aliasRef: false,
    titles: true,
    noExtraProps: true,
};
