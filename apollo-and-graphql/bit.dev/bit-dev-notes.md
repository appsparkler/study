# Commands

|About|Command|Example
|-|-|-|
|Create a custom environment by extending another environemnt|`bit new <env-name> <workspace-name> --env <environment-to-extend> --default-scope <scope>`|`bit new react bit-dev-study --env teambit.react/react-env --default-scope appsparkler1108.study`
|install missing deps | `bit install --add-missing-deps`|N.A.
|show env summary|`bit show <env-path>`|`bit show envs/my-react-env`|
| install a dependency | `bit install <package-name>` | `bit install @teambit/react.react-env`|
|list all templates for an aspect | `bit templates --show-all -a <aspect-id>`| `bit templates --show-all -a teambit.angular/angular`|



# Scope
- A scope is like a namespace for a module.  We can create a new scope by visiting https://bit.cloud in our user account or use an existing one.

# Environment (env)
- An env (component development environment) provides your components with the proper tooling, configurations and runtime environment.

## Create a react environment:
