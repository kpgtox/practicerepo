#include <stdio.h>

//Similar to gerchar() method to read a single character:
//Both getchar() and getc() returns an integer:
//here the input source is the argument, stdin is standard input source, which is the keyboard:

int main()
{
	int ch1,ch2;

	printf("Type two characters: ");
	ch1 = getc(stdin);
	ch2 = getc(stdin);
	printf("Characters '%c' and '%c' received.\n",ch1,ch2);

	return(0);
}
