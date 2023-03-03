import java.io.File;
import java.io.IOException;
import java.nio.file.CopyOption;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void copyFile(String src, String dest) {
        Path srcPath = Paths.get(src);
        Path destPath = Paths.get(dest);
        try {
            Files.copy(srcPath, destPath);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        try {
            new File("example.txt").createNewFile();
            copyFile("example.txt", "newFile.txt");
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
