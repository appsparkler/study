# Practice


## Advanced Java
### Generics
- Create a type safe `List` - i.e. if it is a string List; we should not be able to add integers to it
- Create a type safe method - for ex. if I have strArray and intArray and a method arrayToList - the arrayToList return type should ensure that when we pass a String Array; it returns a String List and when it passes Int Array; it returns a Int List.
- Write a function that accepts `varargs` - for ex. a method that can accepts any number of String parameters - print each parameter
- Demonstrate the substitution principle - i.e. a method that accepts `Building` and also any of it sub-types.
- Substituion principle doesn't work directly for List - for ex. if a method accepts List of Building; it will not accept List of Office even though it 
is a sub-type of Building.  Use generics so that the method can accept List of both - sub and super type - of a type.

### Collections
- Demonstrate an application that serves customers in a queue - use LinkedLists to achieve this. 
