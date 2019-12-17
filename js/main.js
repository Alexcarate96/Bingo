var jugar = document.getElementById('jugar');
jugar.addEventListener('click',function(){
    tablero.jugar()
    console.log(tablero.numeroJugados);
});