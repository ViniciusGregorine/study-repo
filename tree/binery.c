#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
	int data;

	struct Node* left;
	struct Node* right;

} Node;

int main(){
	int i;

	int array[8] = {100, 34, 84, 15, 0, 1, 2, 88};

	Node *root = NULL;

	for(i = 0; i< 13; i++){
		root = insert(root, array[i]);
		printf("Inserted: %d\n", array[i]);	
	}
	
	int temp = search(root, 88);

	if(temp){

	printf("");
	}
}
