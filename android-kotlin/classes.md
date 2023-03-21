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

```kt
class ParameterizedSmartDevice(val type: String, val category: String) {
  // ...
}
```

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
    // constructor with initialization logic
    constructor(par1: String, par2: Int):this() {
        //.....initialization logic
    }

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

## `IS-A` relationship between classes

To allow classes to have a `IS-A` relationship; the parent class needs to be `open`

```kt
open class SmartDevice(var name: String, var category: String) {}
```

Now, `SmartDevice` could have a a sub-class `SmartTVDevice`

```kt
// SmartTvDevice subclass
class SmartTvDevice(var deviceName: String, var deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) { // super class

        // here we can add more "SmartTVDevice" specific properties
        var speakerVolume = 2
            set(value) {
                if (value in 1..100) {
                    field = value
                }
            }
        
        var channelNumber = 1
            set(value) {
                if (value in 1..200) {
                    field = value
                }
            }
        
        fun increaseVolume() {
            speakerVolume++
        }
    }
```

### unspecified parameters (parameters where its not specified if they are muttable or not)

If we don't specify `var` or `val`, the constructor parameters cannot be used we won't be able to use them in the class, but simply pass them to the superclass constructor 

```kt
class HelloWorld(message: String, type: String) {
    fun greet() {
        println("hi there, $message") // compile time ERROR because mutability is not specified. 
    }
}
```

### `HAS-A` relationship between classes

In a `HAS-A` relationship, an object can own an instance of another class without actually being
an instance of that class itself.  For ex. A `SmartHome` HAS-A `SmartDevice`.

```kt

class SmartHome(
    val tv: SmartTVDevice, 
    val light: SmartLightDevice
) {
fun turnOnTv() {

    // smart tv in smart home
        smartTvDevice.turnOn()
    }

    fun turnOffTv() {
        smartTvDevice.turnOff()
    }

    fun increaseTvVolume() {
        smartTvDevice.increaseSpeakerVolume()
    }

    fun changeTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    // smart light in smart home
    fun changeTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    fun turnOnLight() {
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        smartLightDevice.turnOff()
    }

    fun increaseLightBrightness() {
        smartLightDevice.increaseBrightness()
    }

    // all smart devices in smart home
    fun turnOffAllDevices() {
        turnOffTv()
        turnOffLight()
    }
}
```

### Overriding superclass methods from subclasses

To have a method that can be overridden; we need to prefix it with the `open` keyword

```kt
open class SmartDevice {
    ...
    var deviceStatus = "online"

    open fun turnOn() {
        // function body
    }

    open fun turnOff() {
        // function body
    }
}
```

Now, in the subclass, we can override these methods:

```kt
class SmartLightDevice(name: String, category: String) :
    SmartDevice(name = name, category = category) {

    var brightnessLevel = 0

    override fun turnOn() {
        deviceStatus = "on"
        brightnessLevel = 2
        println("$name turned on. The brightness level is $brightnessLevel.")
    }

    override fun turnOff() {
        deviceStatus = "off"
        brightnessLevel = 0
        println("Smart Light turned off")
    }

    fun increaseBrightness() {
        brightnessLevel++
    }
}
```

### Using superclass method in the subclass

```kt
override fun turnOn() {
    super.turnOn()
    println("Smart TV turned on. Speaker volume set to $speakerVolume.")
}

override fun turnOff() {
    super.turnOff()
    println("Smart TV turned off")
}

fun increaseSpeakerVolume() {
    speakerVolume++
    println("Speaker volume increased to $speakerVolume.")
}

fun nextChannel() {
    channelNumber++
}

fun previousChannel() {
    channelNumber--
}
```

### We can also override superclass properties from subclass

First, in the superclass, we need to define the property as open:

```kt
open class SmartDevice(val name: String, val category: String) {
    var deviceStatus = "online"

    open val deviceType = "unknown"  
    ...
}
```

Then, we can override it:

```kt
class SmartLightDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    ...
    override val deviceType = "Smart Light"
    ...

}
```
