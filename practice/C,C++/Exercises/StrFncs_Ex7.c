//String copy
//Deliberately making the duplicate buffer small to make array overflow happen:
//Even if the program works corrctly, it is dangerous to assume so.
//There's no feedback on the screen to show you that a buffer overflow has happened.

#include <stdio.h>
#include <string.h>

int main()
{
	char original[] = "Am I the original?";
	char duplicate[] = "Overwritten";

	printf("Here is the original string: %s\n",original);
	strcpy(duplicate,original);
	printf("Here is the duplicate: %s\n",duplicate);

	return(0);
}
