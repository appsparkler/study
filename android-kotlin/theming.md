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

