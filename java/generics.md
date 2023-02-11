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
