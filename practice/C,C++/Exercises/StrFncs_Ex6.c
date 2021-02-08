//Copying a string into another:
//Make sure the duplicate string has more than enough room to copy the original string into it.

#include <stdio.h>
#include <string.h>

int main()
{
	char original[] = "Am I the original?";
	char duplicate[] = "This is the duplicate";

	printf("Here is the original string: %s\n",original);
	printf("Here is the duplicate: %s\n",duplicate);
	strcpy(duplicate,original);
    //Printing the duplicate to check whether the original string is copied into it:
	printf("And now this is the duplicate: %s\n",duplicate);

	return(0);
}
