#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// -Functions cannot return plain arrays as it is.
//One thing you obviously can't do with an array is return it from a function. 
//Returning an array is not an impossible task as long as you do it one element at a time, but if you want to create an array in a function and then return it, you can only do it using pointers instead of array notation.

int makeArray(void){
    int array[5];
    int i;
    for (i = 0; i < 5; i++){
        //% operator output is remainders, use this to limit the output to a max range, here from 0 to 10.
        array[i] = rand() % 10 + 1;
    }
    return array;
}

int main(){

    int i, roo[5];

    //Use current time as seed for random generator:
    //srand to be called once before rand() with a different seed everytime to create different sequence everytime:
    srand((unsigned)time(NULL));
    //prtins a string, appends new line automatically:
    puts("Here are your 5 random numbers:");
    //entire arrays cant be assigned like this:
    roo = makeArray(); //error
    
    for (i = 0; i < 5; i++){
        printf("%d\n",roo[i]);
    }   
}