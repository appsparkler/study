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

## 