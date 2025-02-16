/*
const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
*/

/*
function criaPessoa(nome, sobrenome, idade){
    return{nome,sobrenome, idade};
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 32);
const pessoa3 = criaPessoa("João", "Moreira", 55);
const pessoa4 = criaPessoa("Junior", "Lara", 44);
const pessoa5 = criaPessoa("Gean", "Otávio", 69);

console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade(){
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();