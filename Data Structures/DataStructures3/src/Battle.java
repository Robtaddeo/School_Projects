import java.text.Collator;
import java.util.Collections;
import java.util.Locale;

public class Battle implements Comparable<Battle >{
	public String name;
	public String attackerKing;
	public String defenderKing;
	public String attackerOutcome;
	public String battleType;
	public String location;
	public String region;
	

	public Battle(String name, String attackerKing, String defenderKing, String attackerOutcome, String battleType, String location, String region) {
		this.name = name;
		this.attackerKing = attackerKing;
		this.defenderKing = defenderKing;
		this.attackerOutcome = attackerOutcome;
		this.battleType = battleType;
		this.location = location;
		this.region = region;
		
	}
	
	
	public String getName() {
		return this.name;
	}
	
	
	
	@Override
	public String toString() {
		return (" - "+this.name+", when "+ this.attackerKing+" attacked "+ this.defenderKing+", resulting in a "+ this.attackerOutcome+", through a "+ this.battleType+", at "+ this.location+", in the region of "+ this.region);
    }

	
	@Override
	public int compareTo(Battle o) {
		return(this.getName().compareTo(o.getName()));
	}

}
	