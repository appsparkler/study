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
- Set - an unordered list - so someSet[2] may not always return the same value
