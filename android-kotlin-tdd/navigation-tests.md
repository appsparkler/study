# Navigations Test

## Install Dependencies

```gradle
androidTestImplementation "androidx.compose.ui:ui-test-junit4"  // BOM
androidTestImplementation 'androidx.test.ext:junit:1.1.4'
androidTestImplementation 'androidx.test.espresso:espresso-intents:3.5.0'
androidTestImplementation "androidx.navigation:navigation-testing:2.5.3"
debugImplementation "androidx.compose.ui:ui-test-manifest"
debugImplementation "androidx.compose.ui:ui-tooling"
```

In our previous instrument tests we were only testing a screen or a component but now we want to test the navigation
too which requires a `nav host controller` that takes care of the navigation.

So, we cannot simply call `val composeTestRule = createComposeRule()`.  We will need to set it up with the
nav host controller:

For navigation, we'll not have access to the same `NavHostController` that we had in the app code.
However, we can use a `TestNavHostController` and configure the test rule with it.

- Setup the `navHostController` - `navController = TestNavHostController(LocalContext.current)`
- Add the `ComposeNavigator` to it:

```kt
navController.navigatorProvider.addNavigator(
    ComposeNavigator()
)
```

Since we want to execute `setupCupcakeNavHost` before every test we annotate it with `@Before`

```kt
package com.example.cupcake.test

import androidx.activity.ComponentActivity
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.navigation.testing.TestNavHostController
import com.example.cupcake.CupcakeApp
import org.junit.Rule

class CupcackeScreenNavigationTest {
    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    private lateinit var navController: TestNavHostController

    fun setupCupcakeNavHost() {
        composeTestRule.setContent {
            navController = TestNavHostController(LocalContext.current)
            CupcakeApp(
                navController = navController
            )
        }
    }
}
```

## Navigation Tests

### navigating to various routes

We can write the following tests for navigaton

- Assert the start-screen/landing-screen - for ex `cupcakeNavHost_verifyStartDestination`

```kt
    @Test
    fun cupcakeHost_verifyStartDestination() {
        val route = navController.currentBackStackEntry?.destination?.route
        assertEquals(CupcakeScreen.Start.name, route)
    }
```

- Next, navigate to a route and assert the route

```kt

    @Test
    fun cupcakeHost_clickOneCupcake_navigatesToSelectFlavorScreen() {
        // go to flavor screen
        composeTestRule
            .onNodeWithText("One Cupcake")
            .performClick()
        navController.assertCurrentRouteName(CupcakeScreen.Flavor
            .name)
    }

    @Test
    fun cupcakeHost_clickNextOnFlavorScreen_navigatesToPickupScreen() {
        // go to flavor screen
        composeTestRule
            .onNodeWithText("One Cupcake")
            .performClick()
        // click on chocolate flavor
        composeTestRule
            .onNodeWithText("Chocolate")
            .performClick()
        //        click on Next
        composeTestRule
            .onNodeWithText("Next")
            .performClick()
        navController.assertCurrentRouteName(CupcakeScreen.Pickup
            .name)
    }
```

## Abstracting out common functionality to re-use code

### ScreenAssertions with `NavController`

We come across that code that we would like to levarage.  We could use the Kotlin syntax for extending classes.  For ex:

```kt
// ScreenAssertions.kt

// lets extend the NavController
fun NavController.assertCurrentRouteName(expectedRouteName: String) {
    Assert.assertEquals(
        expectedRouteName,
        currentBackStackEntry?.destination?.route
    )
}

// now we can use this in the test
navController.assertCurrentRouteName(CupcakeScreen.Start.name)
navController.assertCurrentRouteName(CupcakeScreen.Flavor.name)
```

### Node utils with `AndroidComposeTestRule`

```kt
fun <A : ComponentActivity> AndroidComposeTestRule<ActivityScenarioRule<A>, A>.onNodeWithStringId(
   @StringRes id: Int
): SemanticsNodeInteraction = onNodeWithText(activity.getString(id))
```

### Private functions for repetetive code

```kt
private fun navigateToFlavorScreen() {}
private fun navigateToPickupScreen() {}
private fun navigateToSummaryScreen() {}
```

## Assertions

- `assertDoesNotExist`
- `assertCurrentRouteName` - custom assertion
- `assertEquals`

## Accessing App Resource (`R`)

We can access the apps resources with `composeTestRule.activity.getString(R.string.hello_world)`

```kt
val composeTestRule = createAndroidComposeRule<ComponentActivity>()
val helloWorld = composeTestRule.activity.getString(R.string.hello_world)
```
