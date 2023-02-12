import java.util.ArrayList;
import java.util.List;

public class Main {
    static String[] strArray = {};
    static Integer[] intArray = {1,2,3};
    static Boolean[] boolArray = {true, false, true};

    public static <T>List<T> arrayToList(T[] arr) {
        List<T> list = new ArrayList<T>();
        for (T obj : arr) {
            list.add(obj);
        }
        return list;
    }

    public static void main(String[] args)
    {
        List<String> strList = arrayToList(strArray);
        List<Integer> intList = arrayToList(intArray);
        List<Boolean> boolList = arrayToList(boolArray);

        strList.add("Yo!");

        System.out.println(strList.get(0));
        System.out.println(intList.get(0));
        System.out.println(boolList.get(0));
    }
}
