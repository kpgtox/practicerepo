#include <stdio.h>

//Read only specific number of characters in the scanf() method:
//Safe method to truncare extra characters:
//Scanf will stop working when it reads a whitespace.

int main()
{
	char input[10];

	printf("Your name? ");
    //only 9 characters are read no matter how many are entered:
	scanf("%9s",input);
	printf("Pleased to meet you, %s!\n",input);

	return(0);
}

