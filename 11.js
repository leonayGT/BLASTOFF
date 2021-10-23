const listaA = [1,2,3,4];
const listaB = [1,2,5,8];


function interseccao(array1, array2){

  return array1.filter(number => array2.includes(number));
}


console.log(interseccao(listaA,listaB));