# Creating A Basic Generator

## Steps 
1. Add the `@nx/plugin` plugin - `npx nx add @nx/plugin` - this will help us generate a new project as per our configuration
1. Generate a plugin - `npx nx g @nx/plugin:plugin tools/recommended`
    - The plugin is installable by other projects if it is published
    - The plugin will contain our `basic project generator`
