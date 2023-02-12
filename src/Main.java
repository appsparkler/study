public class Main {
    public static void printShoppingList(String... items) {
        System.out.println("\n");
        System.out.println("SHOPPING LIST");
        for (int i = 0; i < items.length; i++) {
            System.out.println((i + 1) + ". " + items[i]);
        }
    }

    public static void main(String... args) {
        printShoppingList("Orange", "Banana", "Apple");
        printShoppingList("Hybrid Tomato");
    }
}
