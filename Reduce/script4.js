const numbers = [-10,0,2,4,];

//const doublePositive = numbers.filter(n => n>0).map(n => n*2)

const doublePositive = numbers.reduce((arrayAcumulador, currentNumber) => {
    if(currentNumber > 0){
        arrayAcumulador.push(currentNumber*2)
    }
    return arrayAcumulador
},[])
console.log(doublePositive)
