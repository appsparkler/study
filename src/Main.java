import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        File myFile = new File("./example.txt");
        try {
            boolean fileCreated = myFile.createNewFile();
            System.out.println(fileCreated);
            System.out.println(myFile.delete());
            myFile.createNewFile();
            System.out.println(myFile.isFile());
            System.out.println(myFile.isDirectory());
        } catch (IOException e) {
            
        }
    }
}
