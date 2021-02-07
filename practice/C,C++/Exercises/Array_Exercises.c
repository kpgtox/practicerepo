#include<stdio.h>
#include<stddef.h>

int main(){

//-x-
    //Read five numbers and print them using for loop:

    float scores[5];

    //Read scores:
    int x;
    for (x = 0; x < 5; x++) //start count with 0
    {
        printf("Enter score number %d: ",x+1); //but increment count with 1 in the beginning for human readability.
        scanf("%f",&scores[x]);
    }
    //print a string as a message:
    puts("Here are the scores entered:"); 
    //Print scores:
    for (x = 0; x < 5; x++)
    {
        printf("Score number %d: %.2f\n ",x+1,scores[x]);
    }
//-x-




}
