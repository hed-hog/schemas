#!/bin/bash

# Verifica se o diretório foi passado como argumento
if [ "$#" -ne 1 ]; then
  echo "Uso: $0 <diretório-do-projeto>"
  exit 1
fi

# Define o diretório base
DIR="$1"

# Verifica se o diretório existe
if [ ! -d "$DIR" ]; then
  echo "Erro: O diretório '$DIR' não existe."
  exit 1
fi

# Obtém o título do projeto a partir do package.json usando Bash nativo
PACKAGE_JSON="$DIR/package.json"
if [ -f "$PACKAGE_JSON" ]; then
  PROJECT_NAME=$(grep -oP '"name"\s*:\s*"\K[^"]+' "$PACKAGE_JSON")
else
  PROJECT_NAME="Projeto Desconhecido"
fi

# Título do arquivo
echo "# Listagem de arquivos \`.ts\` do projeto \`$PROJECT_NAME\`"

# Lista todos os arquivos .ts no diretório e subdiretórios e exibe seu conteúdo no formato Markdown
find "$DIR" -type f -name "*.ts" | while read -r FILE; do
  echo -e "\n## \`$FILE\`\n"
  echo '```ts'
  cat "$FILE"
  echo '```'
done

exit 0
