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

# Using streams for iteration
We can iterate over array-lists quite easily (and functionally) with streams.
```java
import java.util.ArrayList;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        ArrayList<Book> books = getBooks();

        Predicate<? super Book> filter_titleStartsWithPAndAuthorStartsWithT = book -> {
            return book.getAuthor().startsWith("P") && book.getTitle().startsWith("T");
        };

        books
            .stream()
            .filter(filter_titleStartsWithPAndAuthorStartsWithT)
            .forEach(System.out::println);
    }
    
    static ArrayList<Book> getBooks() {
        ArrayList<Book> books = new ArrayList<Book>();
        books.add(new Book("Reality At Dawn", "Ram Chandra"));
        books.add(new Book("Towards Infinity", "Ram Chandra"));
        books.add(new Book("As A Man Thinketh", "James Allen"));
        books.add(new Book("The Heartfulness Way", "Kamlesh Patel & Joshua Pollock"));
        books.add(new Book("Designing Destiny", "Kamlesh Patel"));
        books.add(new Book("Truth Eternal", "Ram Chandra"));
        books.add(new Book("Love & Death", "Parthasarthi Rajgopalachari"));
        books.add(new Book("The Fruit Of The Tree", "Parthasarthi Rajgopalachari"));
        return books;
    }
}
```

# Using `parallelStream`
When there are large datasets; we can use `parallelStream` to iterate over the
data set which would be more efficient

```java
import java.util.ArrayList;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        ArrayList<Book> books = getBooks();

        Predicate<? super Book> filter_titleStartsWithPAndAuthorStartsWithT = book -> {
            return book.getAuthor().startsWith("P") && book.getTitle().startsWith("T");
        };

        books
            .parallelStream()
            .filter(filter_titleStartsWithPAndAuthorStartsWithT)
            .forEach(System.out::println);
    }
    
    static ArrayList<Book> getBooks() {
        ArrayList<Book> books = new ArrayList<Book>();
        books.add(new Book("Reality At Dawn", "Ram Chandra"));
        books.add(new Book("Towards Infinity", "Ram Chandra"));
        books.add(new Book("As A Man Thinketh", "James Allen"));
        books.add(new Book("The Heartfulness Way", "Kamlesh Patel & Joshua Pollock"));
        books.add(new Book("Designing Destiny", "Kamlesh Patel"));
        books.add(new Book("Truth Eternal", "Ram Chandra"));
        books.add(new Book("Love & Death", "Parthasarthi Rajgopalachari"));
        books.add(new Book("The Fruit Of The Tree", "Parthasarthi Rajgopalachari"));
        return books;
    }
}
```