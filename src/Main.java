import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap phonebook = new HashMap<String, Integer>();
        phonebook.put("Aakash", "7338080855");
        phonebook.put("Brenda", 83838383);
        phonebook.put(null, 00000);
        phonebook.put("Smita", 383823);
        System.out.println(phonebook);
        phonebook.put("Smita", 381111);
        if (phonebook.containsKey("Smita")) {
            phonebook.remove("Smita");
        }
        System.out.println(phonebook);
        phonebook.clear();
        System.out.println(phonebook);
    }
}