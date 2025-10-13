# Testing the ViewModel

## Setup
- install the `junit`

```gradle
dependencies{
//  ...
  testImplementation 'junit:junit:4.13.2'
// ...

}
```

- setup `Compose Bill Of Materials (BOM)` for `testImplementation`

```kt
dependencies{
   def composeBom = platform('androidx.compose:compose-bom:2023.01.00')
   implementation composeBom
   androidTestImplementation composeBom

   implementation "androidx.compose.ui:ui"
   implementation "androidx.compose.material:material"
   implementation "androidx.compose.ui:ui-tooling-preview"
   androidTestImplementation "androidx.compose.ui:ui-test-junit4"
   debugImplementation "androidx.compose.ui:ui-test-manifest"
}
```

## Testing Paths
- Success Path - for ex. when user's guess is correct
- Error Path - for ex. when user's guess is incorrect 
- Boundary Paths - for ex. UI state after the user plays a maximum number of words

## Create Tests
- Focused - it should focus on testing a unit
- Understandable - It should be simple and easy to understand when you read the code
- Deterministic - It should consistently pass or fail. When you run the tests any number of times, without making any code changes, the test should yield the same result
- Self Contained - It does not require any human interaction or setup and runs in isolation


