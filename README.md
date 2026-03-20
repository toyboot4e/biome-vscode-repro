# biome-vscode on multi-root setup

## Project configurations

| Configuration           | //              | sub-projects/proj1   | sub-projects/proj2            |
|-------------------------|-----------------|----------------------|-------------------------------|
| root                    | true            | true                 | false                         |
| extends                 | none            | none                 | //                            |
| format (indent)         | 2 whitespaces   | tab                  | 4 whitespaces                 |
| lint                    | recommended     | complexity           | complexity (+ recommended)    |
| assist                  | organizeImports | (no config)          | disabled                      |
| javascript (quoteStyle) | single          | double               | (no config = single)          |
| javascript (semicolon)  | asNeeded        | (no config = always) | (no config = asNeeded)        |

## Result

- `//`: OK
- `sub-projects/proj1`: not formatted
- `sub-projects/proj2`: OK

For `proj1`, format on save did not work, and there were two `biome` in `Format document with` command:

![](./readme/not-formatted.png)

Maybe a nested configuration with `root: false` is not working correctly. Other than that, looks good to me.
