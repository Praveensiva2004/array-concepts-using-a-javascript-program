//fizzbuzz
let i;
for(i=1;i<=100;i++){
     if((i%3==0)&&(i%5==0))
        console.log(" FIZZBUZZ ");
    else if(i%3==0)
        console.log(" FIZZ ");
    else if(i%5==0)
        console.log(" BUZZ ");
    
    else
    console.log(" "+i+" ");

}

//factorial
function factorial(a){
    let fact=1;
    // let i=1;
    for(i=1;i<=a;i++){
        fact=fact*i;
    }
    return fact;

}
document.write("the factorial of a is "+factorial(5));



// fahrenheit

function degree(deg){
     let fah=(deg*9/5)+32;
     return fah;
}
document.write( "fahrenheit is "+degree(32));



// maximum value in array of numbers
function Large(num){
    let max=-2;
    for(let i=0;i<num.length;i++){
        if(max<num[i])
            max=num[i];
    }
    return max;
}
let arr=[2,5,9,8,7];
 let maxval=Large(arr);
document.write("largest num is "+maxval);



// palindrome
function palindrome(word){
    let n=word;
    let new_word=word.split('').reverse().join('');
    if(n==new_word){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}
let text="hello";
palindrome(text);


//distinct number
function num2(arr)
 {
    let count=1;
    for(let i=0;i<=arr.length;i++)
        if(count!=arr[i])
            return count;
        else
            count++;
        
 }
 let arr1=[1,2,3,4,5,6,8,9]
 console.log( "missing number is "+num2(arr1));







