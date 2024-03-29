# Lang

## Types

### `IntRange`

```kt
val x:IntRange = 1..6; // x can take only one of the 6 values - 1,2,3,4,5 or 6
```

## Constants v/s Variables

```kt
val pi: Double = 3.14 // constant due to "val" keyword
var age: Int = 10 // variable due to "var" keywrod
```

## String Literals

```kt
fun main() {
    val unreadCount: Int = 2;
    val readCount: Int = 120
    val line:String = "You have ${readCount + unreadCount} unread messages." // expressions in string literals
    println(line)
    println("You have $unreadCount unread emails."); // using variable values in strings
}
```

## Functions

### Named Arguments

```kt
fun birthdayGreeting(name:String, age: Int) {
    println("Happy Birthday, $name!! You have turned $age! Wow!")
}

fun main() {
    birthdayGreeting("Aakash", 42)
    birthdayGreeting(age = 42, name = "Aakash")
}
```

### Default Arguments

```kt
fun birthdayGreeting(name: String = "Aakash", age: Int = 42) {
    println("Happy Birthday, $name!! You have turned $age! Wow!")
}

fun main() {
    birthdayGreeting() // without argument (considers default argument)
    birthdayGreeting("Aakash") // only one argument 
    birthdayGreeting(age = 42) // named argument
    birthdayGreeting(name = "Aakash") // named argument
}
```

## Conditionals

### When

Simple implmenetation:

```kt
when("Amber") {
    "Red" -> println("STOP")
    "Yellow", "Amber" -> println("SLOW")
    "Green" -> println("GO")
    else -> println("INVALID TRAFFIC LIGHT COLOR")
}
```

More complex one:

```kt
when(-12) {
    2, 3, 5, 7 -> println("Its a prime number")
    in 1..10 -> println("Its a number between 1 and 10 but not a prime number")
    is  Int -> println("It is an integer but not a prime number nor is it between 1 and 10")
    else -> println("x is not an integer")
}
```

### Nullable Variables

> Note: While you should use nullable variables for variables that can carry null, you should use non-nullable variables for variables that can never carry null because the access of nullable variables requires more complex handling. You learn about various techniques to handle nullable variables in the next section.

```kt
var favouriteActor: String? = null // note the "?" here
println(favouriteActor)
favouriteActor = "Amitabh Bachan"
println(favouriteActor)
```

#### Handling nullable variables

When we want to derive values from nullable variables, we need to do it conditionally.  For ex:

- Safe-call operator (`?.`)

```kt
var favouriteActor: String? = null // note the "?" here
println(favouriteActor?.length) // deriving the length of the favourite actor string
favouriteActor = "Amitabh Bachan"
println(favouriteActor?.length)
```

- not-null assertion operator

> When we are sure that the type is not `null`, we can use `!!` operator

```kt
println(favouriteActor!!.length)
```

- `if-else` expressions for assigning values

```kt
var favouriteActor:String? = "Amitabh Bachan"

val lengthOfFavouriteActor:Number = if (favouriteActor != null) {
    favouriteActor.length
} else{
    0
}

favouriteActor = null
```

- An easier approach with the Elvis operator `?:`

```kt
var favouriteActor:String? = "Amitabh Bachan"
val favActorLength:Number = favouriteActor?.length ?: 0 // Elvis operator
println(favActorLength)
// 
favouriteActor = null
val favActorLength2:Number = favouriteActor?.length ?: 0 // Elvis operator
println(favActorLength2)
```

### Ranges