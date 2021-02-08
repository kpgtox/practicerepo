//Determine the length of the string variable or a string literal
//strlen()
//Single argument, a string variable or a string literal; Returns an integer (size_t) value; Length doesn't include double quotes or null character; escape characters within the string such as \n for new line are counted as single characters.

#include <stdio.h>
#include <string.h>

int main()
{
	char string[] = "Hello, you happy planet.";
	int len;

	len = strlen(string);
	printf("The string \"%s\" is %d characters long.\n",string,len);

	return(0);
}

