# Functions

Functions are treated as first class in Kotlin.


## Two ways to define and assign a function.

```kt
fun someFn() {

}
// or
val someFun = { // if not parameters

}

val someFun = (param1:String, param2:String) -> { // it it has parameters

}
```

## Assigning a function to a variable
```kt
val x = ::someFn // if the function is defined with fun keyword
val y = someFn // if the function is defined using lambda syntax
```

