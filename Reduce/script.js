const itens = [
    { description: 'pen', quantity: 1, price:3 },
    { description: 'rule', quantity: 2, price:5 },
    { description: 'erase', quantity: 2, price:6 }
]
// loop tradicional
/*let total = 0;
for (let i = 0 ; i < itens.length; i++ ){
    total += (itens[i].price * itens[i].quantity)
}*/

// metodo reduce
const total = itens.reduce((soma, iAtual) => {
    return soma + iAtual.quantity * iAtual.price
},0)

console.log(total)