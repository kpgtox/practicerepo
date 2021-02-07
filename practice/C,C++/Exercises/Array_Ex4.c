#include <stdio.h>


//- Passing an entire array to a function:
//Any changes made in the function aters the original array.

void Incr_Show(char x[]){
    int i;
    int count = sizeof(x)-1;
    for (i = 0; i < count; i++)
    {
        //incrementing every charcter in the original array:
        x[i]++;
        //optional printing of a character:
        //putchar(x);
    }    
}

int main(){

    char foo[] = "Gdkkn";
    printf("Before passing the array to a funtion:\n");
    puts(foo);
    //printf("%s\n",foo);
    Incr_Show(foo);
    printf("After passing the array to a funtion:\n");
    puts(foo);
    return 0;
}
