
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

```java
// with generics
import java.util.ArrayList;
import java.util.List;

public class Main {
    static Integer[] intArray = { 1, 2, 3 };

    // with generics
    public static <T> List<T> arrayToList(T[] array) {
        List<T> list = new ArrayList<>();
        for (T eachIntem : array) {
            list.add(eachIntem);
        }
        return list;
    }

    public static void main(String[] args) {
        List<Integer> intList = arrayToList(intArray);
        System.out.println(intList.get(0));
    }
}

```

# `extends` and `super`
## Extends
There are many times we would like to pass a `List` of sub-types too instead of a `List` of only a particular type

```java
// without extends generic
public static void printBuildings(List<Building> buildings){...} // this will not allow to pass any List type other than Building

// with extends generic 😎
public static void printBuildings(List<? extends Building> buildings){...} // this allows to pass Building or any of its subtype 

```

## Super
Sometimes we would like to add a `House` (which is a sub-type of Building) to a `List<Building>` or `List<Office>`
```java
// without generics
public static void addHouseToList(List<House> houseList) {
    houseList.add(new House());
}
// addHouseToList(buildingList);  // will throw compile error

// with generics
public static void addHouseToList(List<? super House> houseList {
    houseList.add(new House());
}
addHouseToList(buildingList);  // will not throw compile error
```
