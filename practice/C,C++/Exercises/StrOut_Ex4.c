//Print a string one element at a time:
//Iterate a character array:
//the null character \0 is interpreted as false by the compiler, so the loop will stop once the compiler reaches the 
//end of the character array, where the last element is a null character '\0'
//You can insert the increment operation in the array's argument itself:

#include <stdio.h>

int main()
{
	char string[] = "I'm such a handsome program!\n";
	int a;

	a = 0;
	while( putchar(string[a++]) )
		;

	return(0);
}

