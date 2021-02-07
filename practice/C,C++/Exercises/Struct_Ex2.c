#include <stdio.h>

//Declaring a variable of struct type along with initialization:

int main()
{
	struct pixel {
		int horz;
		int vert;
		char color;
	} center = { 320, 240, 'r' }; //Quickly initialize the variable center with values for its members.

	printf("The pixel at %d,%d is colored ",
			center.horz,
			center.vert
		  );

	switch(center.color)
	{
		case 'r':
			puts("red");
			break;
		case 'g':
			puts("green");
			break;
		case 'b':
			puts("blue");
			break;
		default:
			puts("Invalid");
	}

	return(0);
}

