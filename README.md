# Hedhog Schemas

## Quick Start

To use the Hedhog schemas in your project, follow these steps:

### Step 1: Add a `hedhog.yaml` File
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

### Step 2: Configure VS Code
To enable schema validation in Visual Studio Code, add the following configuration to your `settings.json`:

```json
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/hed-hog/schemas/refs/heads/main/schemas/hedhog.schema.json": ["hedhog.yaml"]
  },
  "yaml.validate": true,
  "yaml.format.enable": true,
  "yaml.hover": true,
  "yaml.completion": true
}
```

### Step 3: Validate Your YAML
With the schema configured, VS Code will automatically validate your `hedhog.yaml` file and provide helpful suggestions and error checking.

## Additional Resources
For more details, visit the [Hedhog Documentation](https://hedhog.com/docs/tutorial/getting-started).

Happy coding!
