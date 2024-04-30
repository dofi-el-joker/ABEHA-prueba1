let arrastrar;
let quitarArrastrar;

let cont1 = document.querySelectorAll('.contCar')[0];
let cont2 = document.querySelectorAll('.contCar')[1];
let fondo1 = document.querySelectorAll('.fondoCar')[0];
let fondo2 = document.querySelectorAll('.fondoCar')[1];
let carro1 = document.querySelectorAll('.car')[0];
let carro2 = document.querySelectorAll('.car')[1];
let logo1 = document.querySelectorAll('.logoCar')[0];
let logo2 = document.querySelectorAll('.logoCar')[1];
let divisor = document.querySelector('.divisor');


cont2.scrollLeft = document.body.getBoundingClientRect().width/2;
setTimeout(() => {
    divisor.style.height=cont1.getBoundingClientRect().height+'px';
}, 100);

if(document.body.getBoundingClientRect().width<961){
    fondo1.src='car1/car1-back-mobile.jpg';
    fondo2.src='car2/car2-back-mobile.jpg';
    carro1.src='car1/car1-mobile.png';
    carro2.src='car2/car2-mobile.png';
}

divisor.addEventListener('mousedown', (e)=>{
    // Agrega un evento de "mousemove" para mover el elemento
    document.addEventListener("mousemove", arrastrar =(e)=>{arrastre(e)});
    // Agrega un evento de "mouseup" para detener el arrastre
    document.addEventListener("mouseup", quitarArrastrar =(e)=>{manejarMouseUp(e)});
});
divisor.addEventListener("touchstart", function (e) {

    e.preventDefault();
    document.addEventListener("touchmove", arrastrar =(e)=>{arrastreTouch(e)});
    document.addEventListener("touchend", quitarArrastrar =(e)=>{manejarMouseUp(e)});
    
});

function arrastre(e){
    let newX = e.clientX;

    divisor.style.left = (newX) + "px";
    cont1.style.width=(newX) + "px";
    cont2.style.width=(document.querySelector('body').getBoundingClientRect().width-newX) + "px";
    cont2.scrollLeft = (newX);  

}

function arrastreTouch(e){
    let newX = e.touches[0].pageX;

    divisor.style.left = (newX) + "px";
    cont1.style.width=(newX) + "px";
    cont2.style.width=(document.querySelector('body').getBoundingClientRect().width-newX) + "px";
    cont2.scrollLeft = (newX); 
}

function manejarMouseUp(e){
    document.removeEventListener("mousemove", arrastrar);
    document.removeEventListener("mouseup", quitarArrastrar);
    document.removeEventListener("touchmove", arrastrar);
    document.removeEventListener("touchend", quitarArrastrar);
}

window.addEventListener('resize', ()=>{
    if(document.querySelectorAll('.fondoCar')){
        if(document.body.getBoundingClientRect().width<961){
            fondo1.src='car1/car1-back-mobile.jpg';
            fondo2.src='car2/car2-back-mobile.jpg';
            carro1.src='car1/car1-mobile.png';
            carro2.src='car2/car2-mobile.png';
        }else{
            fondo1.src='car1/car1-back.jpg';
            fondo2.src='car2/car2-back-desktop.jpg';
            carro1.src='car1/car1.png';
            carro2.src='car2/car2.png';
        }
        divisor.style.height=cont1.getBoundingClientRect().height+'px';
    }
});


