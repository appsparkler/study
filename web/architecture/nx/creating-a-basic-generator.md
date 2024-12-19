# Creating A Basic Generator

## Steps 
1. Add the `@nx/plugin` plugin - `npx nx add @nx/plugin` - this will help us generate a new project as per our configuration
1. Generate a plugin - `npx nx g @nx/plugin:plugin tools/recommended`
    - The plugin is installable by other projects if it is published
    - The plugin will contain our `basic project generator`
1. Generate a generator inside the plugin (we could place it anywhere, but `tools/<plugin>` is the ideal place for our tools) - `nx generate @nx/plugin:generator tools/recommended/src/generators/library
`