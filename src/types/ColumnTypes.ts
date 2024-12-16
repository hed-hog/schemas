export type ColumnTypes =
  | 'pk'
  | 'fk'
  | 'created_at'
  | 'updated_at'
  | 'deleted_at'
  | 'slug'
  | 'order'
  | 'bit'
  | 'int'
  | 'integer'
  | 'tinyint'
  | 'smallint'
  | 'mediumint'
  | 'bigint'
  | 'float'
  | 'double'
  | 'double precision'
  | 'decimal'
  | 'numeric'
  | 'fixed'
  | 'bool'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'timestamp'
  | 'time'
  | 'year'
  | 'char'
  | 'nchar'
  | 'varchar'
  | 'nvarchar'
  | 'text'
  | 'blob'
  | 'json'
  | 'binary'
  | 'varbinary'
  | 'geometry'
  | 'point'
  | 'linestring'
  | 'polygon'
  | 'uuid'
  | 'inet'
  | 'macaddr'
  | 'money'
  | 'character varying'
  | 'citext'
  | 'hstore'
  | 'bytea'
  | 'timetz'
  | 'timestamptz'
  | 'interval'
  | 'tsvector'
  | 'tsquery'
  | 'xml'
  | 'jsonb'
  | 'int4range'
  | 'int8range'
  | 'numrange'
  | 'tsrange'
  | 'tstzrange'
  | 'daterange'
  | 'geography'
  | 'cube'
  | 'ltree'
  | 'enum';
