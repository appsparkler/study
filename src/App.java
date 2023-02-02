import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.print("Enter your age: ");
        Scanner ageInput = new Scanner(System.in);
        try {
            int age = ageInput.nextInt();
            System.out.println("Your age is " + age);
            ageInput.close();
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
