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
     * Array of column definitions for the table.
     */
    columns: {
      /**
       * Configuration for the maximum length for VARCHAR columns.
       */
      varchar?: number;

      /**
       * Defines the type of the column.
       */
      type?: ColumnTypes;

      /**
       * Name of the column.
       */
      name?: string;

      /**
       * Default value for the column.
       */
      default?: number | string | boolean;

      /**
       * Name of the referenced database.
       */
      referencedDatabase?: string;

      /**
       * Name of the referenced table.
       * @default false
       */
      unique?: boolean;

      /**
       * Name of the referenced schema.
       */
      referencedSchema?: string;

      /**
       * Deferrable constraint for foreign keys.
       */
      deferrable?: string;

      /**
       * Whether the column can accept null values.
       * @default false
       */
      isNullable?: boolean;

      /**
       * Strategy for value generation (e.g., 'uuid', 'increment').
       */
      generationStrategy?: GenerationStrategyType;

      /**
       * Defines if the column is a primary key.
       * @default false
       */
      isPrimary?: boolean;

      /**
       * Whether the column has unique values.
       */
      isUnique?: boolean;

      /**
       * Whether the column is an array type.
       */
      isArray?: boolean;

      /**
       * Description or comment for the column.
       */
      comment?: string;

      /**
       * Maximum length for the column (for string types).
       */
      length?: number;

      /**
       * Display width for numeric types.
       */
      width?: number;

      /**
       * Character set for the column.
       */
      charset?: string;

      /**
       * Collation for the column.
       */
      collation?: string;

      /**
       * Precision for numeric or decimal types.
       */
      precision?: number | null;

      /**
       * Scale for numeric or decimal types.
       */
      scale?: number;

      /**
       * Whether the column is zero-filled.
       * @default false
       */
      zerofill?: boolean;

      /**
       * Whether the column is unsigned.
       * @default false
       */
      unsigned?: boolean;

      /**
       * Array of acceptable values for the column.
       */
      enum?: string[];

      /**
       * Expression for generated columns.
       */
      asExpression?: string;

      /**
       * Type of generation ('VIRTUAL', 'STORED').
       */
      generatedType?: GeneratedType;

      /**
       * Field type for UI or forms (e.g., 'text', 'select').
       */
      field?: FieldTypes;

      /**
       * Localized names for the column.
       */
      locale?: {
        [key: string]: string;
      };

      /**
       * Definition of foreign key references.
       */
      references?: {
        /**
         * Referenced table name.
         */
        table: string;

        /**
         * Referenced column name.
         */
        column: string;

        /**
         * Action on delete ('CASCADE', 'SET NULL', etc.).
         */
        onDelete?: OnDeleteTypes;

        /**
         * Action on update ('CASCADE', 'SET NULL', etc.).
         */
        onUpdate?: OnUpdateTypes;
      };
    }[];
    /**
     * Whether to create the table only if it does not exist.
     * @default false
     */
    indices?: {
      columns: string[];
      isUnique: boolean;
    }[];

    /**
     * Whether to create the table only if it does not exist.
     * @default false
     */
    ifNotExists?: boolean;
  };
}
