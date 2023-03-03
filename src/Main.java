import java.io.File;
import java.io.FilenameFilter;

public class Main {
    public static void main(String[] args) {

        // List files & folders in a directory
        File myFile = new File(".");
        String[] fileList = myFile.list();
        for (String file : fileList) {
            System.out.println(file.toString());
        }

        // Create a new directory
        System.out.println("*****CREATING A NEW DIRECTORY*****");
        new File("mydirectory").delete();
        if (new File("mydirectory").mkdir()) {
            System.out.println("New directory was created");
        }

        // List files with a filter
        System.out.println("*****LISTING ALL MD FILES*****");
        FilenameFilter mdFilesFilter = (File dir, String name) -> {
            return name.contains("md");
        };
        String[] mdFiles = new File(".").list(mdFilesFilter);
        for (String mdFile : mdFiles) {
            System.out.println(mdFile.toString());
        }

    }
}
