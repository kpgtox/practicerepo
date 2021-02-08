#include <stdio.h>
#include <ctype.h>

//Convert every character to lower case as long as its not a null character:

int main()
{
    //An entire string can be assigned to an array without specifying the size to the array also:
	char string[] = "My aunt types her email in ALL CAPS.\n";
	int ch;
	int x = 0;

	while( (ch = string[x]) != '\0' )
	{
		putchar( tolower(ch) );
		x++;
	}

	return(0);
}
