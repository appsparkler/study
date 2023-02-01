# Primitive Types 
They are foundation for other data types in Java
- Boolean - `true` or `false`
- int - whole numbers (ex. number of siblings)
- double - decimal number (ex. GPA - 3.4)
- char - single letter or symbol (for ex. first initial, last initial, hashtag, etc)

# Reference Types
- 


```java
public class App {
    public static void main(String[] args) throws Exception {
        int studentAge = 15;
        double GPA = 3.45;
        char studentFirstInitial = 'A';
        char studentLastInitial = 'S';
        boolean hasPerfectAttendance = true;

        System.out.println("My age is " + studentAge);
        System.out.println("My GPA is " + GPA);
        System.out.println("My first initial is " + studentFirstInitial);
        System.out.println("My last initial is " + studentLastInitial);
        System.out.println("Do I have perfect attendance? " + hasPerfectAttendance);
    }
}
```
