# Hedhog Schemas

## Quick Start

To use the Hedhog schemas in your project...

### Clone the Repository

Clone the Hedhog Schemas repository:

```bash
git clone https://github.com/hed-hog/schemas hedhog-schemas
cd hedhog-schemas
```

### Add a `hedhog.yaml` File

Create a `hedhog.yaml` file in the root of your project:

```yaml
tables:
  author:
    columns:
      - type: pk
      - name: name
      - name: email
    ifNotExists: true
  category:
    columns:
      - type: pk
      - type: slug
      - type: created_at
      - type: updated_at
    ifNotExists: true
```

### Install Dependencies

Run the following command to install the required libraries:

```bash
npm install
```

### Configure VS Code

To enable schema validation in Visual Studio Code, add the following configuration to your `settings.json`:

```json
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/hed-hog/schemas/refs/heads/main/schemas/hedhog.schema.json": [
      "hedhog.yaml"
    ]
  },
  "yaml.validate": true,
  "yaml.format.enable": true,
  "yaml.hover": true,
  "yaml.completion": true
}
```

### Run the Dev Script

Add the following script to your `package.json`:

```json
"scripts": {
  "dev": "nodemon"
}
```

Run the dev server with:

```bash
npm run dev
```

### Validate Your YAML

With the schema configured, VS Code will automatically validate your `hedhog.yaml` file and provide helpful suggestions and error checking.

## Additional Resources

For more details, visit the [Hedhog Documentation](https://hedhog.com/docs/tutorial/getting-started).

Happy coding!

---

## `jsDoc` definitions

### `@description`

> Define the description for the property.

```ts
/**
 * @description Interface representing the Beta configuration.
 */
export interface Beta {
  // ...
}
```

### `@default`

> Define the default value for the property.

```ts
/**
 * @default 10
 */
varchar?: number;
```

### `@minimum`

> Define the minimum value for the property.

```ts
/**
 * @minimum 18
 */
age?: number;
```

### `@maximum`

> Define the maximum value for the property.

```ts
/**
 * @maximum 10
 */
age?: number;
```

### `@minItems`

> Define the minimum number of items in the array.

```ts
/**
 * @description Interface representing the Beta configuration.
 * @minItems 2
 */
persons: [];
```

### `@maxItems`

> Define the maximum number of items in the array.

```ts
/**
 * @maxItems 2
 */
persons: [];
```

### `@multipleOf`

> Define the multiple of value for the property.

```ts
/**
 * @multipleOf 10
 */
age?: number;
```

#### Examples

```yaml
person:
  name: Saulo Costa
  age: 30
```
