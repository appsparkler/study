# Turbo Repo

## Install globally and locally
```sh
npm i -g turbo
```

## Create a turbo powered repo
```sh
npx create-turbo@latest
```

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
