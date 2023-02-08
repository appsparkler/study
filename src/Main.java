public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Aakash", "Shah", 2037, 4.6, "Finance");
        Student student2 = new Student("Malik", "Krupa", 1873, 5, "Spirituality");

        System.out.println("Previous expected year to graduate: " + student1.expetedYearToGraduate + ".");
        
        student1.decrementExpectedYearToGraduate(5);
        student1.decrementExpectedYearToGraduate(5);
        student1.decrementExpectedYearToGraduate(5);
        student1.decrementExpectedYearToGraduate(5);

        System.out.println("Current expected year to graduate: " + student1.expetedYearToGraduate);
    }
}
