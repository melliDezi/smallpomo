

 //The below function will run when the body of the page loads, cuz we've put it in the HTML to run this func when body loads


function whenLoads(){


document.getElementById('reset').style.display= "none";   //This is in order to hide the reset button when the page is first loaded, cuz we don't need it yet



let sessionTime = document.getElementById('num').innerHTML;

sessionTime = +sessionTime; //This is the unary operator (the plus sign)-adding it before sessionTime like this turns sessionTime from a string into a number!




let breakTime = document.getElementById("breakNum").innerHTML; 
breakTime = +breakTime; //This is the unary operator(the plus sign)-adding it before breakTime like this turns breakTime from a string into a number-which we need! 

 
document.getElementById('minus5Clock').addEventListener('click', function(event){

event.preventDefault(); //the event here & the one in this function's parameters, plus this code are to prevent the button's (the link's) default behavior, so it won't try to take us anywhere/force us up the page

console.log(sessionTime);



console.log(typeof sessionTime); //for me, to see whether sessionTime is a number or string(it's a number cuz we made it one by adding the + unary operator)




if(sessionTime > 5){
sessionTime= sessionTime-5; //as long as sessionTime is more than 5, this subtracts 5 from it everytime you click the minus button
console.log(sessionTime); 

document.getElementById('num').innerHTML = sessionTime; //We have to write this, to ensure that we change the innerHTML of the element with'num' id to the new sessionTime
} 

else{ //This says, if sessionTime is equal to 5 or less than 5, don't subtract 5 from it--instead, show the bellow alert message:

alert('Session time should be no less than 5 minutes, for productivity');//I added this to let users know why they can't set session time for less than 5 mins
};


}); 


document.getElementById('add5Clock').addEventListener('click', function(event){

event.preventDefault();//the event here & the one in this function's parameters, plus this code are to prevent the button's default behavior, so it won't try to take us anywhere/force us back up the page or add a hashtag to our url
console.log(sessionTime);


sessionTime= sessionTime + 5; 
console.log(sessionTime); 

document.getElementById('num').innerHTML = sessionTime;


}); 



document.getElementById('minus5Break').addEventListener('click', function(event){ 


event.preventDefault();//the event here & the one in this function's parameters, plus this code are to prevent the button's default behavior, so it won't try to take us anywhere/force us up the page
if(breakTime > 5){

breakTime -=5;   


} else {alert('Breaks of 5 minutes or more improve your focus!')}


document.getElementById('breakNum').innerHTML = breakTime;

}); 



document.getElementById('add5Break').addEventListener('click', function(event){ 

event.preventDefault();//the event here & the one in this function's parameters, plus this code are to prevent the button's default behavior, so it won't try to take us anywhere/force us up the page

breakTime +=5;  

document.getElementById('breakNum').innerHTML = breakTime


}); 

//The below add event listener was added so when we click on the start button, it begins a countdown timer of the time & also hides plus, minus, & start buttons-so we're left w/ just the words 'session time' & the session time counting down



document.getElementById('start').addEventListener('click', function (event){

event.preventDefault();//the event here & the one in this function's parameters, plus this code are to prevent the button's default behavior, so it won't try to take us anywhere/force us up the page when we click a button(as it would usually do otherwise)



let counter = setInterval(timer, 1000); //so here we use setInterval to run the timer function every 1000ms or every one second, then we assigned it to a variable called let counter    

sessionTime = sessionTime * 60; //this is to try to change the number we choose for our session time into minutes& seconds...



breakTime = breakTime * 60;//THIS is where it should be to avoid it rapidly multiplying repeatedly like it was doing before)cuz when it was in breakTimer function, it was being multiplied by 60 every second as the function was being called by setInterval every second!!!


function timer(){

//hide variables so we can have a clear display once the countdown starts: 


document.getElementById('title1').style.display="none";//--This comment is wrong now---didnt do this, instead I left session time in & when it's break time I'll change the innerHTML of this title to break time maybe...edit: i think i ended up setting it to none anyway..
document.getElementById('start').style.display= "none";  
document.getElementById('minus5Clock').style.display ="none";
document.getElementById('add5Clock').style.display ="none";   



document.getElementById('title2').style.display = "none"; 
document.getElementById('breakNum').style.display="none"; 

document.getElementById('minus5Break').style.display ="none"; 
document.getElementById('add5Break').style.display ="none";   

document.getElementById('timeType').innerHTML ="Current Focus Session: ";  
document.getElementById('timeType').style.display = "block";//to ensure that the words Current Focus Session: show when we run our timer again after pressing reset


sessionTime = sessionTime -1;


 
 if(sessionTime === 0){

  clearInterval(counter);   
 // About the below setInterval: this is the only way this works (and allows us to actually eventually clearInterval successfully!), by assigning the setInterval to the variable startBreak W/OUT even declaring startBreak as a variable in the 1st place, cuz variables assigned without 1st being declared are global no matter where we put them so that may be why, by the way, trying to put var startBreak at the top of page as a global variable does NOT work cuz it seems unable to even start the setInterval at all(I've also tried var, let & const, none allow us to later call clearInterval successfully at ALL)



var msg = new SpeechSynthesisUtterance();
msg.text = "Time is up, take a break!";
window.speechSynthesis.speak(msg); 


var startBreak = setInterval(breakTimer, 1000);  //to start decrementing breakTime by 1 every second---trying to move this to be global variable so can be accessed always

document.getElementById('num').style.display="none"; //This also "hides" the focus session time's number cuz once session time is 0 we no longer need to see it


//My way to create a list and add  is below: 

let task = document.getElementById('sessionActivity').value;  

console.log(task); 


let completedTasks = document.getElementById('taskList');
let createTaskLi = document.createElement('li'); 

createTaskLi.innerText = task; 

completedTasks.insertBefore(createTaskLi, completedTasks.childNodes[0]);



//let startBreak = setInterval(breakTimer, 1000);  //to start decrementing breakTime by 1 every second---trying to move this to be global variable so can be accessed always

 } 


if(sessionTime%60 >=10){

document.getElementById('num').innerHTML = Math.floor(sessionTime/60) + ":" + sessionTime%60;

}else {


document.getElementById('num').innerHTML = Math.floor(sessionTime/60) + ":" + "0" + sessionTime%60;


}
 

  
function breakTimer(){

document.getElementById('timeType').innerHTML = 'Break Time: '; //so, when sessionTime  reaches 0 after pressing the start button, this changes the words Current Focus Session to Break Time


document.getElementById('timeType').style.display = "block";//to ensure that the words Break Time show when we run our timer again after pressing reset
document.getElementById('breakNum').style.display="inline-block"; //This makes the display of breakNum(which is break time's number) change  from none to visible 

//breakTime = breakTime * 60;  
//this breakTime does NOT work, just like his final code doesn't work!


breakTime = breakTime -1;  //so this decrements the time by 1 (& since we're calling this function with setInterval every second the number decrements every second)


/*document.getElementById('breakNum').innerHTML = breakTime //This makes sure that the innerHTML of  breakNum shows our current breakTime*/


if(breakTime === 0){ //And this says, IF the countdown breakTime reaches 0, then clear the setInterval function(stop it) & then show the reset button that was previously hidden
 
 clearInterval(startBreak); 


 document.getElementById('reset').style.display= "inline-block";//this is to re-show the reset button once our break time is over 

 document.getElementById('breakNum').style.display = "none";//now that our break session has counted down, we hide the break time number 

 document.getElementById('timeType').style.display = "none";
    }
if(breakTime%60 >=10){

document.getElementById('breakNum').innerHTML = Math.floor(breakTime/60) + ":" + breakTime%60;

}else {


document.getElementById('breakNum').innerHTML = Math.floor(breakTime/60) + ":" + "0" + breakTime%60;


} 

} //this closes the breakTime Function

//RIGHT HERE!



//document.getElementById('num').innerHTML = sessionTime;
//This makes sure that the innerHTML of num shows our current sessionTime-when we remove this line of code, we can't see our focus session's time decrementing!
//maybe move this up  to beginning of function timer?he seems to have done so...

} //So this must close the timer function, so maybe move this so it doesn't enclose breaktimer--then put the setInterval out in the global scope?






});  //And this closes the onclick start function


document.getElementById('reset').addEventListener('click', function(event){  


event.preventDefault();//the event here & the one in this function's parameters, plus this code are to prevent the button's (the link's) default behavior, so it won't try to take us anywhere/force us up the page or add a hashtag to our url

 document.getElementById('sessionActivity').value = ''; //resets the task field to empty when we press reset, so we can add new task w/out needing to erase
document.getElementById('reset').style.display="none"; //hide reset btn once we've clicked it

//re-show sessionTime's title, minus & plus buttons, & its time too:  

document.getElementById('title1').style.display="block";//--This comment is wrong now---didnt do this, instead I left session time in & when it's break time I'll change the innerHTML of this title to break time maybe...
document.getElementById('start').style.display= "inline-block";  
document.getElementById('minus5Clock').style.display ="inline-block";
document.getElementById('add5Clock').style.display ="inline-block"; 
document.getElementById('num').style.display= "inline-block"; 

sessionTime= 25;//re-setting sessionTime, which has counted down to zero, back to its default number we want

document.getElementById('num').innerHTML= sessionTime;

//And re-show break time's title, minus & plus buttons, & its time:  

document.getElementById('title2').style.display = "block"; 
document.getElementById('breakNum').style.display="inline-block";  

document.getElementById('minus5Break').style.display ="inline-block"; 
document.getElementById('add5Break').style.display ="inline-block";  

//And here, we want to hide the timeType: 

document.getElementById('timeType').style.display = "none"


breakTime=25;//re-setting sessionTime, which has counted down to zero, back to its default number we want

document.getElementById('breakNum').innerHTML=breakTime;
});




};
  










