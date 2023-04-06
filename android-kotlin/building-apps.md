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

## Changing the color of the status bar to match the app's header

### Light Status Bar

- Since we don't use colors in the `app > res > values > colors.xml` file; we can replace the values between
`<resources>` tags with the background colors we want for the app-bar for each theme - light and dark.

```xml
<!-- app/res/values/colors.xml -->
<resources>
   <style name="Theme.Woof" parent="android:Theme.Material.Light.NoActionBar">
       <item name="android:statusBarColor">@color/grey_50</item> <!-- the background color of status bar  -->
        <item name="android:windowLightStatusBar">true</item> <!-- so that the icons, time, etc. too -->
   </style>
</resources>
```

> When you get an error message for `requires API level 23 (current min is 21)`, we can `Override Resoures in values-v23`

### Dark Status Bar

- For dark-status bar; we need to create a new resource directory - we'll call this `values-night`.

> this directory is not easily visible in the "android" project folder structure.  So we need to
switch to "Project Files" structure and find the directory inside the res folder - `app > src > main > res > values-night`

- Add a `Values Resource File` called `themes.xml`

```xml
<resources>
   <style name="Theme.Woof" parent="android:style/Theme.Material.NoActionBar">
       <item name="android:statusBarColor">@color/grey_900</item>
   </style>
</resources>
```

## Managing columns with `.weight()`

We can use the `.weight()` property in sub-elements of row/column.  It allows us to distribute the total width for each sub-element as per our requirement.
For ex.

```kt
@Preview
@Composable
fun WeightExample() {
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        Box(
            modifier = Modifier
                .weight(1f)
                .background(Color.Blue)
                .fillMaxWidth()
        )
        Box(
            modifier = Modifier
                .weight(1f)
                .background(Color.Red)
                .fillMaxWidth()
        )
        Box(
            modifier = Modifier
                .weight(2f)
                .background(Color.Cyan)
                .fillMaxWidth()
        )
    }
}
```

An important note is that only the elements that
have the `.weight()` configured will adjust proportionately to the available space.  The remaining elements will take the space as per the content in them.

Considering this, we can use `Spacer` element to adjust the space for elements.



## Images Playground

### Images with fixed-width
- Sometimes we want to set a fixed width on images - for ex. `64.dp X 64.dp` - for this we can wrap the image with a `Box` and
set the dimensions on the `Box`.  Lets see it in action:

```kt
Box(
    modifier = modifier
        .size(84.dp)
) {
    Image(
        modifier = Modifier
            .clip(RoundedCornerShape(8.dp))
            .wrapContentSize(),
        painter = painterResource(id = imageId),
        contentDescription = null,
        contentScale = ContentScale.FillWidth,
    )
}
```

### `Images` in a `Row` without applying a fixed weight
Sometimes, we have a structure in which there's a `Row` with the first element as `Text` and the next one as `Image`.
The image takes the space only if `Text` is short enough to accomodate it.  For ex. if we have a long text like this:

```kt
Row {
   Text(
       text = "It seems to your image size is less than the screen max width, for that reason the container of the image fill the width, but the image remains small, if you fill the height on the image it scales correctly but the image container fills all space leaving below the list. You could try setting and aspect ratio to the modifier to prevent container from filling all available space:"
    )
    Image(
        painter = painterResource(id = R.drawable.android_superhero1),
        contentDescription = null
    )
}
```
the image will not show up.  This is because the first element in the row doesn't leave any space for the image.

So what do we do?

We can set a weight of `1f` on the elements that are expected to have a dynamic width like so:

```kt
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.SpaceBetween
) {
   Text(
       modifier = Modifier
           .weight(1f), // set a weight on the Text element that's expected to wrap around the image
       text = "It seems to your image size is less than the screen max width, for that reason the container of the image fill the width, but the image remains small, if you fill the height on the image it scales correctly but the image container fills all space leaving below the list. You could try setting and aspect ratio to the modifier to prevent container from filling all available space:"
   )
    Image(
        modifier = Modifier
            .size(64.dp) // fix the size of the image so that it doesn't take its original size.
            .clip(RoundedCornerShape(12.dp)), // we can also give the image a shape we prefer :) 
        painter = painterResource(id = R.drawable.android_superhero1),
        contentDescription = null
    )
}
```

