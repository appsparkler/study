# Commands

|About|Command|Example
|-|-|-|
|Create a custom environment by extending another environemnt|`bit new <env-name> <workspace-name> --env <environment-to-extend> --default-scope <scope>`|`bit new react bit-dev-study --env teambit.react/react-env --default-scope appsparkler1108.study`
|install missing deps | `bit install --add-missing-deps`|N.A.
|show env summary|`bit show <env-path>`|`bit show envs/my-react-env`|
| install a dependency | `bit install <package-name>` | `bit install @teambit/react.react-env`|
|list all templates for an aspect **(works only inside a bit workspace)** | `bit templates --show-all -a <aspect-id>`| `bit templates --show-all -a teambit.angular/angular`|
|list alltemplates available to a workspace| `bit templates`|N.A.
|configure a component to use a specific environment|`bit env set </path/to/component> <env>` | `bit envs set ui/form my-org.my-scope/envs/my-react-env`

# SHORT FORMS
- `COMPONENT_PATTERN` - ex. `pages/welcome` or `forms/signin-form`, etc.


# Actions

## Creating components with templates
- First we can list all the templates that are available with `bit templates`
- Next, we can create a component with any of the listed template with `bit create <template-name> <path/to/component>` for ex. `bit create react-env name/spaces/my-react-env` - this will create `my-react-env` component with `react-env` template.

## Change environement of a component
- We can get an existing environment from the cloud - for ex. `bit fork teambit.react/v17/react-env` will fork component-environment for version 17 of React.
- Now we can use this environment for our component with `bit env set pages/welcome v17/react-env`

## Change react or any other library version for our component
- We can edit the `peers` property `env.jsonc` file
```json
{
    "name": "react",
    "version": "16.0.0", // use this version
    "supportedRange": "^16.0.0" // support ^16.0.0
}
```

# Dependency Management
There are three types of dependencies:
- dev (used only by dev files such as test, preview, compositions, etc.)
- peer - used by the production component
- runtime - used during runtime.


# Scope
- A scope is like a namespace for a module.  We can create a new scope by visiting https://bit.cloud in our user account or use an existing one.

# Environment (env)
- An env (component development environment) provides your components with the proper tooling, configurations and runtime environment.

## Create a react environment:
