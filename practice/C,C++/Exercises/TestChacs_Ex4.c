#include <stdio.h>
#include <ctype.h>

//Detect lower case characters from the string:

int main()
{
	char string[] = "Nifty TEXT! 123\n";
	char ch;
	int x = 0;

	while( (ch = string[x]) != '\0' )
	{
		if( islower(ch) )
			putchar('_');
		else
			putchar(ch);
		x++;
	}

	return(0);
}
