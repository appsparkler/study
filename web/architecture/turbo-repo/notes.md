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
    - `scripts` - 

## Tips
1. Install dependencies in the workspace they are used:
    ```sh
    npm install jest --workspace=web --workspace=@repo/ui --save-dev
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

