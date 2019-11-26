import java.util.ArrayList;
import java.util.Collections;

public class MyArrayList<E extends Comparable<E>> extends ArrayList<E>{
	
	public int searchIndex;
	
	public void sort() {
		Collections.sort(this);
	}
	
	public boolean isSorted()
	{
	    boolean sorted = true;        
	    for (int i = 1; i < this.size(); i++) {
	        if (this.get(i-1).compareTo(this.get(i)) > 0) sorted = false;
	    }

	    return sorted;
	}
	
	public boolean contains(E o) {
			if(isSorted()) {
				if(binarySearch(o)) {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				if(this.linearSearch(o)) {
					return true;
				}
				else {
					return false;
				}
			}
	}
	
	public int getIndex() {
		return searchIndex;
	}
	
	public boolean linearSearch(Object o) {
		if(super.contains(o)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	
	public boolean binarySearch (E key) {
		int start = 0;
		int end = this.size()-1;
		
		while(end >= start) {
			int mid = (end+start) / 2;
			int index = this.get(mid).compareTo(key);
			if(index == 0) {
				searchIndex = (start + end) / 2;
				return true;
			}
			if(index > 0) {
				end = mid - 1;
			}
			if(index < 0) { 
				start = mid + 1;
			}
		}
		return false;
	}
}
	