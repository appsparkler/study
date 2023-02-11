import java.util.ArrayList;
import java.util.List;

public class Main {
    static String[] strArray = {"hello", "world"};
    static int[] intArray = {};
    static Character[] charArray = {};
    static Boolean[] boolArray = {};

    public static void main(String[] args)
    {
        {
            // without generics
            List strList = new ArrayList();
            strList.add("Hello");
            strList.add(1); // no error even though we want only strings in our list

        }
        {

            // with generics
            List<String> strList = new ArrayList();
            strList.add("Hello");
            // strList.add(1); // type error since only Strings are allowed in the list
        }
    }
}
