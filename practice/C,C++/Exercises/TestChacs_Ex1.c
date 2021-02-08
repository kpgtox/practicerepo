#include <stdio.h>
#include <ctype.h>

//Output an _ for every character that is alphabet:
//isalpha() : character is a letter of the alphabet.


int main()
{
	char string[] = "Nifty TEXT! 123\n";
	char ch;
	int x = 0;

	while( (ch = string[x]) != '\0' )
	{
		if( isalpha(ch) )
			putchar('_');
		else
			putchar(ch);
		x++;
	}

	return(0);
}
