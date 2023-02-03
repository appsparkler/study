import java.util.Scanner;

public class App {

    public static void announceDeveloperTeaTime(Scanner scanner) {
        System.out.println("Type in a random word to announce developer tea time");
        scanner.next();
        System.out.println("Its developer tea time!!! 🫖");
    }

    public static void main(String[] args) {
        System.out.println("Welcome to your new job!!");
        Scanner scanner = new Scanner(System.in);
        
        announceDeveloperTeaTime(scanner);

        System.out.println("Write Code");
        System.out.println("have meetings");
        System.out.println("Review code");

        announceDeveloperTeaTime(scanner);

        System.out.println("Yay!! You got promoted!!");
    }
}