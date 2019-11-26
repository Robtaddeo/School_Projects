import java.util.ArrayList;

class Factory{
   String location;
   String name;
   Factory(String loc, String n) {
       location = loc;
       name = n;
   }
   public void printFactory() {
       System.out.println("Factory:");
       System.out.println(" - Name: " + this.name);
       System.out.println(" - Location: " + this.location);
       System.out.println(" - Memory Address: " + this);
   }
   public Tesla produceCar() {
       Tesla car = new Tesla(this);
       return car;
   }
   
   public ArrayList<Tesla> massProduceCars(Tesla t, int n) throws
   CloneNotSupportedException {
	   ArrayList<Tesla> myList = new ArrayList<Tesla>();
	   for(int i = 0; i <= n; i++ ) {
		   myList.add((Tesla)t.clone());
	   }
	   
	   return myList;
   }
   
}