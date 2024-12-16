import {
  ColumnTypes,
  FieldTypes,
  GeneratedType,
  GenerationStrategyType,
  OnDeleteTypes,
  OnUpdateTypes,
} from '../../types';

export interface Tables {
  [key: string]: {
    /**
     * @title Table Columns
     * @description Array of column definitions for the table.
     */
    columns: {
      /**
       * @description Configuration for the maximum length for VARCHAR columns.
       */
      varchar?: number;

      /**
       * @description Defines the type of the column.
       */
      type?: ColumnTypes;

      /**
       * @description Name of the column.
       */
      name?: string;

      /**
       * @description Default value for the column.
       */
      default?: number | string | boolean;

      /**
       * @description Name of the referenced database.
       */
      referencedDatabase?: string;

      /**
       * @description Name of the referenced table.
       * @default false
       */
      unique?: boolean;

      /**
       * @description Name of the referenced schema.
       */
      referencedSchema?: string;

      /**
       * @description Deferrable constraint for foreign keys.
       */
      deferrable?: string;

      /**
       * @description Whether the column can accept null values.
       * @default false
       */
      isNullable?: boolean;

      /**
       * @description Strategy for value generation (e.g., 'uuid', 'increment').
       */
      generationStrategy?: GenerationStrategyType;

      /**
       * @description Defines if the column is a primary key.
       * @default false
       */
      isPrimary?: boolean;

      /**
       * @description Whether the column has unique values.
       */
      isUnique?: boolean;

      /**
       * @description Whether the column is an array type.
       */
      isArray?: boolean;

      /**
       * @description Description or comment for the column.
       */
      comment?: string;

      /**
       * @description Maximum length for the column (for string types).
       */
      length?: number;

      /**
       * @description Display width for numeric types.
       */
      width?: number;

      /**
       * @description Character set for the column.
       */
      charset?: string;

      /**
       * @description Collation for the column.
       */
      collation?: string;

      /**
       * @description Precision for numeric or decimal types.
       */
      precision?: number | null;

      /**
       * @description Scale for numeric or decimal types.
       */
      scale?: number;

      /**
       * @description Whether the column is zero-filled.
       * @default false
       */
      zerofill?: boolean;

      /**
       * @description Whether the column is unsigned.
       * @default false
       */
      unsigned?: boolean;

      /**
       * @description Array of acceptable values for the column.
       */
      enum?: string[];

      /**
       * @description Expression for generated columns.
       */
      asExpression?: string;

      /**
       * @description Type of generation ('VIRTUAL', 'STORED').
       */
      generatedType?: GeneratedType;

      /**
       * @description Field type for UI or forms (e.g., 'text', 'select').
       */
      field?: FieldTypes;

      /**
       * @description Localized names for the column.
       */
      locale?: {
        [key: string]: string;
      };

      /**
       * @description Definition of foreign key references.
       */
      references?: {
        /**
         * @description Referenced table name.
         */
        table: string;

        /**
         * @description Referenced column name.
         */
        column: string;

        /**
         * @description Action on delete ('CASCADE', 'SET NULL', etc.).
         */
        onDelete?: OnDeleteTypes;

        /**
         * @description Action on update ('CASCADE', 'SET NULL', etc.).
         */
        onUpdate?: OnUpdateTypes;
      };
    }[];
    /**
     * @description Whether to create the table only if it does not exist.
     * @default false
     */
    indices?: {
      columns: string[];
      isUnique: boolean;
    }[];

    /**
     * @description Whether to create the table only if it does not exist.
     * @default false
     */
    ifNotExists?: boolean;
  };
}
