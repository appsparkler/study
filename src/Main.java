import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        // delete
        System.out.println(new File("example.txt").delete());
        try {
            new File("example.txt").createNewFile();
        } catch (IOException e) {
            // TODO: handle exception
        }

        // delete if path exists
        Path exampleTxtPath = Paths.get("example.txt");
        try {
            Files.deleteIfExists(exampleTxtPath);
        } catch (IOException e) {
            // TODO: handle exception
        };
        
        // file operations
        try {
            // create a helloworld.txt file outside of this project before executing
            Path exampleTxtFilePath = Paths.get("/Users/aakashshah/Desktop/projects/HelloWorld.txt");
            System.out.println(exampleTxtFilePath.getParent());
            System.out.println(exampleTxtFilePath.getRoot());
            System.out.println(exampleTxtFilePath.getFileName());
            System.out.println(exampleTxtFilePath.getFileSystem());
        } catch (Exception e) {
            // TODO: handle exception
        }

        // delete if exists
        Path path = Paths.get("./example.txt");
        try {
            Files.deleteIfExists(path);
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
