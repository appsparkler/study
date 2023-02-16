public class Customer {
    String name;
    Boolean hasBeenServed;

    public Customer(String name) {
        this.name = name;
        this.hasBeenServed = false;
    }
    
    public void serveCustomer() {
        this.hasBeenServed = true;
        System.out.println(this.name + " has been served 🙂.");
    }

    @Override
    public String toString() {
        return name;
    }
}
