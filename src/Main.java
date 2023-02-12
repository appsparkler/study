import java.util.ArrayList;
import java.util.List;

public class Main {
    static Integer[] intArray = { 1, 2, 3 };

    // without generics
    public static List arrayToList(Object[] object) {
        List list = new ArrayList();
        for (Object eachItem : object) {
            list.add(eachItem);
        }
        return list;
    }
    
    public static void main(String[] args) {
        arrayToList(intArray);
    }
}
