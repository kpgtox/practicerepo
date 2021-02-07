#include <stdio.h>
#include <stdbool.h>

//ex1:
enum condition {old = 0, new, refr}; 
enum condition bike = 2; //bike refers to the element 'refr' in 'condition' because refr index value is 2.
enum condition FindState(){
	return bike;} 

int main(){

    //Reading two values from the terminal:
    /*char str[100]; //string array of 100 elements.
    int i;
    printf("enter a string and a number: ");
    scanf("%s %d",str,&i);
    printf("\n %s",str);
    printf("\n %d",i);*/
    
    //Enums:

    //user defined data types.
    //Creating a user defined data type (custom data type):
    //enum week{mon,tue,wed,thu,fri,sat,sun};
    //variable can also be dclared while defining an enum:
    //c:enum week{mon,tue,wed,thu,fri,sat,sun} day;
    //declaring two variables of type week at the same time:
    //c: enum week today, tomorrow;
    //declare a new variable of type week:
    /*enum week day;
    day = mon;
    //outputs the index of mon
    printf("%d\n",day);*/

    //looping an enum like an array:
    //indexing inside an enum beings with 0 not 1
    /*int i;
    for(i=mon;i<=sun;i++){
        printf("%d ",i);
    }
    printf("\n");*/

    //change the index values manually of elements inside an enum:
    /*enum seasons{win=1, sum=0, rain=0} foo;
    foo = sum;
    printf("%d\n",foo);
    //accessing an element inside an enum variable directly by its name:
    printf("%d\n",sum);*/

    //The subsequent elements will have 1 added to its index automatically until there's a value assigned manually:
    //index values in an enum be only integers, works with negative integers too.
    //enum months{jan=2,feb,mar=10,apr,may=15,jun};
    //accessing an element inside an enum variable directly by its name:
    /*printf("%d\n",jan);
    printf("%d\n",feb);
    printf("%d\n",may);
    printf("%d\n",jun);*/

    //the elements after jan below are incremented by 1 until the last element because there is no interruption
    //by of manual assignment of an index value:
    /*enum week{jan=2,mon,tue,wed,thu,fri};
    printf("%d\n",fri);*/

    //ex1:
    //see related code above main().
    //(FindState() == old)? printf("Old Bike"): printf("Refurbished Bike"); 

    /*Enum vs Macro
    We can also use macros to define names constants. For example we can define ‘Working’ and ‘Failed’ using following macro.
    
    #define Working 0 
    #define Failed 1 
    #define Freezed 2 

    There are multiple advantages of using enum over macro when many related named constants have integral values.
    a) Enums follow scope rules.
    b) Enum variables are automatically assigned values. Following is simpler*/

    //Compare two enum variables
    /*enum week{mon,tue,wed,thu,sat};
    enum week day1;
    day1 = mon;
    enum week day2;
    day2 = tue;
    bool isfoo = (day1 == day2);
    //print day1 of type week:
    printf("%d\n",day1);
    //print day2 of type week:
    printf("%d\n",day2);
    //print the boolean ifoo, 1 for true and 0 for false:
    printf("%d\n",isfoo);*/
    



    return 0;
}