# Navigations Test

In our previous instrument tests we were only testing a screen or a component but now we want to test the navigation
too which requires a `nav host controller` that takes care of the navigation.

So, we cannot simply call `val composeTestRule = createComposeRule()`.  We will need to set it up with the 
nav host controller:

```kt
class TestNavHostController {
    private lateinit var navController: TestNavHostController
}

```