# View Model TDD

## Setup

- Install dependencies (in `build.gradle` app)

```gradle
    implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.5.1" // or with BOM

    testImplementation 'junit:junit:4.13.2'
```

- Create the `Test` class - for ex. `OrderViewModelTest` in the `test` directory in `com.example.android.test.ui` package.  
- Next, we need to initialize the `OrderViewModel`
- Finally, write the tests for the viewModel

> 💡⭐️ It is a good idea to set the `currentUiState` as a `var` instead of `val` so that we can reference it to the updated value everytime we update the state and reuse it.

```kt
package com.example.lunchtray.test.ui

class OrderViewModelTest {
    val viewModel:OrderViewModel = OrderViewModel()    

    @Test validateTheViewModel() {
        var currentUiState = viewModel.uiState.value
        // test initial state

        // update the viewModel

        // re-assign to currentUiState
        currentUiState = viewModel.uiState.value
        // test the updated state
    }
}
```
