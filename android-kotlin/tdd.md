# TDD

## Local Tests

- change the function/class to `internal` from `private` to be able to test it
- Add a `@VisibleForTesting` annotation
- Add new `Directory` and select name `test/java`
- A a new package in that directory and name it as per your app - for ex. `tiptime`
- Crete a new Kotlin class file and name it as per your app - for ex. `TipCalculatorTests`

### Important points

- Write automated tests in the form of methods.
- Annotate the method with the @Test annotation. This lets the compiler know that the method is a test method and runs the method accordingly.
- Ensure that the name clearly describes what the test tests for and what the expected result is - for ex. `fun calculate_20_percent_tip_no_roundup`
- AAAC - Arrange, Act, Assert, Clean up


### Examples

```kt
import com.example.androidexercises.calculateTip
import org.junit.Test
import java.text.NumberFormat
import org.junit.Assert.assertEquals

class TipCalculatorTests {

    @Test
    fun calculate_20_percent_tip_no_roundup() {
        val amount = 10.0
        val tipPercent = 20.00
        val expectedTip = NumberFormat.getCurrencyInstance().format(2)
        val actualValue = calculateTip(amount, tipPercent, false)
        assertEquals(expectedTip, actualValue)
    }
}
```

## Instrumentation Tests

### Setting up the test

- change the function/class to `internal` from `private` to be able to test it
- Add a `@VisibleForTesting` annotation
- Add new `Directory` and select name `androidTest/java`
- A a new package in that directory and name it as per your app - for ex. `tiptime`
- Crete a new Kotlin class file and name it as per your app - for ex. `TipCalculatorTests`
- We need to have a `composeTestRule` to setup the UI we want to test:

```kt
@get:Rule
   val composeTestRule = createComposeRule()
```

- Now we can use this rule to render the UI inside the test function

```kt
fun calculate_20_percent_tip() {
        composeTestRule.setContent {
        TipTimeTheme {
            TipTimeScreen()
        }
    }
}
```

- Now that the UI is setup, we can write instructions to interact with the UI.  For ex.

```kt
package com.example.androidexercises.tiptime

import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performTextClearance
import androidx.compose.ui.test.performTextInput
import com.example.androidexercises.TipCalculatorApp
import com.example.androidexercises.ui.theme.AndroidExercisesTheme
import org.junit.Rule
import org.junit.Test
import java.text.NumberFormat

class TipTimeUITests {

    @get:Rule
    val composeTestRule = createComposeRule()

    @Test
    fun calculate_20_percent_tip() {
        composeTestRule.setContent {
            AndroidExercisesTheme {
                TipCalculatorApp()
            }
        }
        composeTestRule
            .onNodeWithText("Bill amount")
            .performTextInput("10")
        composeTestRule
            .onNodeWithText("Tip (%)")
            .performTextClearance()
        composeTestRule
            .onNodeWithText("Tip (%)")
            .performTextInput("20")
        val expectedTip = NumberFormat.getCurrencyInstance().format(2)
        composeTestRule
            .onNodeWithText("Tip Amount: $expectedTip")
            .assertExists("No node with this text was found")
    }
}
```
