#include <stdio.h>

//Output every alement of a string.
//White space character is not the same as a null \0 character. white space character also takes a slot in the array.
//putchar and putc outputs a charater.
//puts outputs a string along with new line in the end.

int main()
{
	char string[] = "I'm such a handsome program!\n";
	int a;

	a = 0;
	while( string[a] != '\0' )
	{
		putchar( string[a] );
		a++;
	}

	return(0);
}

