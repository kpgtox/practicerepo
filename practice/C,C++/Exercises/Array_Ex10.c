#include <stdio.h>

//Printing a 3x3x3 cube matrix array using only a single dim array:
//Basically a specific pattern.

int main()
{
	char tictactoe[9];
	int x,y,z;

	/* initialize */
	for(x=0;x<3;x++)
		for(y=0;y<3;y++)
			for(z=0;z<3;z++)
				tictactoe[x+y+z] = '.';

	/* display */
	puts("Tic Tac Toe");
	for(x=0;x<3;x++)
	{
		printf("%*c",x+1,' ');
		for(y=0;y<3;y++)
		{
			for(z=0;z<3;z++)
				//printf(" %c ",tictactoe[x+y+z]);
                //or:
                printf(" %c ",'.');
			printf("     ");	/* 5 spaces */
		}
		putchar('\n');
	}

	return(0);
}
