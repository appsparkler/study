# Tips for building an app

- Include the app in the main activity
- Pass `Modifier` to the App function
- Use `Modifier.fillMaxSize()` in top level element to fill the full screen
- Consider using `Spacer` for space between elements
- Use for re-renders:

```kt
var abc by remember {
    mutableStateOf(1)
}
```
- Center align with `Modifier.wrapContentSize(Alignment.Center)`
