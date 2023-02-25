public class Main {
    public static Object spoon = new Object();
    public static Object bowl = new Object();
    public static void main(String[] args) {
       Thread cook1 = new Thread(() -> {
        synchronized(spoon) {
            System.out.println("Cook 1: Holding the spoon");
            System.out.println("Cook 2: Waiting for the bowl");

            synchronized(bowl) {
                System.out.println("Cook 1: Holding the spoon & the bowl.");
            }
        }
       });

       Thread cook2 = new Thread(() -> {
        synchronized(bowl) {
            System.out.println("Cook 1: Holding the bowl");
            System.out.println("Cook 2: Waiting for the spoon");

            synchronized(spoon) {
                System.out.println("Cook 1: Holding the bowl & the spoon.");
            }
        }
       });

       cook1.start();
       cook2.start();
    }
}
