import * as glob from 'glob';
import { resolve } from 'node:path';
import { CompilerOptions, PartialArgs } from 'typescript-json-schema';

export const INTERFACES_PATH = glob.sync('./src/interfaces/**/*.ts');
export const SCHEMA_DIR = resolve(__dirname, '..', '..', 'schemas');
export const JSON_INDENT_TABS = 0;

export const SETTINGS: PartialArgs = {
  required: true, // required properties
  aliasRef: false, // use $ref instead of #/definitions
  titles: true, // add title to definitions
  noExtraProps: true, // disallow additional properties
};

export const COMPILER_OPTIONS: CompilerOptions = {
  strictNullChecks: true, // allow null and undefined
  additionalProperties: true, // allow additional properties
  strict: true, // strict type checking
};
