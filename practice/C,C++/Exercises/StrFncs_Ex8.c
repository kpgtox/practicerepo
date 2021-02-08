//String concatenation:
//the first is a string or a character buffer to which the second string is appended; the first string or buffer must have enough storage space to accommodate both strings 

#include <stdio.h>
#include <string.h>

int main()
{
	char first[16] = "George";
	char last[16] = "Washington";
	char full[32];

	strcpy(full,first);
	strcat(full,last);

	printf("Pleased to meet you, %s\n",full);

	return(0);
}
