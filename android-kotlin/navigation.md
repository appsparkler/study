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

## Special Navigation

The usual navigation we can accomplish with `.navigate`; howerver, if we want to accomplish something extra, we need to use other methods:

### `popBackStack`

The first argument is straightforward, it is the route.  The second argument `inclusive` - if false, popBackStack() will remove all destinations on top of—but not including—the start destination, leaving it as the topmost screen visible to the user.

```kt
navController
    .popBackStack(
        CupcakeScreen.Start.name, 
        inclusive = false // 
    )
```

### ⭐️ Accessing the current route

Create a `backStackEntry` variable using the navController.  This has the information needed.

```kt
val backStackEntry by navController.currentBackStackEntryAsState()

val currentScreen = CupcakeScreen.valueOf(
   backStackEntry?.destination?.route ?: CupcakeScreen.Start.name
)
```

### To navigate up the routes

```kt
navController.navigateUp()
```

### To conditionally navigate back (previous screen/route)

```kt
val canNavigateBack = navController.previousBackStackEntry != null
```


### Setting up navigation
- Setup the `navController NavHostController`


