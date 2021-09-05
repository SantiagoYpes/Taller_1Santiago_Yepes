const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var lista=[];  

function verificar(lista,num){
    for (let index = 0; index < lista.length; index++) {
        if (num==lista[index]) {
            return false
        }
    }
    return true
}
function rellenar_recursivo(arreglo, n)
{
    if (n==0){
        return arreglo;
    }else{
        num=Math.floor(Math.random()*100);
        while (verificar(lista,num)==false) {
            num=Math.floor(Math.random()*100);
        }
        arreglo.push(num);
        return rellenar_recursivo(arreglo,n-1)
    }
}
const main=()=>{
    const n=argv.numero
    console.time("Array_recursivo")
    console.log (rellenar_recursivo(lista,n))
    console.timeEnd("Array_recursivo")

}
main()