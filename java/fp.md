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
# Simplifying with Lambda 
```java
// GreetingMessage.java
@FunctionalInterface
public interface GreetingMessage {
    public abstract void greet(String name);
}

// Main.java
public class Main {
    public static void main(String[] args) {
        GreetingMessage gm = (String name) -> {
            System.out.println("Hello, " + name + "!🙂");
        };
        gm.greet("Aakash");
    }
}
```

# Further Simplifying with Method References
```java
// a functional interface called Shapes
@FunctionalInterface
public interface Shapes {
    public int getArea(Square square); 
}

// a Square class
public class Square {
    int sideLengthValue;

    public Square(int sideLengthValue) {
        this.sideLengthValue = sideLengthValue;
    }

    public int calculateArea() {
        return this.sideLengthValue * this.sideLengthValue;
    }
}

// Main
public class Main {
    public static void main(String[] args) {
        Square square = new Square(4);

        // with Lambda
        // Shapes shapes = (Square sq) -> { 
        //     return sq.calculateArea();
        // };
        
        // with method references
        Shapes shapes = Square::calculateArea; 

        System.out.println("The area is " + shapes.getArea(square));
    }
}
```
