const questionOne = function questionOne(arr) {
    // Implement question 1 here

    let object ={};
    if (arr == null) {
        return object
    }
    for (let x of arr) {
        if (x === 1) {
            object[x] = false; 
        }else if (x === 2) {
            object[x] = true;
        }else{
            for (let i = 2; i < x; i++) {
                if(x%i === 0) {
                    object[x] = false;break 
                }object[x] = true
            }
        }
    }return object;
}

const questionTwo = function questionTwo(arr) { 
    // Implement question 2 here
 
    let i =0;
    let square = 0;
    let sum = 0;
    while (i<arr.length){
        square = arr[i] * arr[i];
        sum += square;
        i++
    } 

   let Power = Math.pow(sum,5); 

   let Sqrt = Math.sqrt(Power); 
   Sqrt = Sqrt.toFixed(2); 

   return Sqrt;  
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    const Vowels = "aeoiu";
    const Punctuations = ",.'?!:;";
    const SpecialCharacters = "@#$%^&*()~<>";
    const Spaces = " ";
    
    let i = 0;
    let vowelsCounter = 0;
    let puncsCounter = 0;
    let specialcharactersCounter = 0;
    let spaceCounter = 0;
    let numberCounter = 0;
    let consonantCounter = 0;

    for(let x of text.toLowerCase()){
        if (Vowels.includes(x)){
            vowelsCounter++;
        }else if (Punctuations.includes(x)){
            puncsCounter++;
        }else if (SpecialCharacters.includes(x)){
            specialcharactersCounter++;
        }else if (Spaces.includes(x)){
            spaceCounter++;
        }else if (x>=0 && x<=9){
            numberCounter++;
        }else if (x>='a' && x<='z'){
            consonantCounter++;
        }
    }

    let objectCounter = {consonants: 0, vowels: 0, numbers: 0, spaces: 0, punctuation: 0, specialCharacters: 0};
    counter = [consonantCounter, vowelsCounter, numberCounter, spaceCounter, puncsCounter, specialcharactersCounter];

    objectCounter['consonants']=counter[0];
    objectCounter['vowels']=counter[1];
    objectCounter['numbers']=counter[2];
    objectCounter['spaces']=counter[3];
    objectCounter['punctuation']=counter[4];
    objectCounter['specialCharacters']=counter[5];

    return objectCounter;

}

const questionFour = function questionFour(num1, num2,num3) {
    // Implement question 4 here
    let r = num2 / 100 / 12; 
    let m = num3 * 12;
    let x = Math.pow(1+r,m)
    let monthlyPay = num1 * r * x / (x-1);
    monthlyPay = monthlyPay.toFixed(2)
    return monthlyPay
}

module.exports = {
    firstName: "YIXUAN", 
    lastName: "WANG", 
    studentId: "10454262",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};