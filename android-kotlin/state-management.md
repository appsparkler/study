# State Management

## `remember`

This persists the state over the `Composes` lifecycle but doesn't persist if the activity is destroyed.

```kt
var revenue by remember { mutableStateOf(0) }
var dessertsSold by remember { mutableStateOf(0) }
```

## `rememberSavable`

This persists the state even when the app is `destroyed` during a "configuration change" (for ex. screen rotation)

```kt
var revenue by rememberSaveable { mutableStateOf(0) }
var dessertsSold by rememberSaveable { mutableStateOf(0) }
```
