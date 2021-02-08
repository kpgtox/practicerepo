//Challenge 2:
//Write a loop to process single-character input.
//Copy it into a buffer and append a message to the buffer.
//print the buffer one charater at a time.

#include<stdio.h>
#include<string.h>


int main(){

    char name[32];
    char buffer[64];
    char last[] = "passed the challenge.";
    char c;
    
    printf("Enter name: ");
    
    //Fetch input using the getchar() method
    //This method takes input only once for every call in the program and assings one character to everytime its called:
    //Use this method either until (array length - 1) no. of times OR the user presses enter which is represented by the escape character \n:
    int i=0;
    while((c=getchar()) != '\n'){
        name[i]=c;
        i++;
        if(i==31)
            break;
    }
    //store a null character in the last element of the array name:
    name[i] = '\0';

    //copt the name array into the large buffer array:
    strcpy(buffer,name);

    //append a white space character and the message (last array) to the buffer array:
    strcat(buffer," ");
    strcat(buffer,last);

    //print every character in the buffer array until the counter in the loop reaches the final element which is the null character:
    i =0;
    while(buffer[i] != '\0'){
        putchar(buffer[i]);
        i++;
    }

    return 0;
}