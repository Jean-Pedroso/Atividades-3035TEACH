const removeVogais= (remove ) =>{
    return remove.replace(/[aeiouà-ú]/gi,'');
 }

 var resultado = removeVogais( "Ola sou mais uma atividade concluida com sucesso" );
 console.log( resultado );