# Classes

## Basic Concepts

- Encapsulation - enclosing implementations
- Abstraction - hiding implementation
- Inheritance - building on top of existing classes
- Polymorphism - similarity for a range of classes

## Major parts of a class

- properties - variables that specifiy attributes of the class objects
- methods - functions that contain behaviours and actions
- constructors - the function that creates instances using the arguments passed to the class

## Examples

```kt
class SmartDevice {
    val name = "Android TV"
    val category = "Entertainment"
    var deviceStatus = "online"

    fun turnOn() {
        println("Smart device is turned on")
    }

    fun turnOff() {
        println("Smart device is turned off")
    }
}
```

## Getter and Setters

These are very helpful for setting/getting values conditionally from a variable - (val/var)

```kt
var speakerVolume = 2
get() = field
set(value) {
    field = value
}
```

Few important points are:

- `value` and `field` only need to be used.
- avoid settings the value on the variable name - for ex `spearkerVolume = value` which could
trigger an infinite loop and freeze the system

## Constructors

Its purpose is to specifiy how the object of the class are created. There are two types of constructors:

### Primary Constructor

Constructors that have only parameters but don't have any initialization logic are 
primary constructors.

class ParameterizedSmartDevice(val type: String, val category: String) {
  // ...
}

### Secondary Constructor

A class can have any number of secondary constructors so that we can create instances by passing
different number as well as types of arguments

```kt
class Pizza(
    var crustSize: String,
    var crustType: String,
    val toppings: MutableList<String> = mutableListOf<String>()
) {
    constructor(): this("SMALL", "THIN")
    constructor(crustSize: String, crustType: String): this(crustSize, crustType, mutableListOf<String>())

    override fun toString(): String {
        return "This is $crustSize size, $crustType crust pizza with these toppings : ${toppings.toString()} :)"
    }
}

fun main() {
    val pizza1:Pizza = Pizza()
    val pizza2:Pizza = Pizza("LARGE", "CHEESE BURST")
    val pizza3:Pizza = Pizza("MEDIUM", "PAN", mutableListOf("Mushrooms", "Capsicum", "Onions"))
    println(pizza1)
    println(pizza2)
    println(pizza3)
}
```
