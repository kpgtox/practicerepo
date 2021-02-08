#include <stdio.h>
#include <ctype.h>

//Check every character in a string and Output only the digits:
//isdigit() - character is a number 0-9.


int main()
{
	char string[] = "Nifty TEXT! 123\n";
	char ch;
	int x = 0;

	while( (ch = string[x]) != '\0' )
	{
		if( isdigit(ch) )
			putchar('_');
		else
			putchar(ch);
		x++;
	}

	return(0);
}
