#include <stdio.h>

//Another way of reading input, fgets()
//arguments are: buffer to store input, size of the buffer, input source.
//The function reads one fewer characters than the size of the buffer provided. 
//Unlike scanf() this method reads in whitespaces too. 
//Overflowing is avoided by truncating the extra characters.

int main()
{
	char input[10];

	printf("Your name? ");
	fgets(input,10,stdin);
	printf("Pleased to meet you, %s!\n",input);

	return(0);
}

