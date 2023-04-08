# App Architecture

## Separation of concerns
## UDF - Uni Direction Flow

UI Layer   
⬆️      ⬇️  
Data Layer  

## Dependency
`UI Layer` depends on `Domain Layer (optional)` which in turn depends on `Data Layer`

<img src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/df6ce8b662eb792b_1440.png" width="300" />


## UI

<img src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/ce7ffbb6e5a6bffe_1440.png" width="300" />

## Tips
- we should never modify the UI state in the UI directly, unless the UI itself is the sole source of its data

## `ViewModel`
- Add the following dependency:

```gradle
implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.5.1"
```

- Extend the `ViewModel` class for the Game's view model:

```kt
// GameViewModel.kt
import androidx.lifecycle.ViewModel

class GameViewModel:ViewModel() {
    
}
```

- Add a `data class` 

```kt
data class GameUiState(
   val currentScrambledWord: String = ""
)

```
