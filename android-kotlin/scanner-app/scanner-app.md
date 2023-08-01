
# AppCompat

## Enablin vectord drawable compatability accross all devices:
This is usually called before the `setContent` method:
```kt
AppCompatDelegate.setCompatVectorFromResourcesEnabled(true)
```

# Fonts

## Android in-built fonts v/s custom font

```xml
<TextView
    android:fontFamily="google-sans" <!--this is use of an in-built font-->
/>

<TextView
    app:fontFamily="@font/comic-sans" <!--this is use of a custom font from a file in res/font dir -->
>
```


