import java.util.Scanner;

// import java.util.Scanner;

public class App {

    public static double getEmployeeSalary(double salaryPerHour, double numberOfHoursPerWeek, double daysOff) {
        double salary = salaryPerHour * numberOfHoursPerWeek;
        double deductions = daysOff * 8 * salaryPerHour;
        return salary - deductions;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String recalculateSalary = "y";
        while (recalculateSalary.toLowerCase().equals("y")) {
            salaryCalculatorAppFunction(input);
            recalculateSalary = input.next();
        }
        input.close();
    }

    private static void salaryCalculatorAppFunction(Scanner input) {
        System.out.println("How much do you earn per hour?");
        double salaryPerHour = input.nextDouble();
        System.out.println("How many hours do you work per week?");
        double numberOfHoursPerWeek = input.nextDouble();
        System.out.println("How many days off do you take?");
        double daysOff = input.nextDouble();
        double salary = getEmployeeSalary(salaryPerHour, numberOfHoursPerWeek, daysOff);
        System.out.println("Your salary is : $" + salary + " this week.");
        System.out.println("Would you like to recalculate your salary? (Y/N)");
    }
}