#include <stdio.h>

//Print a string one element at a time:
//Iterate a character array:
//the null character \0 is interpreted as false by the compiler, so the loop will stop once the compiler reaches the 
//end of the character array, where the last element is a null character '\0'

int main()
{
	char string[] = "I'm such a handsome program!\n";
	int a;

	a = 0;
	while( putchar(string[a]) )
	{
		a++;
	}

	return(0);
}

