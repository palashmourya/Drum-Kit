if(typeof window !== undefined){
    let numberOfDrumfButton = document.querySelectorAll(".drum").length;//selecting all the button that contains drums and getting length of it.

    for(let i=0;i<numberOfDrumfButton;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          let buttonInnerHTML = this.innerHTML; // taking the current html value
          makeSound(buttonInnerHTML) // Calling function makeSound and passing value for example makeSound('w')
          buttonAnimation(buttonInnerHTML); //Calling function for button animation
        
          //For every key we press on keyboard we call addEventListener and function taking event as argument
          document.addEventListener("keypress",function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
          })

        });
    }
}
else{
    console.log("Not in browser")
}
//Calling function and passing cuurent key and using switch cases we go on each key and according to key we play sound associate with it 
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break; 
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break; 
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;    
            
        default:    
      }
}

function buttonAnimation(currentKey){
    var activeButton  = document.querySelector("." + currentKey);// It basically takes ".w" class and performed animation "pressed" mentioned in css
    activeButton.classList.add("pressed")
    
    //set time out function will remove the animation from current key at particular interval of time
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}

// var audio = new Audio("sounds/tom-1.mp3")
// audio.play()
