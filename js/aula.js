let nome = "Lilian"
//alert(nome);
console.log(nome); // Console do browse de teste

const x = 10; // Variavel x
const lista = [1,2,3]; // Variável lista (Array que começa na posição 0)
// Esse formato JSON acaba sendo usado para bancos não relacionais 
const objeto = { name: "Lilian", age:26}; // Formato JSON (Modelo de objeto escrito em Java Script)

console.log(x);
console.log(typeof x);
console.log('------------------');
console.log(lista);
console.log(typeof lista);
console.log('------------------');
console.log(objeto); 
console.log(typeof objeto);
console.log(objeto.name);
console.log(lista[2]);

let opcao = true; //boolean

// Condicional
if (2 > 1){ 
    console.log("2 é maior que 1")
}else {
    console.log("2 não é maior que 1")
}

// Estrutura de repetição
const arr = ["amora", "Banana", "Caju", "Damasco", "Frabuesa"];
for(let i = 0; i < arr.length; i++){
    // console.log(' O valor da repetição é: ' +arr[i]);
    // Templete literal, é o uso da crase `
    console.log(`O valor da repetição é: ${arr[i]}`) 
}