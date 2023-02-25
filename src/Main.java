public class Main {
    public static void main(String[] args) {
        // With the thread logic abstracted out in Runny
        Thread t1 = new Thread(new Runny());
        t1.start();

        // With Runnable defined within the main function itself
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    System.out.println(Thread.currentThread().getName() + "-" + i);
                }
            }
        });
        t2.start();

        // With lambda (implementing the Runnable @Functional Interface)
        Thread t3 = new Thread(() -> {
                for (int i = 0; i < 100; i++) {
                    System.out.println(Thread.currentThread().getName() + "-" + i);
                }
        });
        t3.start();
    }
}
