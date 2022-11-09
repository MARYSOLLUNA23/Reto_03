/* MAR Y SOL LUNA QUIJADA */
function enviar(){
function ingresar(usuario){
    if(document.getElementById("califGustar").checked){
        alert ('Gracias por su buena calificación '+usuario);
    }
    else if (document.getElementById("califNoGustar").checked){
        alert('Gracias por su calificación, mejoraremos nuestro sitio ' + usuario);
    }
    else{
       alert("Por favor califica el sitio");
    } 
    alert('Su registro ha sido completado '+ usuario );   
}
function registrarUsuario (callback){
    const nombre=prompt('Ingrese nu nombre por favor: ');
    callback(nombre);
}
registrarUsuario (ingresar);
}