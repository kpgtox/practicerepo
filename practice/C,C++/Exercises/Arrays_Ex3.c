#include <stdio.h>


//- Passing array elements to a function individually
//Doesnt alter the elements in the original array.
//Also incrementing characters:

void Incr_Show(char a){
    //incrementing a character means choosing the next alphabet:
    a++;
    //function to print a single character, newline is not appended to the output:
    putchar(a);
}

int main(){

    char foo[] = "Gdkkn";
    int i;
    //size of an array when a string is assigned to it always includes an extra element in the array which is a null character:
    int count = sizeof(foo)-1;
    for (i = 0; i < count; i++)
    {
        Incr_Show(foo[i]);
    }
    return 0;
}