// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });
// read this way jab button element me click hoga tab function(this is annanomous function) call hoga jo alert karega "i got clicked"   ------> important
// the above code is only applicable for the first button only so we use this code 


// this is used when the mouse is clicked on the button 
for(var i=0; i<document.querySelectorAll(".drum").length;i++) // humlog eventlistner ko sirf button me add kar rahe hai
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonInnerHtml= this.innerHTML;
        makesound(buttonInnerHtml); 
        buttonanimation(buttonInnerHtml);
    }); 
}


// this is used when the keyboard is pressed 
document.addEventListener("keydown",function(event)
    {
        makesound(event.key);
        buttonanimation(event.key);
    })

function makesound(input)
{
    switch (input) 
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;
        case "j":
            var  snare= new Audio("sounds/snare.mp3"); 
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;
    
        default:      
    }
    
}

function buttonanimation(currentKey)
{
   var activebutton= document.querySelector("."+ currentKey);

   activebutton.classList.add("pressed");
   setTimeout(function()
   {
    activebutton.classList.remove("pressed");
   },100);

}