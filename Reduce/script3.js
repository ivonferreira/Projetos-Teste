const pessoas = [
    {nome:'Daniel', idade:28 },
    {nome:'Maria', idade:29 },
    {nome:'Marta', idade:29 }
]
const porIdade = pessoas.reduce((pessoasIdade,pessoaAtual)=>{
   /* if (pessoasIdade[pessoaAtual.idade]){
        pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    }else{
        pessoasIdade[pessoaAtual.idade] = []
        pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    }
    return pessoasIdade*/
    pessoasIdade[pessoaAtual.idade] = pessoasIdade[pessoaAtual.idade] || [] ;
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
},{})
console.log(porIdade)