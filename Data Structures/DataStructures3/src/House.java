
public class House implements java.lang.Comparable<House>{
	
	
	private String name; //name of the house
	public sLinkedList<Character> members = new sLinkedList<Character>(); //characters with allegiance to this house
	private Character patriarch; //patriarch of the house
	private Character matriarch; //matriarch of the house
	public FamilyTree familyTree; //Needs to be built via functions in familytree
	
	
	
	@Override
	public int compareTo(House h) {
		return(this.name.toLowerCase().compareTo(h.name.toLowerCase()));
	}
	
	public String getName() { // gets name of house
		return this.name;
	}
	
	public void setName(String Name) { // Sets name of house
		this.name = Name;
	}

}
