# biome-vscode on multi-root setup

## Project configurations

| Configuration           | //              | proj1       | proj2         |
|-------------------------|-----------------|-------------|---------------|
| root                    | true            | true        | false         |
| extends                 | none            | none        | //            |
| format (indent)         | 2 whitespaces   | tab         | 4 whitespaces |
| lint                    | recommended     | complexity  | complexity    |
| assist                  | organizeImports | (no config) | (no config)   |
| javascript (quoteStyle) | single          | double      | (no config)   |
| javascript (semicolon)  | always          | (no config) | (no config)   |

## Result

