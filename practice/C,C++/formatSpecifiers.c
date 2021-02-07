#include <stdio.h>

int main(int argc, char *argv[]){

    //print to 2 decimal places:
    float x = 1212.222221211;
    printf("%.2f\n", x);

    //print to 3 decimal places:
    float y = 1212.222221211;
    printf("%.3f\n", y);

    printf("%d\n", argc);
    printf("%s\n", argv);

    return 0;
}