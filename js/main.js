
const AlienHeader = document.getElementById('alien_nav');
const Header = document.getElementById('header');
const imgUfo = document.getElementById('imgUfo');
   const botonInvacion = document.getElementById('btn__InvationMode');
   const modulos = document.querySelectorAll('.webDev');
   console.log(modulos)

const botonDia = document.getElementById('btn__LigthMode');
botonDia.addEventListener('click', ModoLigth)

function ModoLigth(){
    
    for(let index of modulos)
    {
        index.classList.remove('invationModule')
    }
    
    document.getElementsByClassName("cielo")[0].style.background="rgb(65,102,245)" ;
    document.getElementsByClassName("contenedor")[0].style.background="linear-gradient (to rigth, #ffef00, rgb(65,102,245)";
    document.getElementsByTagName("header")[0].style.background="rgba(255, 255, 255, 0.822)";
    document.getElementsByTagName("h2")[0].style.color="black";
    document.getElementsByTagName("h2")[1].style.color="black";
    document.getElementsByTagName("h2")[2].style.color="black";
   
    document.getElementsByClassName("webDev")[0].style.background="white";
    document.getElementsByClassName("webDev")[1].style.background="white";
    document.getElementsByClassName("webDev")[2].style.background="white";
   
    document.getElementsByTagName("p")[0].style.color="black";
    document.getElementsByTagName("p")[1].style.color="black";
    document.getElementsByTagName("p")[2].style.color="black";

    document.getElementsByTagName('a')[0].style.color="black";
    document.getElementsByTagName('a')[1].style.color="black";
    document.getElementsByTagName('a')[2].style.color="black";
    document.getElementsByTagName('a')[3].style.color="black";
    document.getElementById("modulo").classList.remove ("invationModule");
    document.getElementById("modulo").classList.remove ("imgUfo");
   


   
   
};

//Invation mode

function getInvationMode(){
    for(let index of modulos)
    {
        index.classList.add('invationModule')
    }
    imgUfo.classList.add('imgUfo');
    Header.classList.add('header_invation');
    AlienHeader.classList.remove('alien_nav')
    AlienHeader.classList.add('alienNavZero');
    
    console.log('ok');

};

botonInvacion.addEventListener('click', getInvationMode);





