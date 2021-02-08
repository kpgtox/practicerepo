#include <stdio.h>


//Read a character from the keyboard:
//Character read from the keyboard is saved as an integer not character type.

int main()
{
	int ch;

	printf("Type a character: ");
	ch = getchar(); //getchar() method returns an integer
	//yet format speicifer for a character is used in the printf:
	printf("Character '%c' received.\n",ch);

	return(0);
}
