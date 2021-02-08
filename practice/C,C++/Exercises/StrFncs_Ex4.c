//Searches for one string inside another;
//First argument is the target string(the string to be searched in) informally known as the haystack, the second argument is the search string(string to search) called needle;
//returns character pointer NULL if the string isn't located, otherwise the location in haystack where needle is found; 

#include <stdio.h>
#include <string.h>

int main()
{
	char needle[] = "heart";
	char haystack[] = "Get to the heart of the matter";
	char *found;

	found = strstr(haystack,needle);
	if(found == NULL)
		printf("The string \"%s\" was not found in \"%s\".\n",
				needle,
				haystack
			  );
	else
		printf("The string \"%s\" was found at offset %ld in \"%s\".\n",
				needle,
                //apparently this subtraction results in the element number/index of the string 'needle'
                //gota figure how:
				found-haystack,
				haystack
			  );

	return(0);
}
