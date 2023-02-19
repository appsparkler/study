import java.util.ArrayList;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        ArrayList<Book> books = getBooks();

        Predicate<? super Book> filter_titleStartsWithPAndAuthorStartsWithT = book -> {
            return book.getAuthor().startsWith("P") && book.getTitle().startsWith("T");
        };

        books
            .parallelStream()
            .filter(filter_titleStartsWithPAndAuthorStartsWithT)
            .forEach(System.out::println);
    }
    
    static ArrayList<Book> getBooks() {
        ArrayList<Book> books = new ArrayList<Book>();
        books.add(new Book("Reality At Dawn", "Ram Chandra"));
        books.add(new Book("Towards Infinity", "Ram Chandra"));
        books.add(new Book("As A Man Thinketh", "James Allen"));
        books.add(new Book("The Heartfulness Way", "Kamlesh Patel & Joshua Pollock"));
        books.add(new Book("Designing Destiny", "Kamlesh Patel"));
        books.add(new Book("Truth Eternal", "Ram Chandra"));
        books.add(new Book("Love & Death", "Parthasarthi Rajgopalachari"));
        books.add(new Book("The Fruit Of The Tree", "Parthasarthi Rajgopalachari"));
        return books;
    }
}
