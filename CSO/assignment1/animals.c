#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "node_utils.h"

#define BOOL int
#define TRUE 1
#define FALSE 0
#define MAX_LEN 200

NODE *root = NULL;

// Returns true if user types "yes" or "y" (upper or lower case)
// and returns false if user types "no" or "n". Keeps
// prompting otherwise.

BOOL yes_response()
{

  //Fill in the code 
  //Hint: You might consider using the C library function strcasecmp()

  char response[MAX_LEN];
  scanf ("%s", response);
  fflush (stdin);
  if (strcasecmp(response, "yes") == 0 || strcasecmp(response, "y") == 0) 
  {
    return 1;
  }

  if (strcasecmp(response, "no") == 0 || strcasecmp(response, "n") == 0) 
  {
    return 0;
  }

  printf("Please enter 'yes' or 'no' > ");
  yes_response();

}

// This procedure creates a new NODE and copies
// the contents of string s into the 
// question_or_animal field.  It also initializes
// the left and right fields to NULL.
// It should return a pointer to the new node

NODE *new_node(char *s)
{
  NODE *n;
  n = (NODE *) malloc(sizeof(NODE));
  strcpy(n->question_or_animal, s);
  n->left = NULL;
  n->right = NULL;

  return n;
  //Fill in the code
}

// This is the procedure that performs the guessing.
// If the animal is not correctly guessed, it prompts
// the user for the name of the animal and inserts a
// new node for that animal into the tree.

void guess_animal()
{
  // If the root is NULL, then there are no animals in 
  // the tree. Prompt the player for the name of an 
  // animal, create a node for that animal, and make
  // that node the root of the tree.

  //FILL IN CODE HERE
    if (root == NULL) 
    {
      char response[MAX_LEN];

      printf("Please enter an Animal Name > ");
      fgets(response, MAX_LEN, stdin); 
      
      root = new_node(response);
      printf("New animal %s", root->question_or_animal);
    }
    /*
      Otherwise (i.e. if the root is not NULL)
      Then descend down the tree. At each node encountered:

      If the left and right fields of the node are not NULL, i.e. the node
      is an interior node and must contain a question, then:
      - print the question_or_answer field, which will be a yes/no question.
      - read the response from the user
      - If the response is yes, follow the left field to the next node. Otherwise,
        follow the right field.
    */

  //FILL IN CODE HERE

    else
    {

      if (root->left != NULL)
      {
        strtok(root->question_or_animal, "\n");
        printf("%s (y/n) > ", root->question_or_animal);
        if(yes_response()){
          root = root->left;
          guess_animal();
        }
        else 
        {
          root = root->right;
          guess_animal();
        }
      } 

  /*
      Otherwise, if the left and right fields are NULL (i.e. the node is a leaf), 
      then the question_or_animal field contains an animal. Print the
      the question_or_animal field as the guess and prompt the user
      if the guess was correct. If the guess was correct, then 
      return. Otherwise, do the following:
           - prompt the user for the name of the new animal she was thinking of
           - prompt the user for a yes or no question distinguishing the new animal from the guessed animal
	         - ask the user what the answer for the new animal would be (yes or no)
           - create a new node with the new animal in the question_or_animal field
	         - create another new node that has the guessed animal in the question_or_animal field
           - make the two new nodes the children of the current node, where the animal for which the
             answer to the question is "yes" is the left child and the other animal is the right child.
           - overwrite the question_or_animal field of the current node with the new question.

      Note that the tree is a stricly binary tree, i.e. left and right fields of each node are either both NULL or 
      both valid pointers to child nodes (in other words, each node is a leaf or has exactly two children).
    */

  //FILL IN CODE HERE
    else {
      char animal[MAX_LEN];
      char question[MAX_LEN];
      printf("I'm thinking of... %s \n", root->question_or_animal);
      printf("Am I right ? (y/n) > ");
      if(yes_response())
      {
        printf("I win!");
      }
      else {
        printf("oops.. what animal were you thinking of? > ");
        scanf("%s", animal);
        fflush (stdin);
        printf("Enter a yes/no question to distinguish between a %s and a %s > ", animal, root->question_or_animal);
        getchar();
        fgets(question, MAX_LEN, stdin); 
        printf("What is the answer for a %s (yes or no) > ", animal);
        if(yes_response()){
          NODE *animal_node;
          animal_node = new_node(animal);
          NODE *guessed_node;
          guessed_node = new_node(root->question_or_animal);
          root->left = animal_node;
          root->right = guessed_node;
          strcpy(root->question_or_animal, question);
          return;
        }
        else{
          NODE *animal_node;
          animal_node = new_node(animal);
          NODE *guessed_node;
          guessed_node = new_node(root->question_or_animal);
          root->left = guessed_node;
          root->right = animal_node;
          strcpy(root->question_or_animal, question);
          return;
        }
      }

    }

    }

}



//This code is complete. Just add comments where indicated.

int main()
{ int i;
  BOOL done = FALSE;

  //insert comment here
  FILE *datafile = fopen("data.dat", "r"); 

  if (datafile == NULL) {
    printf("data.dat not found\n");
    exit(1);
  }

  //insert comment here
  FILE *backupfile = fopen("data.dat.bak", "w");

  //insert comment here
  root = read_tree(datafile);

  //call write_tree() to write the initial tree to the
  //backup file (i.e. to backup the tree data)
  write_tree(root,backupfile);

  //close both files (for now)
  fclose(backupfile);
  fclose(datafile);

  printf("Welcome to the animal guessing game (like 20 questions).\n");
  do { 
    printf("\nThink of an animal...\n");
    guess_animal();  //insert comment here
    printf("\nDo you want to play again? (yes/no) > ");
  } while (yes_response());  //insert comment here


  //now open the "data.dat" file for writing
  datafile = fopen("data.dat", "w");

  //insert comment
  write_tree(root, datafile);

  //close the data.dat file
  fclose(datafile);

}

