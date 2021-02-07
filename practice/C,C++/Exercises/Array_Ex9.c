#include <stdio.h>

int main()
{
    //Printing a cube matrix array, but slanting to the right:
    
	char tictactoe[3][3][3];
	int x,y,z;

	/* initialize */
	for(x=0;x<3;x++)
		for(y=0;y<3;y++)
			for(z=0;z<3;z++)
				tictactoe[x][y][z] = '.';

	/* display */
    //A 3x3 array contians 27 elements here all of them are assigned a '.'
    //By using three loops we divide the entire array in three 3x3 matrices.
    //By using 3 nested for loops, we print the entire row for all three matrics and go to the next line.
    //Every time the compiler prints on a row it starts with allocating x+1 number of spaces.
    //Also after every single 3x3 matrix is printed there is another 5 spaces manually provided.

	for(x=0;x<3;x++)
	{
		printf("%*c",x+1,' ');
		for(y=0;y<3;y++)
		{
			for(z=0;z<3;z++)
				printf(" %c ",tictactoe[x][y][z]);
			printf("     ");	/* 5 spaces */
		}
		putchar('\n');
	}

	return(0);
}
