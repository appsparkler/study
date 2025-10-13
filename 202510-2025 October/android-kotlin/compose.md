# Compose

## `@Composable` to compose layouts

It is simpler and delarative to build UI components and layouts.

```kt
@Composable
fun Greeting(name: String) {
    Surface(color = Color.Cyan) {
        Text(text = "Hi, my name is $name!", modifier = Modifier.padding(24.dp))
    }
}
```

## `@Preview` with `@Composable` to preview the component we are building

```kt
@Preview(showBackground = true) // pass arguments to annotation
@Composable
fun DefaultPreview() {
    GreetingCardTheme {
        Greeting("Aakash")
        Greeting("Aakash")
    }
}
```

## Rendering the layout

```kt
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            GreetingCardTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}
```