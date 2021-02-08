#include <stdio.h>
#include <ctype.h>

//Convert every character in the array called string to uppwercase as long as if its not a null character:

int main()
{
	char string[] = "stop shouting at me!\n";
	int ch;
	int x = 0;

	while( (ch = string[x]) != '\0' )
	{
		putchar( toupper(ch) );
		x++;
	}

	return(0);
}
