
# Variables
```java
// without generics
List strList = new ArrayList();
strList.add("Hello");
strList.add(1); // no error even though we want only strings in our list

// with generics
List<String> strList = new ArrayList();
strList.add("Hello");
strList.add(1); // type error since only Strings are allowed in the list
```

# Methods
```java
// Without generics
import java.util.ArrayList;
import java.util.List;

public class Main {
    static Integer[] intArray = { 1, 2, 3 };

    // without generics
    public static List arrayToList(Object[] object) {
        List list = new ArrayList();
        for (Object eachItem : object) {
            list.add(eachItem);
        }
        return list;
    }
    
    // Running this throws an exception eventhough there's no
    // compile time error
    public static void main(String[] args) {
        List<String> intList = arrayToList(intArray);
        int size = intList.size();
        System.out.println(intList.get(size - 1));
    }
}
```
