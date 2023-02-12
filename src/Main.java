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
    
    // Running this throws an exception eventhough there's no
    // compile time error
    public static void main(String[] args) {
        List<String> intList = arrayToList(intArray);
        int size = intList.size();
        System.out.println(intList.get(size - 1));
    }
}
