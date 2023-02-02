import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        boolean isOnRepeat = true;
        while (isOnRepeat) {
            System.out.print("Type \"yes\" if you would like to take this song off repeat.");
            Scanner takeSongOffRepeatScanner = new Scanner(System.in);
            String takeSongOffRepeatInput = takeSongOffRepeatScanner.next();
            if (takeSongOffRepeatInput.equals("yes")) {
                isOnRepeat = false;
            }
            takeSongOffRepeatScanner.close();
        }
        System.out.println("Playing next song.");
    }
}
