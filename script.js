/*console.log("hey ") ;
var fullName=   "sadhana sitaraman" ;       // first letter is small no underscore and hyphen and this is called camel case
console.log(fullName);
var isLoggedIn=false; // global access variable
let age=10; // global variable
function now(){
 let age = 20; // block level scope 
 console.log("inside-1",age);
 isLoggedIn=true; 
}
now();
console.log("outside",age);
console.log("outside",isLoggedIn)*/

/*const num=10;
const num1 =20;
let new1=0;
function add(a,b){
    return a+b;
}
 // cant reassign value
new1=add(num,num1);
console.log(new1)*/
/*function cal(operator){
    const num1 =parseFloat(document.getElementById('num1').value);
    const num2 =parseFloat(document.getElementById('num2').value);
    let result;
    if(isNaN(num1) || isNaN(num2)){
        result="please enter a number";

    }else{
        switch(operator){
            case '+':
                result=num1+num2
                break;
            case '-':
                result=num1-num2
                break;
            case '*':
                result=num1*num2
                break;
            case '/':
                result=num1/num2
                break;
        }
    }
    document.getElementById('result').innerText="Result:"+result;
    
}*/
const contactData =[];
function submitform(){
    
    const firstname=document.getElementById('fname').value;
    const lastname=document.getElementById('lname').value;
    const phonenumber=document.getElementById('phonenumber').value;
    const email=document.getElementById('email').value;

     if(! firstname || !email || !phonenumber){
          alert("please fill the required");
          return;
     }
     
     }
     function display(){
        const outputdiv=document.getElementById("res").value
        outputdiv.innerHTML="";
        contactData.forEach((entry,index)=>{
            outputdiv.innerHTML += `
            <div class="entry">
            ${index +1},${entry.fname}<br>
            email: ${entry.email}<br>
            Phonenumber:${entry.phonenumber}
            <div>

            `
            

            
        })
     }
