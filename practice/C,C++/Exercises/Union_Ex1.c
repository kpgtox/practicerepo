#include <stdio.h>

//Using a Union in C:
//A union looks like a structure but its not a structure.

int main()
{
    //The two members share the same storage space;
	union storage {
		char a;
		int b;
	} reg; //reg is a variable of type storage.

	reg.a = 'A';
	printf("reg.a stores %c\n",reg.a);

	reg.b = 1346;
	printf("reg.b stores %d\n",reg.b);

	return(0);
}

