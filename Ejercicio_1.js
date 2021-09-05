const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var lista=[];  
function rellenar_recursivo(arreglo, n)
{
    if (n==0){
        return arreglo;
    }else{
        arreglo.push(Math.floor(Math.random()*20));
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
