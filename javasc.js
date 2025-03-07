let musicas = ["https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl","https://open.spotify.com/embed/track/0cP8fL9xvi8OYisR8OJuzN","",""];
let textos = ["texto brendon","Querida futura esposa, escrevo esta mensagem para celebrar este dia especial em homenagem a você, uma mulher única, que tenho a sorte de estar ao seu lado.Sendo eu apenas um pequeno príncipe que teve a oportunidade de ter uma rosa para chamar de minha tão bela, inteligente e, acima de tudo, alguém que sempre estará ao meu lado. ❤️❤️❤️Parabéns para você, minha vida! Te amo. ❤️","",""];
let imgs = [["brendo1.jpeg","brendo2.jpeg","brendo3.jpeg","brendo4.jpeg"],["gustavo1.jpeg","gustavo2.jpeg","gustavo3.jpeg","gustavo4.jpeg"],["","","","",""],["","","","",""],["","","","",""],];
let texto = ["Brendon ❤️ Ana Clara","Gustavo ❤️ Carina","Brendon ❤️ Ana Clara","Brendon ❤️ Ana Clara"];
let data = ["2024-12-25","2024-10-11"]
function aparecerInput(){
    document.querySelector(".click").style.display = 'none';
    let ocutos = document.querySelectorAll(".ocuto");
    ocutos.forEach(element => {
        element.style.display = "block";
    });
}

function codigo(){
    console.log("entrou")
    let senha = document.querySelector(".InputSenha").value;
    if(senha ==="chuchu" || senha === "chocolateG" ){
        let ocutos = document.querySelectorAll(".ocuto");
    ocutos.forEach(element => {
        element.style.display = "none";
    });
        document.querySelector(".conteudo").style.display = 'grid';
        document.querySelector(".senha").style.display = 'none';
        if(senha === "chuchu"){
            pessoa(0);
        }
        else if(senha === "chocolateG"){
            pessoa(1);
        }
    }
}


function gerarCoracao(){
    const conteine = document.querySelector(".conteudo");
    const coracao = document.createElement("span");
    coracao.innerHTML = "❤️";
    coracao.classList.add("coracao");

    let tamanho = Math.random() * 20 + 10;
    coracao.style.fontSize = `${tamanho}`

    let posX = Math.random() * conteine.clientWidth - 30; // Posição aleatória na tela
    coracao.style.left = `${posX}px`;

    let duracao = Math.random() * 3 + 2; // Tempo de queda entre 2s e 5s
    coracao.style.animationDuration = `${duracao}s`;

    conteine.appendChild(coracao);

    setTimeout(() => {
        coracao.remove(); // Remove o coração após a animação
    }, duracao * 1000);
}


function tempoDeNamoro(DataFuturo){
    let dataFinal = new Date(DataFuturo);
    let agora = new Date();
    let diferenca = agora-dataFinal;

    let segundos = Math.floor(diferenca/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    let anos = Math.floor(dias/365);
    dias %=365;
    let meses = Math.floor(dias/30);
    dias %= 30;
    horas %= 24;
    minutos%= 60;
    segundos %=60;
    document.getElementById("dataT").innerHTML = `${anos} anos, ${meses}  meses, ${dias}  dias, ${horas} horas, ${minutos} minutos e ${segundos}  segundos`;
    }

    function pessoa(num) {
        let tela = document.querySelector(".tela")
        tela.src = `/fotos/${imgs[num][0]}`
        let cont = 1;
        document.querySelector("#musica").src = musicas[num];
        document.querySelector(".loveTexto").innerHTML = texto[num];
        document.querySelector("#descricao").innerHTML = textos[num];

        setInterval(() => {
            console.log(num)
            tela.src = `/fotos/${imgs[num][cont]}`
            cont++;
            if(cont === 4){
                cont = 0;
            }
        }, 3000);
        setInterval(() => tempoDeNamoro(data[num]),1000);
    }

setInterval(() => gerarCoracao(),300);

