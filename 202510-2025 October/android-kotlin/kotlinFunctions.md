# Functions

Functions are treated as first class in Kotlin.

## Two ways to define and assign a function

```kt
fun someFn() {

}
// or
val someFun = { // if no parameters

}

val someFun = (param1:String, param2:String) -> { // it it has parameters

}
```

## Assigning a function to a variable

```kt
val x = ::someFn // if the function is defined with fun keyword
val y = someFn // if the function is defined using lambda syntax
```

## Function returning a function

```kt
fun trickOrTreat(isTrick:Boolean):() -> Unit { // a function that accepts a boolean and return a function that return Unit (void)
    if(isTrick) {
        return trick
    } else {
        return treat
    }
}
```

## Optional Parameters

```kt
fun trickOrTreat(isTrick: Boolean, ):(Boolean) -> Unit {
    if(isTrick) {
        return trick
    } else {
        return treat
    }
}
```

## Simpler Syntax

```kt
// this
val coinsV2:(Int) -> String = {
    quantity -> "$quantity coins"
}
// can be written more simply as 
val coins:(Int) -> String = { 
    "$it coins"
}
```

## Trailing lambda syntax

If a function's last parameter is a function type, you can use trailing lambda syntax to move the lambda expression after the last parenthesis when you call a function

```kt
// repeat takes a function as the 2nd argument.  We can pass it like so:
repeat(4) {
    printLn("Hello World")
}
// instead of
repeat(4, {
    println("Hello $it") // basically, we can move the lambda outside of the parenthesis
})
```

## Higher order functions

Higher-order functions are functions that take other functions as parameters or return a function

```kt
// repeat is a higher order function
repeat(4, {
    println("Hello World, $it");
})
```

## Multiple arguments

```kt
val x:(Int, String) -> Unit = {
    quantity,
    message ->
        println(quantity)
        println(message)
}
```
