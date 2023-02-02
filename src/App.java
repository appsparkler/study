import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String question = "Which is the largest planet in our solar system - Earth, Venus or Jupiter?";
        String firstChoice = "Jupiter";
        String correctAnswer = firstChoice;
        System.out.println(question);
        boolean hasAnsweredCorrectly = false;
        while (!hasAnsweredCorrectly) {
            Scanner userAnswerScanner = new Scanner(System.in);
            String userAnswer = userAnswerScanner.next();
            if (userAnswer.toLowerCase().equals(correctAnswer.toLowerCase())) {
                hasAnsweredCorrectly = true;
                System.out.println("That's the right answer!! Congrats!!!");
                userAnswerScanner.close();
            } else {
                System.out.println("Please try again...");
            }
        }
    }
}
