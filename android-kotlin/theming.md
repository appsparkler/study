# Theming

## Color Codes

- #FF80080 - First 2 digits are for alpha or opacity, first 2 numbers are for the red, then green and finally blue
- Transparency - #FF is fully transparent whereas #00 is fully opaque.

## Adding Color to the app - Color Palatte

- The `Color.kt` is like our list of colors that we use across the app.  
We can add various colors that we are going to paint the app with here.  For ex.

```kt
//Light Theme
val Grey50 = Color(0xFFF8F9FA)
val Grey900 = Color(0xFF202124)
val Grey700 = Color(0xFF5F6368)
val Green50 = Color(0xFFE6F4EA) // lighter green for surfaces
val Green100 = Color(0xFFCEEAD6) // green for surfaces

// Dark Theme
```

- We need to add the set of colors for both light theme and dark theme

## Defining the Theme - Theming

Here, in the `Theme.kt` file, we create the theme with the colors we added in the `Color.kt` file.
Here is where we define the palette - for both light theme and dark themes

```kt
private val LightColorPalette = lightColors(
   background = Green100,
   surface = Green50,
   onSurface = Grey900,
   primary = Grey50,
   onPrimary = Grey900,
   secondary = Grey700
)
```

We also create the switch to conditionally load the theme - dark or light

```kt
@Composable
fun WoofTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
   val colors = if (darkTheme) {
       DarkColorPalette
   } else {
       LightColorPalette
   }

   MaterialTheme( // the theme provider
       colors = colors,
       typography = Typography,
       shapes = Shapes,
       content = content
   )
}
```

## Shapes

By default all the shapes in an app are rectangular..
The most common one is `RoundedCornerShape` - they give border-radius to an element.  Ex:

```kt
val Shapes = Shapes(
    small = RoundedCornerShape(4.dp),
    medium = RoundedCornerShape(16.dp),
    large = RoundedCornerShape(0.dp)
)
```

## Component Categories

- In material UI, the components are shape-categorized in three - small, medium and large.  The shape that
we assign to each category will apply to all components in that category.

## Fonts

- Click on `New > Android Resource Directory` and select `Resource type:` as `font`.
- Download custom fonts and copy the `.ttf` files from the static folder of the downloaded fonts to the `font` directory in the project.
- rename the fonts in snake_case - for ex. `Montserrat_bold` > `montserrat_bold`.
- Now, in the `Type.kt` file, define the fonts:

```kt
val AbrilFatface = FontFamily(
   Font(R.font.abril_fatface_regular)
)

val Montserrat = FontFamily(
   Font(R.font.montserrat_regular),
   Font(R.font.montserrat_bold, FontWeight.Bold)
)
```

- Now, add these fonts to the `Typography`, like this:

```kt
val Typography = Typography(
   h1 = TextStyle(
       fontFamily = AbrilFatface,
       fontWeight = FontWeight.Normal,
       fontSize = 30.sp
   ),
   h2 = TextStyle(
       fontFamily = Montserrat,
       fontWeight = FontWeight.Bold,
       fontSize = 20.sp
   ),
   h3 = TextStyle(
       fontFamily = Montserrat,
       fontWeight = FontWeight.Bold,
       fontSize = 14.sp
   ),
   body1 = TextStyle(
       fontFamily = Montserrat,
       fontWeight = FontWeight.Normal,
       fontSize = 14.sp
   )
)
```

- This defined `Typography` will be passed to `Material Theme` and the fonts will be applied.
- We can configure any `Text` element to have the styles we have defined.  For ex.

```kt
 Text(
    text = stringResource(R.string.years_old, dogAge),
    style = MaterialTheme.typography.body1 // this will use body1 styles we defined above.
)
```

## Using the `Scaffold`

- `Scaffold` provides slots for various parts of an app - for ex. topAppBar, bottomAppBar, etc. and it autmoatically 
positions these components without us having to manually positioning them.

## Accessibility

add a content description to any element that add any semantic information for users with impaired vision