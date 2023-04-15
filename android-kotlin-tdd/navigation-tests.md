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

## Tests for Navigation

We can write the following tests for navigaton

- Assert the start-screen/landing-screen - for ex `cupcakeNavHost_verifyStartDestination`
