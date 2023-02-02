import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String question = "What is 2 + 2?";
        String firstChoice = "4";
        String correctAnswer = firstChoice;
        System.out.println(question);
        boolean hasAnsweredCorrectly = false;
        while (!hasAnsweredCorrectly) {
            Scanner userAnswerScanner = new Scanner(System.in);
            String userAnswer = userAnswerScanner.next();
            if (userAnswer.equals(correctAnswer)) {
                hasAnsweredCorrectly = true;
                System.out.println("That's the right answer!! Congrats!!!");
                userAnswerScanner.close();
            } else {
                System.out.println("Please try again...");
            }
        }
    }
}
