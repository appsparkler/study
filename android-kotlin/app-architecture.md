# App Architecture

## Flow

1. Update app icon
1. Update strings (to start with, atleast the app name)
1. Update status-bar and nav-bar colors

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

## `ViewModel` Setup

- Add the following dependency:

```gradle
implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.5.1"
```

- Create a `data class` which will hold the state for the game

```kt
data class GameUiState(
    val currentScrambledWord: String = "",
    val currentWordCount: Int = 1,
    val score: Int = 0,
    val isGuessedWordWrong: Boolean = false,
    val isGameOver: Boolean = false
)
```

- Extend the `ViewModel` class for the Game's view model:

```kt
// GameViewModel.kt
import androidx.lifecycle.ViewModel

class GameViewModel:ViewModel() {
    private val _uiState = MutableStateFlow(GameUiState()) // keep it private to avoid direct change
    val uiState: StateFlow<GameUiState> = _uiState.asStateFlow() // uiState is to access the values in the UI
    
    // additional mutable states
    val userGuess by mutableStateOf("")
        private set
    
    // other variables (state) and methods (reducers & helper methods), for ex:
    private lateinit var currentWord: String
    private var usedWords: MutableSet<String> = mutableSetOf()
    
    fun updateUserGuess(guessedWord: String) {}
    fun checkUserGuess() {}
    fun skipWord() {}
    //...etc
}
```

- Access the `ViewModel` and `UiState` in the UI

```kt
val gameUiViewModel:GameViewModel = viewModel() // it is important to import it as `viewModel` instead of `GameViewModel()`
val gameUiState:GameUiState by gameViewModel.uiState.colleactAsState()
```
