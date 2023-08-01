# Attributes for Classes & Constructors

- `private` - The private access modifier restricts the visibility of a class only to the enclosing class
- `inner` - indicates that this class is an inner class and can access members of the outer class.
- `internal` - restricts the visibility of the constructor to within the same module

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

# Theme

## How to change the theme
- Add a `res > values > styles.xml` android resource file.  In that file we can select a theme we want with the `parent` attribute.
- Assign a `name` to the theme - for ex. `AppTheme`. 

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="AppTheme" parent="Theme.MaterialComponents.NoActionBar">
    </style>
</resources>
```
- Now, change the theme in the `<application>` tag in the `AndroidManifest.xml` file:

```xml
<application
    ...
    android:theme="@style/AppTheme"
    ...
>
```


