# Tips for building an app

- **First Step** should be to add the strings in `strings.xml`
- Include the app in the main activity
- Pass `Modifier` to the App function
- Use `Modifier.fillMaxSize()` in top level element to fill the full screen
- Consider using `Spacer` for space between elements
- Use for state-management:

```kt
var abc by remember {
    mutableStateOf(1)
}
```

- Center align with `Modifier.wrapContentSize(Alignment.Center)`
- Add `clickable` modifier to make any element (not just buttons) clickable
- To get value formatted in local currency - `NumberFormat.getCurrencyInstance().format(tip)`
- Sometimes `toDouble()` on a string could cause run-time errors - for ex. if the string is empty or has an invalid number like `abc`.  To avoid that we could use `stringValue.toDoubleOrNull() ?: 0.00` - this way it will always return a double value.
- String resource formatting -  we can simply add `%s` flat to the string-resource-value and pass the value we need as the second argument.  For ex.

```xml
<string name="tip_amount">Tip Amount: %s</string>
```

```kt
val tip = "$ 15"
stringResource(id = R.string.tip_amount, tip) // this will render Tip Amount: $ 15
```

<!-- Scratch pad
    string-formatting - %s
-->

## Keyboard Options

- Configure keyboard opened with `keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)`
- `IME` - Input Method Editor - it is a control that enables user to enter text.  So we can edit the `imeAction` with
`imeAction = ImeAction.Next` to go to the next field or `imeAction = ImeAction.Done` which will bascially close the keyboards.



