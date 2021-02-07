#include <stdio.h>

//passing a structure to a function:
//A struct variable can be passed to a user defined function only if the struct is declared outside the main function.

struct pixel {
	int horz;
	int vert;
	char color;
};

//Prototype meaning a function declared but not defined:
//Make sure to reference the structure variable in the function after the structure is defined, like its done above:
void show_pixel(struct pixel p);

int main()
{
	struct pixel center;

	center.horz = 320;
	center.vert = 240;
	center.color = 'r';

	show_pixel(center);

	return(0);
}

void show_pixel(struct pixel p)
{
	printf("Pixel found at %d,%d, color = ",
			p.horz,
			p.vert
		  );
	switch(p.color)
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
}

