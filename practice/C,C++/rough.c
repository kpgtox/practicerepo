#include <stdio.h>
//needed for write function:
#include <unistd.h>
//for null pointers:
#include <stddef.h>

int PrintChar(char c){
    write(1,&c,1);
    return 0;
}

int main(){

    //write function to print a character:
    //write(1,"karthik",8);
    //write function to print 2 characters, second one is new line, an escape character:
    //write(1,"K\n",1);

    //Call user defined function which uses the write func to print a character:
    //PrintChar('Z');
    //Pass in an escape character:
    //PrintChar('\n');

    /*
    //read function to read input from the terminal:
    char buf[10];
    int ret;
    ret = read(0,buf,10);
    printf("%s\n",buf);
    //Go the dir where this file is stored andrun the following commandsin the terminal:
    //create an executable rough from the source fle rough.c:
    // gcc -o rough rough.c
    //run the executable rough:
    // ./rough
    //if you enter a string it will be stored in the buf variable and will be printed out.
    //it can only print as much as the buf variable holds.
    */

    /*
    //Assigning multiple addresses to the same Pointer and performing increment operation:
    long n1=0L;
    long n2=0L;
    long *pn = NULL;

    pn = &n1;
    *pn = 2L;
    //printf("%d\n",*pn);
    //printf("%d\n",n1);

    ++n2;
    n2 += *pn;
    printf("%d\n",*pn);
    printf("%d\n",n2);

    pn = &n2;
    ++*pn;
    printf("%d\n",*pn);
    printf("%d\n",n2);
    */

    //To print desired number of spaces:
    //Reference character to count spaces being printed:
    // printf(".\n");
    // //Syntax containing the number indicates how many spaces to give.
    // //Give 2 for 2 spaces and 3 for three spaces and so on.
    // printf("%*c",1,' ');


    return 0;
}