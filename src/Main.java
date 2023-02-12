public class Main {
    public static void main(String... args) {
        Building building = new Building();
        Office office = new Office();

        build(building);
        build(office);
    }

    private static void build(Building building) {
        System.out.println("Constructing a new " + building.toString());
    }
}
