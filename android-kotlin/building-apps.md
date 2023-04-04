# Tips for building an app

- **First Step** should be to add the strings in `strings.xml`
- Include the app in the main activity
- Pass `Modifier` to the App function

## Spacing

- Use `Modifier.fillMaxSize()` in top level element to fill the full screen
- Use `Arrangement.spacedBy(8.dp)` for `gap` between elements
- Consider using `Spacer` for space between elements
- Center align with `Modifier.wrapContentSize(Alignment.Center)`

## State Management

- Use for state-management:

```kt
var abc by remember {
    mutableStateOf(1)
}
```

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

## Keyboard Options & Actions

- Configure keyboard opened with `keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)`
- `IME` - Input Method Editor - it is a control that enables user to enter text.  So we can edit the `imeAction` with
`imeAction = ImeAction.Next` to go to the next field or `imeAction = ImeAction.Done` which will bascially close the keyboards.
- `KeyboardOptions` allow us to setup the actions, select type of keyboard, etc; however, it is the `KeyboardActions` that allow us to to handle the actions these buttons will perform.  For ex:

```kt
val focusManager = LocalFocusManager.current

TextField(
    ...
    keyboardOptions = ...
    keyboardActions = KeyboardActions(
        onNext = {
            focusManager.moveFocus(FocusDirection.DOWN)
        }
    )
)

TextField(
    ...
    keyboardOptions = ...
    keyboardActions = KeyboardActions(
        onDone = {
            focusManager.clearFocus()
        }
    )
)
```

## Colors

For ex. to `Switch Component`

```kt
Switch(
    colors = SwitchDefaults.colors(uncheckedThumbColor = Color.DarkGray)
)
```

## Math

```kt
kotlin.math.ceil()
```

## Annotations

- `@StringRes` for string resource id types
- `@DrawableRes` for drawable resource id types

``` kt
data class Affirmation(
    @StringRes val stringResourceId: Int,
    @DrawableRes val imageResourceId: Int
)
```

## Data class for lists

List works great for primitive data such as strings or numbers but for more complex
structures such as image and string, we need a data class

```kt
data class Affirmation(
    @StringRes val stringResourceId: Int,
    @DrawableRes val imageResourceId: Int
)
```

## Displaying Images in a card

It is best to set a fixed height and `ContentScale.Crop`.  For ex:

```kt
Image(
    painter = painterResource(affirmation.imageResourceId),
    contentDescription = stringResource(affirmation.stringResourceId),
    modifier = Modifier
        .fillMaxWidth()
        .height(194.dp),
    contentScale = ContentScale.Crop
    )
```

## Lazy Columns and Rows for lists

```kt
@Composable
private fun AffirmationList(affirmationList: List<Affirmation>, modifier: Modifier = Modifier) {
  LazyColumn {
    items(affirmationList){ // items() is how we pass data to a lazy column
        AffirmationCard(affirmation = it)
    }
  }
}
```

## Images with round border (circle image)

- Since images are not shapes; we need to explicitly define its shape, and also set the `ContentScale.Crop`
to have the image fit it the circle.

```kt
Image(
    modifier = modifier
        .size(64.dp)
        .padding(8.dp)
        .clip(RoundedCornerShape(50)),
    contentScale = ContentScale.Crop
)
```

