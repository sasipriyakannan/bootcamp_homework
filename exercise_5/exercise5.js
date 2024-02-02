function fortune(name,location,partner,child)
{
    console.log( "you will be " + name + " in " + location + " and married to " + partner+ " with " + child)

}
fortune("priya","texas","senthil","sanju")
fortune("sita","dallas","ram","pranisha")
fortune("anu","florida","anil","ayshu")

function calculatedogage(puppyAge)
{
    console.log( "your doggie is " + 7*puppyAge + " years old in dog years");
}
calculatedogage("5");

function calculatedogage2(puppyAge,rate)
{
    console.log( "your doggie is " + rate*puppyAge + " years old in dog years");
}
calculatedogage2("3","7");

function calculatesupply(age,amountPerDay)
{
    console.log("you will need " + 365*age*amountPerDay + " to last you untill the ripe old age of " + age);

}
calculatesupply("10","2");
calculatesupply("51","3");

function calculatesupplyBonus(age,amountPerDay)
{
    console.log("you will need " + Math.round(365*age*amountPerDay) + " to last you untill the ripe old age of " + age);

}
calculatesupplyBonus("10","2.2");

function calcCircumference(radius)
{
    console.log("The circumference is " + 2*3.14*radius);
}
calcCircumference("5");

function calcCircumferenceArea(radius)
{
    console.log("The area is " + 3.14*radius*radius);
}
calcCircumferenceArea("5");

function celciusToFarenheit(celciusTemp)
{
console.log("temperature is " + ((celciusTemp*(9/5))+32.0) );

}
celciusToFarenheit(2);

function farenToCelcius(farenTemp)
{
console.log("temperature is " + ((farenTemp-32)*(5/9)));

}
farenToCelcius(2);








