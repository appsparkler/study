# String Literals
```kt
fun main() {
    val unreadCount: Int = 2;
    val readCount: Int = 120
    val line:String = "You have ${readCount + unreadCount} unread messages." // expressions in string literals
    println(line)
    println("You have $unreadCount unread emails."); // using variable values in strings
}
```

# Functions
## Named Arguments
```kt
fun birthdayGreeting(name:String, age: Int) {
    println("Happy Birthday, $name!! You have turned $age! Wow!")
}

fun main() {
    birthdayGreeting("Aakash", 42)
    birthdayGreeting(age = 42, name = "Aakash")
}
```
## Default Arguments
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