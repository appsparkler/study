import java.util.LinkedHashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> lhm = new LinkedHashMap<String, Integer>();
        lhm.put("Brenda", 38383883);
        lhm.put("John", 3111323);
        lhm.put("Aakash", 73380);
        lhm.put("Mohammed", 2232333);

        for(Map.Entry<String,Integer> entry: lhm.entrySet()) {
            System.out.println(entry.getKey());
        }


        // System.out.println(lhm);
    }
}