# Creating A Basic Generator

## Steps
1. Add the `@nx/plugin` plugin - `nx add @nx/plugin` - this will help us generate a new project as per our configuration
    ```sh
    nx add @nx/plugin
    ```
1. Generate a plugin - `nx g @nx/plugin:plugin tools/recommended`
    - The plugin is installable by other projects if it is published
    - The plugin will contain our `basic project generator`
    ```sh
    nx g @nx/plugin:plugin <path/for/plugin>
    ```
1. Generate a generator inside the plugin (we could place it anywhere, but `tools/<plugin>` is the ideal place for our tools) - `nx generate @nx/plugin:generator tools/recommended/src/generators/basic-project`
    ```sh
    nx g @nx/plugin:generator <path/for/the/generator> // ideally the plugin-path + the src/generators/<generator-folder-name>
    ```
    - These assets are created when we generate the generator 
    - `tools/<plugin>/generators/basic-project.ts` file that has the code for the generator.
    - A `files` folder which has the list of files and folders that will be generated.
    - A `schema.json` file which has the configuration for user inputs.  We'll use the values of these inputs in the files inside the files generator
    - A `schema.d.ts` which has the Typescript interface for `schema.json` 
    - A `basic-project.spec.ts` (optional) file that has the test for generator.
1. Now, we can try out our newly created generator: `nx g @<org>/recommended:basic-project` - this will prompt us for the name of the project as defined in the `schema.json` and the input will be used by the generator code.
1. Thats it!
> we need to `reload window` in VS Code to see the UI for our generator.

 