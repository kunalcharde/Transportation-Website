
import { registration } from "./PopUps/registraction.js"
import { postLoad } from "./PopUps/postload.js";
import { findLoad } from "./PopUps/findload.js";
postLoad();
registration();
findLoad();

// Slider Animation
var counter =1;
setInterval(function(){
document.getElementById('radio'+ counter).checked =true;
counter++;
if(counter >4){
    counter =1
}
},4000)
