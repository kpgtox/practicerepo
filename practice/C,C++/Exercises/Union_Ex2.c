#include <stdio.h>

//Union example but checking to see how the members take space:
//The members of union share the sam sotrage space.
//Modifying one member of a union can affect other members.

int main()
{
	union storage {
		char a;
		int b;
	} reg;

	reg.a = 'A';
	printf("reg.a stores %c\n",reg.a);

	reg.b = 1346;
	printf("reg.b stores %d\n",reg.b);
    //Checking what is contained in the member 'a' of reg of type storage:
    //Since both members share the same storage space, after the second member is assigned a value, the first member's value is modified:
	printf("reg.a stores %c\n",reg.a);

	return(0);
}

