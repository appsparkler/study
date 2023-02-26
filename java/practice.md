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
- Structure data with a LinkedList - add items to a list, conditionally remove items, insert items in between other items in the list.
- Demonstrate an application that serves customers in a queue - use LinkedLists to achieve this. 
- Demonstrate a phonebook implementation with HashMap
- Demonstrate a phonebook implementation with LinkedHashMap

### Functional Programming
- Implement a simple FunctionalInterface `GreetingMessage` that exposes a `greet` method.  Use it in the main method of the app.
- Use lambda function to implement the functional interface
- Use method references instead of Lambda for implementing a Functional Interface
- Use stream with `filter` and `forEach` to print an array-list of books.
- Use parallelStream instead of stream

### Modular Programming
- Create a modular Java project
- Create a modular project with 2 modules and each module to have 2 packages, each package to have 1 class.  Module 1 should expose package1.Class1 which needs to be used in Module 2.
- Create a Car Wash System for a company - It stores employees (employees), it schedules the employees (scheduler), customers can book a car wash (bookings)

### Multithreading in Java
- Create a simple multi threaded application
- Implement Runnable instead of extending a Thread with the following three approaches
    - Separate `Runny` class
    - With new Runnable() in the main function
    - Same as above but with lambdas
- Create a synchronized method for ATM class's `withdrawCash` so that only one thread is using the method at any given time.
- Demonstrate how threads could go into a deadlock.


    
