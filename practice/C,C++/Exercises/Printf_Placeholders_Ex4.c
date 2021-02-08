#include <stdio.h>

int main()
{
	char string[] = "Deadly spiders!";

	puts("String displayed with %s:");
	printf("%s\n",string);
    //right justified format:
	puts("String displayed in a 24-character width:");
	printf("%24s\n",string);
    //left justified format:
	puts("24-character width, left-justified:");
	printf("%-24s\n",string);
    //right width with only first six characters of the string considered.
	puts("24-character width, 6-character truncated:");
	printf("%24.6s\n",string);
    //left width with only first six characters of the string considered.
	puts("24-character width, 6-character truncated, left-justified:");
	printf("%-24.6s\n",string);

	return(0);
}

