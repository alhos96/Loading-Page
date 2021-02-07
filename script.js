let index=0;
let banner = document.getElementById("text");
let bannerText = "my page is loading..";
let count = 0;
let letter = "";
let dot = document.getElementById("dot");
let delay = bannerText.length * 135;

function dotDisplay(){
    dot.style.visibility = "visible";
}

setTimeout(dotDisplay,delay);


(function typeEffect(){
 

    if(index <= bannerText.length){
      letter += bannerText[index];
    }

    banner.innerHTML = letter;
    
    index+=1
    count+=1

    console.log(letter)
    let timeout = setTimeout(typeEffect, 120);
   
    if(count=== bannerText.length){
        clearTimeout(timeout)
    } 
      
    
})();








