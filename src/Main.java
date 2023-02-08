public class Main {
    public static void main(String[] args) {
        Triangle triangleA = new Triangle(10, 12, 1.5, 2.5, 3.5);
        Triangle triangleB = new Triangle(4, 5, 1.2, 1.8, 20);
        double triangleAArea = triangleA.findArea();
        double triangleBArea = triangleB.findArea();
        System.out.println(triangleAArea);
        System.out.println(triangleBArea);

        System.out.println(Triangle.getNumberOfSides());
    }
}
