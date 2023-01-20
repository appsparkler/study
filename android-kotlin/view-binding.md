# View Binding
## Update `app build.gradle` to activate `viewBinding` feature (at the end of the `android {...}`

```gradle
android {
  buildFeatures {
      viewBinding true
  }
}
```

## In the `AppCompat` class, lateinit the var so that it can be used with multiple methods, inflate the layout and set the content view
```kt
private lateinit var viewBinding: ActivityMainBinding
override fun onCreate {
    // ...
    viewBinding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(viewBinding.root)
    // ...
}
```
