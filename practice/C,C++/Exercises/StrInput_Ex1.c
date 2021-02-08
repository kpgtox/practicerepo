#include <stdio.h>

// Read a string and store it in an array directly:

int main()
{
	char input[10];

	printf("Your name? ");
    //& is not needed to reading input when you are reading it into an array:
	scanf("%s",input);
	printf("Pleased to meet you, %s!\n",input);

	return(0);
}

