# Turbo Repo

## Install globally and locally
```sh
npm i -g turbo
```

## Create a turbo powered repo
```sh
npx create-turbo@latest
```

## Crafting our monorepo
https://turbo.build/repo/docs/crafting-your-repository
- Always use this format:
    ```json
    "workspaces": [
        "packages/*",
        "apps/*"
    ]
    ```
- ensure `package.json` in each package
- a root `package.json`
- a root `turbo.json`
- each package is almost like a small project 
- important properties for a package `package.json`:
    - `name` - identifies the package - best practice is to namespace our internal packages - for ex. `@appsparklers/library-app` - use `@repo` which is unclaimable on the NPM repository.
    - `scripts` - defines scripts that can be run in the package's context.
    - `exports` - so that other modules can import the codes - https://turbo.build/repo/docs/crafting-your-repository/structuring-a-repository#exports 
        ```json
        {
            "exports": {
                ".": "./dist/constants.ts",
                "./add": "./dist/add.ts",
                "./subtract": "./dist/subtract.ts"
            }
        }
        ```
        will allow:
        ```tsx
            import { GRAVITATIONAL_CONSTANT, SPEED_OF_LIGHT } from '@repo/math';
            import { add } from '@repo/math/add';
            import { subtract } from '@repo/math/subtract';
        ```
        - avoid barrel files
        - more powerful features - https://nodejs.org/api/packages.html#conditional-exports
        - IDE autocompletion guaranteed
    - `imports` (optional) - read the manual to understand this better

## Tasks & its Configuration
- each key in the tasks object is a name of the task that can be executed by `turbo`.  `Turbo` will use the rest of the configuration of the task to run that task in the described order, caching log and file outputs in the `outputs` key when provided.
    ```json
    {
        "$schema": "https://turbo.build/schema.json",
        "tasks": {
                "build": {
                "dependsOn": ["^build"],
                "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
            },
            "test": {
                "outputs": ["coverage/**"],
                "dependsOn": ["build"]
            },
            "dev": {
                "cache": false,
                "persistent": true
            }
        }
    }
    ```
- `dependsOn` - an array of strings - a list of task that are required to complete before the task begins running.  There are three types of `dependsOn` notations:
    - **dependency relationships** - prefixing with `^` - for ex. `"depdensOn": ["^build"] `.  `turbo` runs the `build` task at the bottom of the graph (package with most internal dependencies), sequentially moving towards the top of the graph (package with least internal dependencies).
    - **same package relationship** - without any prefixes - for ex. `"depdensOn": ["build"] `.  `turbo` will run the task in the package only after all the depends on are completed. 
    - **arbitary task relationship** - specifies task dependency between specific package tasks:
        ```json
        {
            "tasks": {
                "web#lint": {
                "dependsOn": ["utils#build"]
                }
            }
        }
        ```
        In this example, the `web#lint` task will wait for the `utils#build` task to complete.

## Typescript in Turborepo
https://turbo.build/repo/docs/guides/tools/typescript
- Share Typescript configuration - create a `packages/tsconfig` directory which could host the Typescript configurations that other packages could extend from.  Also, give a name to this package to easily extend it in other packages - for ex. `@repo/tsconfig`.  Now other packages can extends it like so: `"extends": "@repo/tsconfig/base.json"`
- In consumer packages, we'll implement something like this:
    ```json
    {
    "devDependencies": {
        "@repo/typescript-config": "*",
        "typescript": "latest",
        }
    }
    ```
    and in its `tsconfig.json`:
    ```json
    {
        "extends": "@repo/typescript-config/nextjs.json",
        "compilerOptions": {
            "outDir": "dist"
        },
        "include": ["src"],
        "exclude": ["node_modules"]
    }
    ```
- In libraries, we need to create dev and build script to build the typescript configurations
    ```json
    {
        "scripts": {
            "dev": "tsc --watch",
            "build": "tsc"
        }
    }
    ```
    and setup the entry points (exports) like so:
    ```json
    {
        "exports": {
            "./button": {
            "types": "./src/button.ts"
            "default": "./dist/button.js",
            },
            "./input": {
            "types": "./src/input.ts"
            "default": "./dist/input.js",
            }
        }
    }
    ```
    Few important pointers:
    - wildcard entry points has limitations - https://turbo.build/repo/docs/guides/tools/typescript#package-entrypoint-wildcards so the above pattern is better.
    - this pattern is good to avoid barrel files (which helps with performance)
    - with this configuration, editor will provide the necessary auto-importing suggestions
    - published packages will not support this as src code is not included there.  So we'll need to generate and reference declaration files.
- Type checking - We can add this type-check script in each TS package:
    ```json
    {
        "scripts": {
            "check-types": "tsc --noEmit"
        }
    }
    ```



## Tips
1. Install dependencies in the workspace they are used:
    ```sh
    npm install jest --workspace=web --workspace=@repo/ui --save-dev
    npm install jest -w=web -w=@repo/ui --save-dev
    ```
1. To install in all workspaces
    ```sh
    npm install jest --workspaces --save-dev
    npm install jest -ws --save-dev
    ```
1. Keep dependencies on the same version
    1. Tools like `syncpack, manypkg, and sherif` can be used for this specific purpose
    ```sh
    npx sherif@latest
    ```
    1. Update using the package-manager
    ```sh
    npx i typescript@latest --workspaces
    ```
    1. Use the IDE tools like find with regex - for ex. `"react":".*"` on `pacakge.json` files

