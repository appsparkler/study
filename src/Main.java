import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String... args) {
        List<Building> buildingList = new ArrayList<>();
        buildingList.add(new Building());
        buildingList.add(new Office());
        printBuildings(buildingList);
        addHouseToList(buildingList);

        List<Office> officeList = new ArrayList<>();
        officeList.add(new Office());
        officeList.add(new Office());
        printBuildings(officeList);

        List<House> houseList = new ArrayList<>();
        houseList.add(new House());
        houseList.add(new House());
        printBuildings(houseList);
        addHouseToList(houseList);

    }

    private static void printBuildings(List<? extends Building> buildingList) {
        for (int i = 0; i < buildingList.size(); i++) {
            System.out.println("Building " + buildingList.get(i));
        }
    }

    private static void addHouseToList(List<? super House> buildings) {
        buildings.add(new House());
    }
}
