// Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner"); // Selecionar todos os id: banner
//
const dots = document.querySelectorAll(".dot");
// Variavel de controle
let sllideIndex = 0;

function showSlides(){
    for(let i=0; i < slides.length; i++){
        dots[i].classList.remove("active");
        slides[i].classList.remove("active"); //Propriedade classList lista o Array
    }

    sllideIndex++; //Avançando a variável
    if(sllideIndex > slides.length){
        sllideIndex = 1;
    }

    slides[sllideIndex -1].classList.add("active");
    dots[sllideIndex -1].classList.add("active");
    setTimeout(showSlides, 3000); //3 segundo é 3000 (Ação que realiza a rotação entre o side)
}

//Inicialização
showSlides();
































// DOM
// Navegar no documento HTML
// const brand = document.querySelector("#brand"); // querySelector acessa e seleciona o HTML (Estou armazenado o conteudo do HTML dentro da variável brand criada no JavaScript)

// brand.addEventListener('click', function(event){
//     // console.log("testando o click");
//     // console.log(event.target);
//     event.target.style.color = "blue"; //Troca de cor da palavra dentro do HTML passando pelo CSS mas que teve ação do JavaScript 

// }); // Função que escuta algum evendo(Aguma ação ex: clicar na página) acontecer no elemento colocado na variável