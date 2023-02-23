public class Main {
    public static void main(String[] args) {
        Thready t1 = new Thready();
        t1.setName("T1");
        t1.start();

        Thready t2 = new Thready();
        t2.setName("T2");
        t2.start();

        System.out.println(Thread.activeCount());
    }
    
}
