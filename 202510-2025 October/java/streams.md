# Streams
Data Streams, like real water streams, can flow only in one direction at a time.
There are two primary streams in Java - input and output - input streams read 
in data.  Output streams write out data.

## Examples of `InputStream`
- FileInputStream
- ByteArrayInputStream
- FilterInputStream
- etc...

## Examples of `OutputStream`
- FileOutputStream
- ByteArrayOutputStream
- FilterOutputStream
- etc...

## Scanner
Scanner can be used to read input - from terminal, etc.  For ex:
```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class PersonCreator {
    private String name = "";
    private Integer age;
    private Long phoneNumber;

    static Map<String, Object> requestInfoInTerminal() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter your name, age and phone number separated with a space: ");
        String name = scanner.next();
        Integer age = scanner.nextInt();
        Long phoneNumber = scanner.nextLong();
        Map<String, Object> userData = new HashMap<String, Object>();
        scanner.close();
        userData.put("name", name);
        userData.put("age", age);
        userData.put("phoneNumber", phoneNumber);
        return userData;
    }

    public void createPerson(Map<String, Object> userInfo) {
        this.name = userInfo.get("name").toString();
        this.age = Integer.parseInt(userInfo.get("age").toString());
        this.phoneNumber = Long.parseLong(userInfo.get("phoneNumber").toString());
        System.out.println("Person created: \n  - Name: " + name + " \n  - Age: " + age + " \n  - Phone Number: " + phoneNumber);
    }

    public void create() {
        Map<String, Object> userInfo = requestInfoInTerminal();
        createPerson(userInfo);
    }
}
```



## BufferedReader
Can be used to read a file in the system.  For ex:
```java
public class BufferReaderExample {
    public static void main(String[] args) {
        File myFile = new File("example.txt");
        try {
            BufferedReader reader = new BufferedReader(new FileReader(myFile));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            reader.close();
        } catch (IOException e) {
            
        }

    }
}
```

## Resources in `try` to avoid leaks
If resources are not closed; they can cause leaks.  It is always better
to wrap resources in the `try` method.  

```java
public class BufferReaderExample {
    public static void main(String[] args) {
        File myFile = new File("example.txt");
        try (
            BufferedReader reader = new BufferedReader(new FileReader(myFile));
            StringWriter writer = new StringWriter();
        ) {
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
            }
            System.out.println(writer.toString());
        } catch (IOException e) {
            
        }

    }
}
```
