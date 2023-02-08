
class Triangle {
    double base;
    double height;
    double sideLen0;
    double sideLen1;
    double sideLen2;
    static double pi = Math.PI;

    static int getNumberOfSides() {
        return 3;
    }

    public Triangle(
        double base, double height, double sideLen0,
        double sideLen1, double sideLen2
    ) {
        this.base = base;
        this.height = height;
        this.sideLen0 = sideLen0;
        this.sideLen1 = sideLen1;
        this.sideLen2 = sideLen2;
    }

    public double findArea() {
        double area = (this.base * this.height) / 2;
        return area;
    }
}