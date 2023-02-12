import java.util.ArrayList;
import java.util.List;

public class Main {
    static Integer[] intArray = { 1, 2, 3 };

    // with generics
    public static <T> List<T> arrayToList(T[] array) {
        List<T> list = new ArrayList<>();
        for (T eachIntem : array) {
            list.add(eachIntem);
        }
        return list;
    }

    public static void main(String[] args) {
        List<Integer> intList = arrayToList(intArray);
        System.out.println(intList.get(0));
    }
}
