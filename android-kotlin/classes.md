# Classes

https://developer.android.com/codelabs/basic-android-kotlin-compose-classes-and-objects?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-compose-unit-2-pathway-1%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-compose-classes-and-objects#7

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

## Visibility Modifiers

- In a class, these modifier let us hide properties and methods from 
unauthorized access outside the class
- In a packge, they let us hide the classes and interfaces from unauthorized access
outside the package

Kotlin provides 4 visibility modifiers:

- public - it is the default.  makes the declaration accessible everywhere
- private - makes the declaration accessible in the same class or source file
- protected - makes the declaration accessible in subclasses
- internal - makes the declaration accessible in the same module - similar to private except
that these are accessible outside the class as long as they are being accessed in the same 
module

Just like in a car, the details of various 
complexities are hidden so that we don't get
overwhelmed by the complexity; as a developer
we need to hide the complexities of logic - abstraction or encapsulation

### Visibility modifier for properties

For the getter and setter:

```kt
open class SmartDevice(val name: String, val category: String) {

    ...
    private var deviceStatus = "online"
    ...
}
```

For the setter only:

```kt
open class SmartDevice(val name: String, val category: String) {

    ...
    var deviceStatus = "online"
        protected set(value){
           field = value
       }
      
    ...
}
```

Since we aren't performing any logic, we can simply:

```kt
open class SmartDevice(val name: String, val category: String) {

    ...
    var deviceStatus = "online"
        protected set      
    ...
}
```

### Visibility modifiers for methods

```kt
class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    ...
    protected fun nextChannel() {
        channelNumber++
    }      
    ...
}
```

### Visibility modifiers for constructors

```kt
open class SmartDevice protected constructor (val name: String, val category: String) {

    ...

}
```

### Visibility modifiers for classes

```kt
internal open class SmartDevice(val name: String, val category: String) {

    ...

}
```

> Ideally, you should strive for strict visibility of properties and methods, so declare them with the private modifier as often as possible. If you can't keep them private, use the protected modifier. If you can't keep them protected, use the internal modifier. If you can't keep them internal, use the public modifier.

## Property delegates

Many a times, we need to write the same functionality for few properties - for ex. `speakerVolume, brightnessLevel, channelNumber, etc.` - all these have a value, a min-value and max-value and we had to write `if (value in 1..100)...` for each of them - this is the same format which is repeated - for such logic; we could use delegates to reuse the code

### Interfaces

Interface is a protocol to which classes that implement it need to adhere.  Basically, interfaces help us achieve abstraction

Thus, we create a RangeRegulator:

```kt
class RangeRegulator(
    initialValue: Int,
    private val minValue: Int,
    private val maxValue: Int
) : ReadWriteProperty<Any?, Int> {
    var fieldData = initialValue

    override fun getValue(thisRef: Any?, property: KProperty<*>): Int {
        return fieldData
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
        if (value in minValue..maxValue) {
            fieldData = value
        }
    }
}
```

Now, we can re-write ourcode as follows:

```kt
class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    private var speakerVolume by RangeRegulator(initialValue = 0, minValue = 0, maxValue = 100)

    private var channelNumber by RangeRegulator(initialValue = 1, minValue = 0, maxValue = 200)

    ...
}
```

## Generics

We can create generic classes so that they can accept similar but different types
trying to achieve the same functionality.

```kt
// a generic class
class Search<T> (var input: T)

// instantiating the class
var stringSearch = Search<String>("Who is Cher?")
var numberSearch = Search<Int>(1998)
```

## Enums

When there are fixed number of values that can be assigned to a property - for ex. Language;
we can use Enums

```kt
// defining enum
enum class Language {
    English, Indonesian, Spanish,
    Portugese, Japanese
}

// using the enum
class Search<T>(var input: T, var language: Language)
```

## Data class

We can create data class for defining a schema

```kt
data class SearchResult (
    val title: String,
    val source: String,
    val snippet: String,
    val isAds: Boolean
)
```

## Singleton Object

Classes are to create innumerable instances having similar properties; however,
we can have an `object` for unique or specific representation - for ex:

```kt
package moreKotlinFundamentals

object EiffelTower {
    val floors = 3
    var isLightOn = false

    fun switchLight() {
        isLightOn = !isLightOn
    }
}

fun main() {
    println(EiffelTower.isLightOn)
    println(EiffelTower.floors)
    EiffelTower.switchLight()
    println(EiffelTower.isLightOn)
}
```

## Companion Object

We can have a companion object inside a class.  Members of this object 
can be referenced without instantiating the class

```kt
package moreKotlinFundamentals


enum class Language {
    Spanish, English, Indonesian,
    Hindi, Gujarati
}

class Search<T>(
    var input: T,
    var languageSelected: Language
) {

    companion object SearchPage {
        val mainBanner: String = "Google"
        val searchButtonLabel: String = "Search"
    }
}

fun main() {
    println(Search.mainBanner)
    println(Search.searchButtonLabel)
}
```

## Extension Properties

Its a way to extend a class without the parent class being `open`.
We can add both method and properties to a existing class

Methods:

```kt
package moreKotlinFundamentals

fun Search<String>.isFestiveTime():Boolean {
    val isHolidayLocally = true
    return isHolidayLocally
}

fun Search<String>.launchFestiveMainPage() {
    val displayConfettiAnimation = {
        println("Launching Confetti!!!🎉")
    }
    displayConfettiAnimation()
}

fun main() {
    val search = Search<String>("hello world", Language.English)
    search.launchFestiveMainPage()
    println(search.isFestiveTime())
}
```

Properties:

```kt
val Event.durationOfEvent:String
    get() = if (this.durationInMinutes < 60) {
        "short"
    } else {
        "long"
    }
```

## Interfaces for Classes

If we'd like a class to confirm to a data structure; we can use Interfaces - i.e. have a class confirm to an interface

```kt

interface ProgressPrintable {
    val progressText: String
    fun printProgressBar()
}

class Quiz : ProgressPrintable {
    override val progressText: String
        get() = "$answered of $total answered."

    override fun printProgressBar() {
        repeat(Quiz.answered) { print("▓") }
        repeat(Quiz.total - Quiz.answered) { print("▒") }
        println()
        println(progressText)

    }

    companion object {
        val total = 3
        val answered = 10
    }
}

fun main() {
    Quiz.printProgressBar()
}

```

## Scoped Functions

Scoped functions let us easily use the object with a shorter-name than the name it has.
Examples are the `let` and `apply` scoped functions

```kt
// let example
question1.let {
    println(it.question)
    println(it.answer)
    println(it.difficulty)
}
// instead of 
println(question1.question)
println(question1.answer)
println(question1.difficulty)
```

```kt
// apply example
Quiz().apply {
    printQuiz()
}
// instead of
val quiz = Quiz()
quiz.printQuiz()
```
