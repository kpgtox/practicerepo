#include <stdio.h>

int main(){

    //-x-

    // //- Modifying an array element:
    // char pet[] = "kat";
    // //An extra element which is a null character is added to an array whena a string is assigned to the array:
    // //the size of the array is not 3 elements its 4:
    // printf("%d\n",sizeof(pet));
    // //printing the array using a format specifier of a string:
    // printf("Before: %s\n",pet);
    // //change the first element of the array:
    // pet[0]='c';
    // //print the array again:
    // printf("After: %s\n",pet);
    
    //-x-

    //Swapping Array elements:
    //An integer array preset to five values:
    //Possible to omit the no. of elements from the declaration:
    // int nums[] = {10,20,30,40,50};
    // int temp, x;

    // printf("Before Swap:\n");
    // for(x=0;x<5;x++){
    //     printf("Element %d: %d\n",x+1,nums[x]);
    // }

    // temp = nums[4];
    // nums[4] = nums[3];
    // nums[3] = temp;

    // printf("After Swap:\n");
    // for(x=0;x<5;x++){
    //     printf("Element %d: %d\n",x+1,nums[x]);
    // }

    //-x-

    //- Printing an uninitialized array:

    // int foo[5];
    // int i;
    // for (i = 0; i < 5; i++)
    // {
    //     //prints garbage values for an uninitialised array:
    //     printf("%d\n",foo[i]);
    // }

    //-x-

    //- Copying an array:
    //Duplication works because botht the arrays are of same data type and have same element size.
    // int foo[5] = {10,20,30,40,50};
    // int dfoo[5];
    // int i, count=5;
    // for (i = 0; i < count; i++)
    // {
    //     dfoo[i] = foo[i];
    // }
    
    // //function to print a string without the null character, new line character is appended to he output:
    // puts("Array Values:");

    // for ( i = 0; i < count; i++)
    // {
    //     printf("Element %d: ,Original: %d, Duplicate: %d\n",i,foo[i],dfoo[i]);
    // }

    //-x-
}

