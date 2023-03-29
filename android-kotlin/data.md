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

- Map - key value pairs - key and value can have any type - for ex. Set<String, Int> or Set<Building, Car>
- List - an ordered list of some type - someSet[2] will always return the same value
- Set - an unordered list - so someSet[2] may not always return the same value and all members must be unique

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

We can use the following `forEach`, `map`, `filter`, `sortedBy`, etc. on this collections 

