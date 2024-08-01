function isPalindrome(frase){
    let fraseRecebida = frase;
    let tamanhoFrase = fraseRecebida.length;
    let consoleImpressao = fraseRecebida.charAt(tamanhoFrase-1);
  
    for(let i = tamanhoFrase - 2; i >= 0; i--){
      let letraAoContrario = fraseRecebida.charAt(i);
      consoleImpressao += letraAoContrario;
    }
    
    if(consoleImpressao == fraseRecebida){
      return true;
    }else{
      return false;
    }
  
  }
  
  
  function arrayMaxMin(arr){
    let minhaArray = arr;
    let tamanhoArray = arr.length;
    let numeroMaior = -Infinity;
    let numeroMenor = Infinity;
  
  
    while(tamanhoArray--){
      if(minhaArray[tamanhoArray] > numeroMaior){
        numeroMaior = minhaArray[tamanhoArray];
      }
      if(minhaArray[tamanhoArray] < numeroMenor){
        numeroMenor = minhaArray[tamanhoArray];
      }
    }
    return `${numeroMenor}, ${numeroMaior}`;
  }