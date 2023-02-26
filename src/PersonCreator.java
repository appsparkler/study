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
