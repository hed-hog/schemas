/**
 * Represents the structure of an item with details about file and interface information.
 */
export interface ItemType {
  /**
   * The final name of the file.
   * @example "output-file.json"
   */
  finalFileName: string;

  /**
   * The name of the interface.
   * @example "Hedhog"
   */
  interfaceName: string;

  /**
   * The path or name of the TypeScript file containing the interface.
   * @example "./src/interfaces/Hedhog.ts"
   */
  interfaceTsFile: string;
}
