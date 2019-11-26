import java.util.ArrayList;
import java.util.Scanner;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
public class GameOfThrones {
	static sLinkedList<Character> characterList = new sLinkedList<Character>();
	static sLinkedList<Battle> battlesList = new sLinkedList<Battle>();
	static sLinkedList<House> houses = new sLinkedList<House>();
	
	public static void main(String[] args) {
	
	
	battlesReader(); // Reads Battles
	characterReader(); // Reads Characters
	characterList.removeFirst(); // Removes pointless first line from characterList
	battlesList.removeFirst(); // Removes pointless first line from battlesList
	characterList.sort(); // Uses merge sort to sort list
	battlesList.sort(); // Uses merge sort to sort list
	addHouses(); // Adds hosues to houses linked list
	buildHouses(); // builds houses with characters
	houses.sort(); // sorts houses by name 

	
	// Starts while loop that lets user enter multiple values
	
	boolean running = true;
	while(running) {
		
		//Takes in user input
		Scanner input = new Scanner(System.in);
	    System.out.print("Enter a character name (or type \"all\" for all characters, \"Family Tree\" for a family tree of all houses, or \"exit\" to exit): ");
	    String s = input.nextLine();
	    Character dummy = new Character(s, null, null, null, null);
	    
	    // Checks if input equals "all"
	   
	    
	    if(s.equals("all")) {
		    for(int i = 0; i < characterList.size(); i++) {
		    	System.out.println(characterList.get(i).toString()); // Prints out all characters
			}
	    }
	    
	    
	    if(s.toLowerCase().equals("family tree")) {
	    	
	    	for(int i = 0; i < houses.size(); i++) { // Loops through houses
	    		FamilyTree tree = new FamilyTree(); // Creates new tree
	   			tree.buildFamilyTree(houses.get(i)); // builds tree out of house
	   			System.out.println(houses.get(i).getName() + ":"); //Prints house name
	   			
	   			tree.printTree(tree.getPatriarch()); // Prints recursive tree from patriarch
	   			tree.resetCount();	// resets the count for white space
	   			System.out.println("\n");
	   			
    			tree.printTree(tree.getMatriarch()); // Prints recursive tree from matriarch
    			tree.resetCount(); // resest the count for white space
    			System.out.println("\n");
	    		}
	    }
	    
	    // this will find a user 
	    
	    if((!s.equals("all")) && (!s.equals("exit") && (!s.toLowerCase().equals("family tree")))) {
	    	
	    	// if character list contains search term, then list battles, and family tree
	    	if(characterList.contains(dummy)) {
	    		
	    		Character c = characterList.get(characterList.index); // get index of character
	    		System.out.println(c.toString());
	    		
	    		c.ListBattles(); // list battles
	    		System.out.println("\r");
	    		
	    		// list lineage
	    		
	    		House currHouse = new House();
	    		
	    		for(int i = 0; i < houses.size(); i++) {
	    			if(c.house.equals(houses.get(i).getName())) { // Loops through houses to find the one that character belongs to
	    				currHouse = houses.get(i);
	    			}
	    		}
	    		
	    		// Builds Tree
	    		System.out.println(c.name + " - Father: " + c.Father + " - Mother: " + c.Mother ); // Prints character mother and father info
	    		FamilyTree currTree = new FamilyTree(); // Builds tree
	    		
	    		currTree.buildFamilyTree(currHouse);
	    		
	    		
	    		
	    		// Prints Father Side
	    		
	    		System.out.println(" Father's Side:");
	    		currTree.lineageToString( currTree.getFather(currTree.findCharacterNode(currTree.getPatriarch(), currTree.setNode(c)) ));
	    		
	    		
	    		System.out.println("\n");
	    		
	    		// Prints Mother Side
	    		System.out.println(" Mother's Side: ");
	    		currTree.lineageToString( currTree.getMother(currTree.findCharacterNode(currTree.getMatriarch(), currTree.setNode(c)) ));
	    		
	    	
	    	}
	    	else {
	    		System.out.println("Character does not exist!");
	    	}
	    
	    }
	    

	   
	    // Checks if input equals "exit" if so, terminates the program
	    
	    else if (s.equals("exit")) {
	    	running = false;
	    	input.close();
			System.out.println("Terminating Program");
	    }    
	    
	    else {
		    // Checks if input equals name from battles and from characters
	    	// Iterates through battles with associated name
	    }
	}
	
	
	
	}
	
	// STATIC METHODS
	
	// Reads Battles csv File

	public static void battlesReader(){
		String filename = "data/battles.csv";
		File file = new File(filename);
		try {
			Scanner scan = new Scanner(file);
			while (scan.hasNext()) {
				String data = scan.nextLine();
				String[] values = data.split(",");
				Battle b = new Battle(values[0], values[1], values[2], values[3], values[4], values[5], values[6]); // takes values from file and adds them to the battles list
				battlesList.addLast(b);
			}
			scan.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	// Reads Character csv File
	
	public static void characterReader(){
		String filename = "data/characters_lineage.csv";
		File file = new File(filename); 
		try {
			Scanner scan = new Scanner(file);
			while (scan.hasNext()) {
				
				
				String data = scan.nextLine();
				String[] values = data.split(",");
				
				// Updates all battles for certain character
				
				sLinkedList<Battle> characterBattlesList = new sLinkedList<Battle>(); // creates instance of battles list for each character 
				for(int i = 0; i < battlesList.size(); i++) {
					Battle b = battlesList.get(i); // checks if character is in battle, if yes adds to character's battle list
					String name = values[0].toLowerCase();
					String king = b.attackerKing.toLowerCase();
					String kingD = b.defenderKing.toLowerCase();
					
					if(name.equals(king) || name.equals(kingD)) {
						 characterBattlesList.addLast(b);
					}
				
				}
				
				Character c = new Character(values[0], values[3], values[1], values[2], characterBattlesList); // Creates new character instance to add to list
				
				if(c.Father.equals("PATRIARCH")) { // checks if character is patriarch of house
					c.isPatriarch = true;
				}
				
				if(c.Mother.equals("MATRIARCH")) { // checks if character is matriarch of house
					c.isMatriarch = true;
				}
				
				characterList.addLast(c); // adds character to list
			}
			

			
			
			scan.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}	
	
	public static void addHouses() {
		for(int i = 0; i < characterList.size(); i++) { // loops through character list to see if there are any houess that havent been made, if yes, adds new house
			
			Character c = characterList.get(i);
			
			if(houses.size() == 0) {
				House newHouse = new House();
				newHouse.setName(c.house);
				houses.addLast(newHouse);
			}
			
			else {
				boolean created = false;
				for(int j = 0; j < houses.size(); j++) {
					House currHouse = houses.get(j);
					if(c.house.equals(currHouse.getName())) {
						created = true;
					}
				}
				if(!created) {
					House newHouse = new House();
					newHouse.setName(c.house);
					houses.addLast(newHouse);
				}
			}
		
		
		}
	}
	
	public static void buildHouses() { 
		for(int i = 0; i < characterList.size(); i++) { // loops through character list and adds character to house linked list with there specified allegiance 
			Character c = characterList.get(i);
			
			for(int j = 0; j < houses.size(); j++) {
			
				House h = houses.get(j);
				
				if(c.house.equals(h.getName())) {
					h.members.addLast(c);
				
				}
			}
		}
	}
	
	public static void buildTrees() {
		for(int i = 0; i < houses.size(); i++) {
			FamilyTree tree = new FamilyTree(); // Creates new tree
			tree.buildFamilyTree(houses.get(i)); // Builds tree using houses

		}
	}


}
