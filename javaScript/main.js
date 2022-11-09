const nombre = 'Mar';
const edad= 17;
const likesMusic=true;

let nombreElement= document.querySelector('span#nombre');
let edadElement=document.querySelector('span#age');
let likesMusicElement=document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = edad;
if (likesMusic === true){
    likesMusicElement.textContent='Me gusta la musica';
}
else{
    likesMusicElement.textContent='No me gusta la musica';
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm','k','l','ñ'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j','o','p'];

const keys= document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll ('.key.white');
const blackKeys= document.querySelectorAll('.key.black');

keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
  });
  

const playNote=(key)=> {
    const noteAudio =document.getElementById(key.dataset.note);
    noteAudio.play();
    key.classList.add('active');
  // Agregamos un event listener al estado ended del evento keydown
  noteAudio.addEventListener('ended', () => {
    // Cuando termine de reproducirse el sonido, removemos clase active
    key.classList.remove('active');
  });
 
}

document.addEventListener ('keydown', (e) =>{//z
    if (e.repeat) return;

    const key =e.key;
    const whiteKeyIndex= WHITE_KEYS.indexOf(key);//0
    const blackKeyIndex= BLACK_KEYS.indexOf(key);//-1

    if (whiteKeyIndex >-1){
        playNote(whiteKeys [whiteKeyIndex]);
    }
    if (blackKeyIndex >-1){
        playNote(blackKeys [blackKeyIndex]);
    }
});

function pianoRosa(){
const colorRosa= document.querySelectorAll(' .key.white');
colorRosa.forEach(cambiarRosa);

function cambiarRosa(element){
  element.style.backgroundColor='pink';
}
}
const botonRosa =  document.querySelector('#personalizarRosa');
botonRosa.addEventListener('click', pianoRosa);


function pianoAzul(){
const colorAzul= document.querySelectorAll(' .key.white');
colorAzul.forEach(cambiarAzul);

function cambiarAzul(element){
  element.style.backgroundColor='rgb(41, 235, 218)';
}
}
const botonAzul =  document.querySelector('#personalizarAzul');
botonAzul.addEventListener('click', pianoAzul);

function pianoAmarillo(){
const colorAmarillo= document.querySelectorAll(' .key.white');
colorAmarillo.forEach(cambiarAmarillo);

function cambiarAmarillo(element){
element.style.backgroundColor="yellow";
}
}
const botonAmarillo =  document.querySelector('#personalizarAmarillo');
botonAmarillo.addEventListener('click', pianoAmarillo);

function pianoBlanco(){
  const colorBlanco= document.querySelectorAll(' .key.white');
colorBlanco.forEach(cambiarBlanco);

function cambiarBlanco(element){
  element.style.backgroundColor="white";
}
}
const botonBlanco =  document.querySelector('#personalizarBlanco');
botonBlanco.addEventListener('click', pianoBlanco);

