#include <stdio.h>
//for declaring NULL pointers:
#include <stddef.h>

//A pointer is nothing more than a variable that points to a memory address or contains a memory 
//address as its value.

int main(){

    //declaring pointers:
    /*int *pi; //a pointer to an integer variable
    char *pc; //a pointer to an character variable
    float *pf, *pg; // pointers to an float variables*/
    // always initialize the pointers when declared.

    /*
    //Accessing values at the address the pointer pointing to OR Dereferecing a pointer:
    int i =20;
    int *pi;
    pi = &i; //pointer pointing to i, stores i's address.
    int res;
    //to access the value at the address pointer is pointing to:
    //dereferencing the pointer pi:
    res = *pi + 15;
    printf("%i\n",res);
    */

    /*
    //print a pointer's value (address of another variable/address its pointing to):
    //here the pointer contains the address of the variable i:
    printf("%p\n",pi);
    //print the value at the adress the pointer is pointing to, (dereferecing the pointer):
    printf("value the pointer pointing to: %d\n",*pi);
    //print the integer's value normally:
    printf("value: %d\n",i);
    //printing the address of the variable i, which should be the same as what the pointer contains:
    printf("%p\n",&i);
    //printing the address of the pointer variable, where the pointer is actually stored in memory:
    printf("%p\n",&pi);
    //sometimes to get around a warning, use this:
    printf("%p\n",(void*)&pi);
    //%p format specifier expects the value to be some kind of pointer, here &pi if "pointer to pointer to int".
    */
    
    //print the number of bytes the pointer is occupying:
    //using the sizeofoperator.
    //cast the argument to type int to prevent a warning:
    //printf("%d bytes\n",(int)sizeof(pi));

    //declaring NULL pointers:
    //NULL pointers doesnt point to any variable, i.e no memory used.
    // int *p;
    // p = NULL;

    /*
    //Pointer challenge:
    //declare and initialize a var:
    int i = 10;
    //declare a null pointer:
    int *pi = NULL;
    //assign a variable's address to a pointer:
    pi = &i;
    //print value of the pointer: (its pointing variable's address)
    printf("%p\n",pi);
    //dereference a pointer, print the value at the address the pointer is pointing to:
    printf("%d\n",*pi);
    //address of the pointer:
    printf("%p\n",&pi);
    //address of the variable:
    printf("%p\n",&i);
    */

    /*
    //Addition on pointers:
    //Dereferencing a pointer then performing addition on it:
    int foo = 10;
    int *pfoo = NULL;
    pfoo = &foo;
    *pfoo += 15;
    //The pointer pfoo pointing to foo's address where the value at that address is modified, now equals 25:
    printf("%d\n",*pfoo);
    //Remember that the variable foo's value is also modified:
    printf("%d\n",foo);
    */

    /*   
    //Incrementing an integer variable indirectly using pointers:
    int a=1;
    int *pa = NULL;
    pa = &a;
    */
    //This increment wont work:
    //*pa++;
    //Use the increment on pointer like this:
    //++*pa;
    /*
    //dereference a pointer to access the value its pointing to:
    printf("%d\n",*pa);
    //Check that the value in the original variable is also incremented:
    printf("%d\n",a);
    */

    /*
    //The same pointer can be assigned with multiple variables of the same type ofcourse:
    int a=1;
    int *pt = NULL;
    pt = &a;
    printf("%d\n",*pt);
    int b=2;
    pt = &b;
    //now the pointer ispointing tothe variable b
    //the value the pointer stores is the address of the variable b
    //dereferencing the pointer to access its value:
    printf("%d\n",*pt);
    */

    /*
    //Using pointers to read input instead of variables:
    int num =0;
    //the pointer pnum points to the variable num: (stores its address)
    int *pnum = &num;
    printf("enter an integer: ");
    //instead of this:
    //scanf("%d\n", &num);
    //We do this: where scanf expects an address to store the value at, we send a pointer because 
    //the pointer already has some address stored in it and its name is used to access the address
    //hence a pointer that already points to a variable can be used as an argument o scanf:
    scanf("%d\n", pnum);
    */

    //Two ways of initializing a pointer and nullifying it i.e pointers point to nothing(no memory):
    // int *p;
    // p = NULL;
    // if(p == NULL){
    //     printf("initialised pointer.\n");
    // }
    // int *px = 0;
    // if(px == NULL){
    //     printf("initialised pointer.\n");
    // }

    //Pointers declared as constants with const keyword:

    //Half constant pointer type 1:
    //Prohibiting the pointer to make changes:
    //Changing the values of any variable/address the pointer pointing to is prohibited by the compiler, once its declared const:
    // int val = 1;
    // const int *pval = &val;
    // //This throws an error: The pointer pval is declared const so the value that it is pointing to cannot be modified:
    // //*pval = 20; //error
    // int val2 = 5;
    // //However, the value of the pointer can be modified.(which is the variable's address the pointer pval is pointing to):
    // pval = &val2;
    // printf("%d\n",*pval);
    //You can change value of the pointer pval (switched from val1's address to val2's address) that's declared constant and
    //even make the pointer point to val2 variable and access val2's value, but,
    //You cannot use the pointer pval to make changes to the variable its pointing to, no matter what variable its pointed to after declaring it as const before:
    //*pval = 10; //error
    //*pval += 1; //error

    //Half constant pointer type 2:
    //Prohibiting the pointer to store any other addresses:
    //Pointer pointing to any other variable is prohibited but the value of the one variable its pointing to can be changed.
    //The pointer pfoo will always point to foo, it cannot store any other variable's address.
    // int foo = 3;
    // int *const pfoo = &foo;
    // int boo = 6;
    //The pointer pfoo can only point to the variable foo, it cannot store any other variable's address:
    //pfoo = &boo; //error
    //If the pointer is not allowed to point to any other variable then it means that it cannot be used to modify 
    //or even access value from any other variable's address, BUT,
    //it can still make changes to the variable that is already pointing to:
    // *pfoo = 30;
    // printf("%d\n",*pfoo);
    // printf("%d\n",foo);

    //Half constant pointer type 3:
    //The pointer here cannot point to any other address nor it can modify the value that its already pointing to:
    // int koo = 9;
    // const int *const pkoo = &koo;
    // int joo = 19;
    //Cannot store any other address:
    //pkoo = &joo; //error
    //Cannot modify the value of the address its pointing to through dereferencing:
    //*pkoo = 88; //eror
    // printf("%d\n",*pkoo);
    //However you can still change the variable's value directly, The variable is not constant:
    // koo = 120;
    // printf("%d\n",koo);
    //Access the modified value of koo through dereferencing:
    // printf("%d\n",*pkoo);

    //A perfect constant pointer.
    //neither value nor address of the constant pointer can be changed.
    //the constant variable that the constant pointer is pointing to also cannot be changed in direct way or in dereferecing.
    const int woo = 99;
    const int *const pwoo = &woo;
    int hoo = 100;
    //pwoo = &hoo; //error
    // *pwoo = 88; //eror
    // woo = 888; //error
    //A fully perfect constant pointer pointing to a constant variable, the value can only be accessed, nothing more.

    //Guidelines for declaring Constant Pointers:
    // Its all about where you place the const keyword, either before the type or after the type:
    // type 1: const int * ... //value can't be changed
    // type 2: int *const ... //pointer address cannot change
    // type 3: const int *const ... //both value and address cannot change through dereference but value can be changed directly.
    // Perfect constant pointer: Its type 3's pointer pointing to a variable that is also declared constant. Nothing can be changed.




    return 0;
}