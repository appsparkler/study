# Classes

`class` are like blueprint of house (it is not house itself).  The `class instance` is the house

## Construction function

The constructor function is written with the same name as that of the class.  For ex.

```java
public class Triangle {
  public Triangle {/*...*/} // not that there's no return type as well - for ex public void ...
}
```

## `static` function

When a function doesn't use the attributes of a class but still relates to the overall theme or idea of the class.

## `static` v/s `non-static` variables

Static variables hold data that don't change over the lifecycle of a class whereas non-static (aka dynamic) variables can change over
the lifecycle of the class.

## instance methods v/s class methods

- Class methods are static - they don't use non-static properties of the class.
- Instance methods have access to all the properties of the class.

## `private` v/s `public` properties

- private properties are only accessible inside the class whereas `public` are accessible both inside and outside the class
