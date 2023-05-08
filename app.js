var myBrowser=document.querySelector("#my-Browser");
var mytxt=document.querySelector("#my-txt");
var myoutput=document.querySelector("#my-output");
myBrowser.addEventListener("click",clickHandler)
function clickHandler(){
     myoutput.innerText=mytxt.value+"traslated";   

}
   

