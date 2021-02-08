#include <stdio.h>

//Characters read from the standard input flow from the stream which isn't interactive, if there are two times getchar() function I s used in the program, the compiler will let us input the character only once not twice, it will try to take both the characters in the single input. 
//The second character will be supplied to the second getchar() statement.
//Try entering only one character first and run the program again and enter two characters this time, observe the two outcomes:

//getchar() method returns an integer

int main()
{
	int ch1,ch2;

	printf("Type a character: ");
	ch1 = getchar();
	printf("Type a character: ");
	ch2 = getchar();
	printf("Characters '%c' and '%c' received.\n",ch1,ch2);

	return(0);
}
