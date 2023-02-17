# Functional Programming

# Simple Functional Interface
```java
// GreetingMessage.java
@FunctionalInterface
public interface GreetingMessage {
    public abstract void greet(String name);
}

// Main.java
public class Main {
    public static void main(String[] args) {
        GreetingMessage gm = new GreetingMessage() {
            @Override
            public void greet(String name) {
                System.out.println("Hello, " + name + "!🙂");
            }
        };
        gm.greet("Aakash");
    }
}
```
