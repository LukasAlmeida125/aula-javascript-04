1-
const numeros = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];

// a) Ordenar o array em ordem crescente
numeros.sort((a, b) => a - b);

// b) Exibir o array ordenado no console
console.log(numeros);

2-
let times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];

// a) Adicionar o time "Flamengo" no final do array
times.push("Flamengo");

// b) Remover o time que está no início do array
times.shift();

// c) Adicionar o time "Palmeiras" no início do array
times.unshift("Palmeiras");

// d) Adicionar o time "Grêmio" no final do array
times.push("Grêmio");

// e) Adicionar os times "São Paulo" e "Santos" do início do array
times.unshift("São Paulo", "Santos");

// f) Exibir a quantidade de elementos no array
console.log(times.length);

// g) Remover o time que está no final do array
times.pop();

// h) Exibir em ordem crescente os times que estão no array
times.sort();

// Exibir no console os times atualizados
console.log(times);










3-
const atividadesDoDia = ["Acordar", "Tomar café da manhã", "Trabalhar", "Almoçar", "Fazer exercícios", "Ler um livro", "Assistir TV"];

// a) Exibir as atividades na ordem inversa
console.log(atividadesDoDia.reverse());

// b) Selecionar e exibir os elementos nas posições 3 e 6
console.log(atividadesDoDia[2], atividadesDoDia[5]);

// c) Exibir o array transformado em string, substituindo a vírgula pelo símbolo "-"
console.log(atividadesDoDia.join(" - "));

// d) Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades do dia
const atividadesFavoritas = ["Ler", "Caminhar"];
const todasAtividades = atividadesFavoritas.concat(atividadesDoDia);

// Exibir o resultado no console
console.log(todasAtividades);

4-
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];

// a) Exibir as cidades em ordem crescente
console.log(cidades.sort());

// b) Remover a cidade que está no início do array
cidades.shift();

// c) Remover a cidade que está no final do array
cidades.pop();

// d) Exibir as cidades em ordem crescente novamente
console.log(cidades.sort());





