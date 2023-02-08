public class Student {
    String firstName;
    String lastName;
    int expetedYearToGraduate;
    double GPA;
    String declaredMajor;

    Student(
        String firstName,
        String lastName,
        int expetedYearToGraduate,
        double GPA,
        String declaredMajor
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.expetedYearToGraduate = expetedYearToGraduate;
        this.GPA = GPA;
        this.declaredMajor = declaredMajor;
    }

    int decrementExpectedYearToGraduate(int numberOfYears) {
        this.expetedYearToGraduate -= numberOfYears;
        return this.expetedYearToGraduate;
    }
}
