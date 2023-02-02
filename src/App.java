import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Enter a number: ");
        Scanner numberInputScanner = new Scanner(System.in);
        try {
            int numberInput = numberInputScanner.nextInt();
            if (numberInput < 5) {
                System.out.println("Enjoy the good luck a friend brings you");
            } else {
                System.out.println("Enjoy the good luck a friend brings you");
            }
        } catch (Exception e) {
            System.out.println("java.util.InputMismatchException");
        }
        numberInputScanner.close();
    }
}
