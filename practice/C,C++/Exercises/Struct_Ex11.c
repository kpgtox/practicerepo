#include <stdio.h>

//Swapping elements of an array of type struct:

int main(){

    struct pixel
    {
        int hor;
        int ver;
        char color;
    };
    struct pixel box[3] = {
        {10,10,'r'},
        {20,20,'g'},
        {30,30,'b'},
    };

    puts("Before Swap:");
    int i;
    for(i=0;i<3;i++){
        printf("box[%d]: %d %d %c\n",i+1,box[i].hor,box[i].ver,box[i].color);
    }
    
    struct pixel temp;
    temp = box[2];
    box[2] = box[1];
    box[1] = temp;

    puts("After Swap:");
    for(i=0;i<3;i++){
        printf("box[%d]: %d %d %c\n",i+1,box[i].hor,box[i].ver,box[i].color);
    }

    return 0;
}