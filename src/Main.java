import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String,Object> userInfo = PersonCreator.requestInfoInTerminal();
        PersonCreator pc = new PersonCreator(userInfo);
    }
}
