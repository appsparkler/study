import java.util.Scanner;

// import java.util.Scanner;

public class App {

    public static double calculateTotalMealPrice(double listedMealPrice, double taxRate, double tipRate) {
        double finalMealPrice = (tipRate / 100) * listedMealPrice;
        double finalTaxAmount = (taxRate / 100) * listedMealPrice;
        double mealPrice = listedMealPrice + finalMealPrice + finalTaxAmount;
        return mealPrice;
    }

    public static double getIndividualMealPrice(double totalMealPrice, int numberOfPeople) {
        return totalMealPrice / numberOfPeople;
    }

    public static String interactWithUserToCalculateMealPrice(Scanner input) {
        System.out.println("Enter the listed meal price:");
        double listedMealPrice = input.nextDouble();
        System.out.println("Enter the tax rate (between 1 and 100):");
        double taxRate = input.nextDouble();
        System.out.println("Enter the tip rate (between 1 and 100):");
        double tipRate = input.nextDouble();
        // 
        double totalMealPrice = calculateTotalMealPrice(listedMealPrice, taxRate, tipRate);
        int numberOfPeople = 5;
        double individualMealPrice = getIndividualMealPrice(totalMealPrice, numberOfPeople);
        System.out.println("Total meal price: $" + totalMealPrice + ".");
        System.out.println("Per head meal price: $" + individualMealPrice + ".");
        System.out.println("********************");
        System.out.println("Would you like to calculate for another meal? Y/N");
        String yOrN = input.next();
        return yOrN;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // interactWithUserToCalculateMealPrice(input);
        // // String calculateForAnotherMeal = input.next();
        String calculateForAnotherMeal = "y";
        while (calculateForAnotherMeal.toLowerCase().equals("y")) {
            calculateForAnotherMeal = interactWithUserToCalculateMealPrice(input);
        }
        System.out.println("***Thank you for using meal invoice calculator***");
        System.out.println("***Have A Good Day :)***");
        input.close();
    }
}