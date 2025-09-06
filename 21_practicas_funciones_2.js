// Funcion + Bucle For + condicional if, else

    // Función que pueda tomar una palabra y ubicar la posición de una letra elegida en esa palabra dada.  

function letterFinder(word, match){
    for (var i = 0; i != word.length ; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test","t");