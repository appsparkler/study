# Data

## Reading a file (for ex. json file)

```kt
val inputStream = context.assets.open(fileName)
val size: Int = inputStream.available()
val buffer = ByteArray(size)
inputStream.read(buffer)
inputStream.close()
val json = String(buffer, Charsets.UTF_8)
```

## Convert JSON file input to object

```kt
import com.google.gson.Gson

val gson = Gson()
quoteList = gson.fromJson(json, Array<Quote>::class.java)
```

## Collections

`Map, List and Set` are three basic types of collections.  Each one have specific features

- List - an ordered list of some type - someSet[2] will always return the same value
- Set - an unordered list - so sets do not have indices.
- Map - key value pairs - key and value can have any type - for ex. Set<String, Int> or Set<Building, Car>. Their keys need to be unique but their values don't.  Accessing the value from a map by its key is generally faster instead of iterating over it.

### Size

We can check the size property with `.size` for all three

```kt
// Map
val monthsToDays: Map<String, Int> =
    mapOf(
        "January" to 31,
        "February" to 28,
        "March" to 31,
        "April" to 30
    )

println(monthsToDays)

// List
val flavors: List<String> = listOf(
        "Chocolate",
        "Vanilla",
        "Strawberry"
    )

println(flavors)
println(flavors.get(2))
println(flavours.size)

// Set
 val flavors: Set<String> =
        setOf(
            "Chocolate",
            "Vanilla",
            "Strawberry",
            "Vanilla" // will not get added :/
        )
println(flavors.size)
```

### Iteration

```kt
// both accomplish the same purpose

// for-in loop
for (value in flavors) {
    println(value)
}

// forEach
flavors.forEach{
    println(it)
}
```

### Mutablity

To create mutable sets, maps and lists, we need to add the prefix `mutable` and the suffix `of` - so `mutableListOf`, `mutableSetOf`, `mutableMapOf`

- Map and Set - `.put("Jackfruit", true)` to add and `.remove("Jackfruit")` to remove.
- List - `.add(...)` and `.remove(...)` or with index - `flavours[2] = "Pineapple"` or set method `flavours.set(2, "Pineapple")`

```kt
// Mutable List
println("---------mutableList---------")
val flavors: MutableList<String> = mutableListOf(
    "Chocolate",
    "Vanilla",
    "Strawberry"
)

println(flavors) // [Chocolate, Vanilla, Strawberry]
flavors.add("Blueberry")
println(flavors) // [Chocolate, Vanilla, Strawberry, Blueberry]

// Mutable Set
```

### Higher Order Functions for collections

We can use the following `forEach`, `map`, `filter`, `sortedBy`, `groupBy`, etc. on this collections

## Arrays

```kt
val rockPlanets = arrayOf<String>("Mercury", "Venus", "Earth", "Mars")
val gasPlanets = arrayOf("Jupiter", "Saturn", "Uranus", "Neptune")

// concatenation
val solarSystem = rockPlanets + gasPlanets

// accessing members
println(solarSystem[0])
println(solarSystem[7])

// editing members
solarSystem[3] = "Little Earth"
```

One of the major concerns with array is that they are difficult to access

# `Pair`

A pair is pair of 2 values and we can access either the `first` or `second` value with `.first` or `.second`

```kt

val hello:Pair<Int, Int> = Pair(1,2)

println(hello.first) // 1
println(hello.second) // 2
```

