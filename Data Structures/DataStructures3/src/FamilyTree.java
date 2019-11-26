
public class FamilyTree {

	public class CharacterNode implements java.lang.Comparable<CharacterNode>{
		
		public Character character; // character value of node
		private CharacterNode father; // characters father value
		private CharacterNode mother; // characters mother value
		public sLinkedList<CharacterNode> children = new sLinkedList<CharacterNode>(); // Linked list of kids
		
		
		
		private CharacterNode(Character character) {
			this.character = character; // creates character node with character parameter
		}
		
		private CharacterNode() { // creates character node without character parameter
		}
		
		// this does nothing really 
		
		@Override
		public int compareTo(CharacterNode o) {
			return this.character.compareTo(o.character);
		}
		
		
	}
	
	private CharacterNode patriarch; // patriarch of house
	private CharacterNode matriarch; // matriarch of house
	private int count; // count for white space used during printTree

	// resets whitespace count
	public void resetCount() { 
		this.count = 0;
	}
	
	// Loops through house members and attaches nodes of father and mother to their children  
	
	public void getChildren(CharacterNode c, House h) {
		for(int i = 0; i < h.members.size(); i++) {
			
			Character currChar = h.members.get(i);
			CharacterNode newNode = new CharacterNode(currChar);
			
			if( (c.character.name).equals(currChar.Father)) {
				newNode.father = c;
				getChildren(newNode, h);
				c.children.addLast(newNode);
				
			}
			
			if( (c.character.name).equals(currChar.Mother)) {
				newNode.mother = c;
				getChildren(newNode, h);
				c.children.addLast(newNode);
				
			}
		}
	}
	
	// builds house for all members
	
	public void buildFamilyTree(House h) {
		
		// Loops through all character in a house and checks if they are matriarch or patriarch of house, then creates a linked list of children
		
		for(int i = 0; i < h.members.size(); i++) {
			CharacterNode c = new CharacterNode(h.members.get(i));
			
			// Checks if charachter is patriarch
			if(c.character.isPatriarch == true) {
				this.patriarch = c;
			}
			
			// Checks is character is matriarch
			if(c.character.isMatriarch == true) {
				this.matriarch = c;
			}
			// gets the children of character c and adds them to the children linked list
			getChildren(c, h);
		}
		
	}

	
	// Recursive method for printing family lineage 
	
	public void printTree(CharacterNode c) {
		
		if(c.children.size() == 0) {
			System.out.println(addIndents(count) + toString(c));
		}
		
		else {
			if(c.character.isPatriarch) {
				System.out.println("Patriarch: " + c.character.name);
				count = count + 1;
			}
			else if(c.character.isMatriarch) {
				System.out.println("Matriarch: " + c.character.name);
				count = count + 1;
			}
			else {
				System.out.println(addIndents(count) + toString(c));
				count = count + 1;
			}
			for(int i = 0; i < c.children.size(); i++) {
				CharacterNode child = c.children.get(i);
				if(child.children.size() == 0) {
					System.out.println(addIndents(count) + toString(child));
				}
				else
				{
					printTree(child);
					count = count - 1;
				}
			
			}
		
		}
		
	}
	
	
	// adds Indents to printTree method 
	
	public String addIndents(int count) {
		String whiteSpace = "";
		for(int i = 0; i <= count; i++) {
			whiteSpace = whiteSpace + "    ";
		}
		return whiteSpace;
	}
	
	// Returns character node to string
	public String toString(CharacterNode c) {
		return(c.character.name + " - Father: " + c.character.Father + " -Mother: " + c.character.Mother);
	}
	
	
	// Recursive method that finds characterNode and returns it
	
	public CharacterNode findCharacterNode(CharacterNode root, CharacterNode ch) {
		CharacterNode current = null;
	    if (root.character.name.equals(ch.character.name)) {
	        return root; // returns value that matches character name
	    } else {
	        for (int i = 0; i < root.children.size(); i ++) {
	            CharacterNode result = findCharacterNode(root.children.get(i), ch); 
	            if (result != null) {
	                return result;
	            }
	        }
	    }
	    return current;
	}

	
	
	// recursive method for printing lineage of certain character
	
	public void lineageToString(CharacterNode c) {
		if (c == null) {
			return; // returns if Node is null
		}
		
		// Prints Patriarch then ends
		 if(c.character.isPatriarch) {
			System.out.println(" - " + c.character.name + " -father: " + c.character.Father + " -mother: " + c.character.Mother);
			return;
		}
		 
		// Prints matriarch then ends
		else if(c.character.isMatriarch) {
			System.out.println(" - " + c.character.name + " -father: " + c.character.Father + " -mother: " + c.character.Mother);
			return;
		}
		
		else {
			System.out.println(" - " + c.character.name + " -father: " + c.character.Father + " -mother: " + c.character.Mother);

			// gets lineage of father and mother
			lineageToString(this.getFather(c));
			lineageToString(this.getMother(c));
		}
	}
	
	// Method for setting node through main
	
	public CharacterNode setNode(Character c) {
		CharacterNode temp = new CharacterNode(c);
		return temp;
	}
	
	// Method for getting Father Node through main by using FindCharacter Mehtod
	
	public CharacterNode getFather(CharacterNode c) {
		CharacterNode temp = new CharacterNode(); // initializes temporary node
		temp.character = new Character(c.character.Father, null, null, null, null); // assigns node with character of father
		return(findCharacterNode(this.patriarch, temp)); // Searches for father by name
	}
	
	// Searches through character tree from matriarch to find character mother node
	
	public CharacterNode getMother(CharacterNode c) {
		CharacterNode temp = new CharacterNode();
		temp.character = new Character(c.character.Mother, null, null, null, null);
		return(findCharacterNode(this.matriarch, temp));
	}
	
	
	// Method for getting patriarch in the main method
	
	public CharacterNode getPatriarch() {
		 return(this.patriarch);
	}
	
	
	// Method for getting matriarch in the main method
	
	public CharacterNode getMatriarch() {
		return(this.matriarch);
	}
}
		
	

