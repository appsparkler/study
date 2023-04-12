# Navigation

## Setting up Navigation

- Define the `navController` that will handle all navigation requiremnents

```kt
import androidx.navigation.compose.rememberNavController

    val navController = rememberNavController()

```

- Define the routes with `enum class`

```kt
enum class CupcakeScreen {
    Start,
    Flavor,
    Pickup,
    Summary
}
```

- Setup the `NavHost` component  which accepts 2 important arguments:

1. `navController` - the nav controller that is responsible for the navigation
2. `startDestination` - the landing route - where the app begins

- Add routes to `NavHost`.  Each route maps to a particular screen, this mapping is done inside `NavHost`:

```kt
NavHost(
    navController = navController,
    startDestination = CupcakeScreen.Start.name,
    modifier.padding(innerPadding)
) {
    composable(route = CupcakeScreen.Start.name) {/* component/screen we want to render*/}
    composable(route = CupcakeScreen.Flavor.name) {/* component/screen we want to render*/}
    composable(route = CupcakeScreen.Pickup.name) {/* component/screen we want to render*/}
    composable(route = CupcakeScreen.Summary.name) {/* component/screen we want to render*/}
}
```

- Navigate as needed

We can use `navControllers` `.navigate()` method to navigate.  We need to pass the name of the route 

```kt
    navController.navigate(CupcakeScreen.Start.name)
```
