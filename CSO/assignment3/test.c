void insert_node(NODE *new_n)
{

  // If the tree is empty, then set root to
  // point to the new node.
  if (root == NULL) {
    root = new_n;
    return;
  }

  // p will be used to traverse the tree to find
  // the place to insert the new node.

  NODE *p = root;

  // The tree traversal is in an infinite loop, which
  // we will "break" out from when the traversal
  // is done.
  
  while(1) {

  // If a person with the same id is enountered,
  // then break out of the loop (rather than insert
  // a redundant employee record).
    
    if (new_n->person.id == p->person.id) {
      break;
    }

    // Compare the last name in the new node with the
    // last name in the current node (i.e. the node
    // pointed to by p).

    int res = strcmp(new_n->person.last, p->person.last);

    // If the two last names are the same, then compare the
    // first names.  
    
    if (res == 0) 
      res = strcmp(new_n->person.first, p->person.first);

    // At this point, res < 0 indicates that the new node
    // comes before (alphabetically) the current node, and
    // thus must inserted into the left subtree of p.

    if (res < 0) {

      // If p does not have a left child, then new node
      // becomes the left child.
      
      if (p->left == NULL) {
        	p->left = new_n;
        	break;
              }
      else {

	// otherwise, traverse down the left subtree.
	
	p = p->left;
      }
    }

    // Otherwise, if res >= 0, the new node goes in the
    // right subtree.
    
    else {

      // If p does not have a right child, then new node
      // becomes the right child.
      
      if (p->right == NULL) {
	p->right = new_n;
	break;
      }
      else {

	// otherwise, traverse down the right subtree.	
	
	p = p->right;
      }
    }
  }
}