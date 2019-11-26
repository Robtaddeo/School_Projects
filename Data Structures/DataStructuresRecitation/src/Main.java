import java.util.ArrayList;

public class Main
{
	   public static void main(String[] args) throws
       CloneNotSupportedException {
   Factory factory = new Factory("California", "Gigafactory");
   Tesla car1 = factory.produceCar();

   ArrayList<Tesla> fleet = factory.massProduceCars(car1, 5);
   for(int i = 0; i < fleet.size(); i++) {
       Tesla car = fleet.get(i);

       car.factory.printFactory();
       System.out.println("Battery address: " + car.battery);
       System.out.println();
   }
}
}