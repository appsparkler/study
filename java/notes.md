# A simple program

```java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World! Its me, Aakash!");
    }
}
```

`public static void main` is required for any progam.  It is what goes inside the code block that makes it unique.

# Compiling to `bytecode`
```sh
javac path/to/java-file # this will compile to a .class file with the same name as that of the file
```
This file can then be run with
```sh
java fileName # no need to add the suffix .class
```

# Check Version
```sh
java --version
```

# Code Examples:
## Printing in console
```java
System.out.println("Hello World")
```
## Getting input from console
```java
System.out.print("Enter your age: ");
Scanner ageInput = new Scanner(System.in);
int age = ageInput.nextInt();
System.out.println("Your age is " + age);
ageInput.close();
```

# Scanner
- Once a `Scanner` is created; we can re-use the `scanner.next...()` asynchronously (blocking execution) to get new input from user.
- 
