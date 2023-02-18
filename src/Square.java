public class Square {
    int sideLengthValue;

    public Square(int sideLengthValue) {
        this.sideLengthValue = sideLengthValue;
    }

    public int calculateArea() {
        return this.sideLengthValue * this.sideLengthValue;
    }
}
