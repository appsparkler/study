import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Customer> customers = new LinkedList<Customer>();
        customers.add(new Customer("Ben"));
        customers.add(new Customer("Sally"));
        customers.add(new Customer("Emma"));
        customers.add(new Customer("Brian"));
        System.out.println(customers);
        serveCustomer(customers);
        System.out.println(customers);
        serveCustomer(customers);
        System.out.println(customers);
    }

    static void serveCustomer(LinkedList<Customer> queue) {
        Customer currentCustomer = queue.poll();
        currentCustomer.serveCustomer();
    }
}
