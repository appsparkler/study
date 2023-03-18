# Lang

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

```kt
when(-12) {
    2, 3, 5, 7 -> println("Its a prime number")
    in 1..10 -> println("Its a number between 1 and 10 but not a prime number")
    is  Int -> println("It is an integer but not a prime number nor is it between 1 and 10")
    else -> println("x is not an integer")
}
```
