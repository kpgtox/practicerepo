#include <stdio.h>

int main(){

    //- Generate a platform for tic tac toe, but leaning to the right:

    char ticTacToe[3][3];

    int i,j;
    int count = 3;
    //Initialize:
    for(i=0;i<count;i++)
        for(j=0;j<count;j++)
            ticTacToe[i][j] = '.';


    //print:
    for(i=0;i<count;i++){
        printf("%*c",i+1,' ');
        for(j=0;j<count;j++)
            printf(" %c ",ticTacToe[i][j]);
        putchar('\n');
    }
    return 0;
}