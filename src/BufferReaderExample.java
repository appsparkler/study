import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringWriter;

public class BufferReaderExample {
    public static void main(String[] args) {
        File myFile = new File("example.txt");
        try (
            BufferedReader reader = new BufferedReader(new FileReader(myFile));
            StringWriter writer = new StringWriter();
        ) {
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
            }
            System.out.println(writer.toString());
        } catch (IOException e) {
            
        }

    }
}
