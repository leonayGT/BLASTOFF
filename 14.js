
let palavra = 'osso';


let palavraInvertida = [];

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida.push(palavra[i]);
}

palavraInvertida =  palavraInvertida.toString().replace(/,/g, '').trim();

if(palavraInvertida.toLowerCase() === palavra.toLowerCase()){
  console.log(`${palavra} é um palíndromo`);
}else{
  console.log(`${palavra} não é um palíndromo`);
}