import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { generateSchema, getProgramFromFiles } from 'typescript-json-schema';
import {
  COMPILER_OPTIONS,
  INTERFACES_PATH,
  SCHEMA_DIR,
  SETTINGS,
} from './constants';
import { ItemType } from './types';
import { init } from './utils';

init();

const ITENS: ItemType[] = [
  {
    finalFileName: 'hedhog.schema.json',
    interfaceName: 'Hedhog',
    interfaceTsFile: './src/interfaces/Hedhog.ts',
  },
  {
    finalFileName: 'beta.schema.json',
    interfaceName: 'Beta',
    interfaceTsFile: './src/interfaces/Beta.ts',
  },
];

if (!INTERFACES_PATH.every((file) => existsSync(file))) {
  throw new Error(
    'One or more TypeScript files in INTERFACES_PATH do not exist.',
  );
}

ITENS.forEach((item: ItemType) => {
  if (!item.interfaceName || !item.interfaceTsFile || !item.finalFileName) {
    throw new Error(`Invalid item configuration: ${JSON.stringify(item)}`);
  }

  const program = getProgramFromFiles(INTERFACES_PATH, COMPILER_OPTIONS);
  const schema = generateSchema(program, item.interfaceName, SETTINGS);

  if (!schema) {
    throw new Error(
      `Failed to generate schema for interface ${item.interfaceName}`,
    );
  }

  const outputPath = resolve(SCHEMA_DIR, item.finalFileName);

  try {
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(schema, null, 2), 'utf-8');
    console.log(`Schema saved to ${outputPath}`);
  } catch (error) {
    console.error(`Failed to save schema to ${outputPath}:`, error);
  }
});
