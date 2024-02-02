function circleValue(radius)
{
    console.log("The Area of the Circle is " + Math.round(3.14*radius*radius));
    console.log("The Perimeter of the Circle is " + Math.round(2*3.14*radius));
}
circleValue(10);
function reverseNum(numb)
{
    console.log("the reverse number is " + (numb.toString().split('').reverse().join('')));
}
reverseNum(1234);

    function countVowels(input)
     {
        let Vowels = 'aAeEiIoOuU';
        let vowelsCount = 0;
        for (let i = 0; i < input.length; i++) {
            if (Vowels.indexOf(input[i]) !== -1) {
                vowelsCount += 1;
            }
        }
        return vowelsCount;
    }
    console.log("The Number of vowels in -" +
        " hello world:"
        + countVowels("hello world"));
    