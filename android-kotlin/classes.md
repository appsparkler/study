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

Its purpose is to specifiy how the object of the class are created. For ex.
class ParameterizedSmartDevice(val type: String, val category: String) {
  // ...
}
