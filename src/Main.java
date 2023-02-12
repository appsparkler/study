import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String... args) {
        List<Building> buildingList = new ArrayList<>();
        buildingList.add(new Building());
        buildingList.add(new Office());

        printBuildings(buildingList);

        List<Office> officeList = new ArrayList<>();
        officeList.add(new Office());
        officeList.add(new Office());

        printBuildings(officeList);
    }

    private static void printBuildings(List<? extends Building> buildingList) {
        for (int i = 0; i < buildingList.size(); i++) {
            System.out.println("Building " + buildingList.get(i));
        }
    }
}
