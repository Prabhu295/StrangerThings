const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

let load=0;

let number=setInterval(loading,50);
 function loading(){
    load++;
    if(load>99){
        clearInterval(number);
    }
    loadText.innerText=`${load}%`;
    loadText.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
 }
 function scale(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}
