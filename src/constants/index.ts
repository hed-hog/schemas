import * as glob from 'glob';
import { resolve } from 'node:path';
import { CompilerOptions, PartialArgs } from 'typescript-json-schema';

export const INTERFACES_PATH = glob.sync('./src/interfaces/**/*.ts');
export const SCHEMA_DIR = resolve(__dirname, '..', '..', 'schemas');

export const SETTINGS: PartialArgs = {
  required: true,
  aliasRef: false,
  titles: true,
  noExtraProps: true,
};

export const COMPILER_OPTIONS: CompilerOptions = {
  strictNullChecks: true,
  additionalProperties: true,
  strict: true,
};
