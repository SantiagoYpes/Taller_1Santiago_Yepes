const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
function suma_enteros(n)
{
    if (n<=2){
        return 2;
    }else{
        return n+suma_enteros(n-2)
    }
}
const main=()=>{
    const n=argv.numero
    console.time("Suma_Enteros")
    if (n%2==0) {        
        console.log (suma_enteros(n))        
    }else{
        console.log("El numero no es par ")
    }
    console.timeEnd("Suma_Enteros")

}
main()