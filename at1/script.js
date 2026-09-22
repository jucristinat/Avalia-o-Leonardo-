function twoSum(numeros, alvo){
    for(let i = 0; i<numeros.length; i++){
        console.log("estou olhando para: ", numeros[i]);

        for(let j = i + 1; j < numeros.length; j++){
            console.log('segundo num: ', numeros[j]);
        }
    }
}
twoSum([2,7,11,15],9);