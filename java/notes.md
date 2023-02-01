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
