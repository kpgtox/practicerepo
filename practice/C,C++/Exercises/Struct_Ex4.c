#include <stdio.h>
#include <string.h>

//Nested Structures:

int main()
{
	struct date {
		int month;
		int day;
		int year;
	};
	struct person {
		struct date birthday;
		char name[32];
	};
	struct person president;

	president.birthday.month = 2;
	president.birthday.day = 22;
	president.birthday.year = 1732;
	//Use onlt strcpy function to assign a name to the name member:
	strcpy(president.name,"George Washington");

	printf("%s was born on %d/%d/%d\n",
			president.name,
			president.birthday.month,
			president.birthday.day,
			president.birthday.year
		  );
	
	//Cannot assign values to struct members outside the struct using the assignment operaor, try strcpy function:
	//president.name = "KPDTOX";//error
	//But integer members can be accessed and modified outside the struct:
	president.birthday.day = 31;
	president.birthday.month = 12;
	president.birthday.year = 1989;
	printf("%d\n", president.birthday.day);
	printf("%d\n", president.birthday.month);
	printf("%d\n", president.birthday.year);

	return(0);
}

