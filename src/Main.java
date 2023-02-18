public class Main {
    public static void main(String[] args) {
        Square square = new Square(4);
        // Shapes shapes = (Square sq) -> {
        //     return sq.calculateArea();
        // };
        Shapes shapes = Square::calculateArea;

        System.out.println("The area is " + shapes.getArea(square));
    }
}
