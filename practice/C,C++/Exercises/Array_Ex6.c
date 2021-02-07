#include <stdio.h>

int main(){

    //- 2 Dimensional Arrays:

    //Assign values to every element in a 2D array:
    //The first dimension represents rows and the second dimension which is 2 represents columns:
    int grid[5][2];
    int i;
    for (i = 0; i < 5; i++)
    {
        //first column:
        grid[i][0] = i+1;
        //second column:
        grid[i][1] = grid[i][0] * 10;
    }

    puts("Print all the elements of a 2D array in a linear manner, along with every element's index:");
    int x,y;
    for (x = 0; x < 5 ; x++)
    {
        for (y = 0; y < 2; y++)
        {
          printf("[%d][%d] : %d\n",x,y,grid[x][y]);
        }
    }
    
    puts("Print a 2D array in the form of a table using a single for loop:");
    //here We are printing the 2D array grid[5][2] with 5 rows and 2 columns:
    for (i = 0; i < 5; i++)
    {
        printf("%d : %d\n",grid[i][0],grid[i][1]);
    }
    
    puts("Print a 2D array in the form of a table using two for loops:");
    //Another way of printing 2D arrays:
    //The first loop for rows and the second loop for columns:
    //Just decrease the column number by 1 in the second loop for it to work:
    //The follwing nested for loops prints a 5 row 2 column table.
    for(x=0;x<5;x++){
        for(y=0;y<2;y++)
            printf("%d ",grid[x][y]);
        putchar('\n');
    }
    return 0;
}