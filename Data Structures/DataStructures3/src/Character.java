import java.text.Collator;
import java.util.Locale;

public class Character implements java.lang.Comparable<Character>{
	public String name;
	public String house;
	public String Mother;
	public String Father;
	public boolean isPatriarch;
	public boolean isMatriarch;
	
	public sLinkedList<Battle> battles;

	public Character(String name, String house, String Father, String Mother, sLinkedList<Battle> battles) {
		this.name = name;
		this.house = house;
		this.battles = battles;
		this.Father = Father;
		this.Mother = Mother;
	}
	
	
	

	public String getName() {
		return this.name;
	}
	
	@Override
	public String toString() {
		return(this.name + " with allegiance to " + this.house);
	}
	public void ListBattles() {
		if(battles.size() != 0) {
			battles.sort();
			for(int i = 0; i < battles.size(); i++) {
				System.out.println(battles.get(i).toString());
			}
		}
	}
	
	
	
	@Override
	public int compareTo(Character o) {
		return(this.getName().toLowerCase().compareTo(o.getName().toLowerCase()));
	}

}
