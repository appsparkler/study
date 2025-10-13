# Files and Directories

## Creating Files
```java
File myFile = new File("example.txt");
myFile.createNewFile();
```

## List directory content, creating directories and file listing filter
```java
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
```

## Delete a file if it exists with `Files` API
```java
// delete if exists
Path path = Paths.get("./example.txt");
try {
    Files.deleteIfExists(path);
} catch (Exception e) {
    // TODO: handle exception
}
```

### `Paths` and `Path` API
```java
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
```

### Copying files
```java
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
```