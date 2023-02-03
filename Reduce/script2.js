//contador de names por iniciais

const names = ['Daniel','Maria','Marta','Juca','João','Jéssica', 'Daniela']
 const namesCount = names.reduce( (count, nomeAtual)=> {
    const firstLetter = nomeAtual[0].toLowerCase()
    if (count[firstLetter]){
        count[firstLetter]++
    }else{
        count[firstLetter]=1
    }
    return count
 }, {} )

console.log(namesCount)