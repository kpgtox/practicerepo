#include <stdio.h>

//A typewriter program, which prints the provided input immediately.
//getchar(): This function returns the character read as an unsigned char cast to an int or EOF on end of file or error.
//An unsigned characcter is when an ascii value of character is taken and cutting off any negative sign if any. 
//EOF constant is an integer, EOF is the value returned when the end of file is read. used to break out of the infinite while loop here:
//EOF character in windows is ctrl+z, mac: ctrl+d.
//The reason for getchar() returning an integer is, If the output of getchar() is assigned to a character variable instead of an integer variable then
//compiler might not detect an EOF key input.

int main()
{
	int a;

	while(1)
	{
		a = getchar();
		if(a == EOF)
			break;
		putchar(a);
	};

	return(0);
}
