let musicas = [
  "https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl",
  "https://open.spotify.com/embed/track/0cP8fL9xvi8OYisR8OJuzN",
  "https://open.spotify.com/embed/album/5O5pnKHDJrwvL6w9Ne1mka",
  "https://open.spotify.com/embed/track/0IF9rfUDnqe1aGqboZH14u",
  "https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe",
  "https://open.spotify.com/embed/track/75T4td0kzWadHVTiT7KTsf"
];
let textos = [
  "Esse era pra ser o seu presente de Dia das Mulheres, mas eu acabei me atrasando… Mas eu não ligo, porque, pra mim, todo dia deveria ser o seu dia. Você é a pessoa incrível que eu amo, e, por isso, pra mim, todo dia é seu dia. Comecei a te amar em 25/12/2024, e vou te amar até o último dos meus dias. 💖Ana Clara, te amo ontem, hoje, amanhã e para sempre. Você será sempre a minha MULHER. 😘 Te amo, chuchu! 💕",
  "Querida futura esposa, escrevo esta mensagem para celebrar este dia especial em homenagem a você, uma mulher única, que tenho a sorte de estar ao seu lado.Sendo eu apenas um pequeno príncipe que teve a oportunidade de ter uma rosa para chamar de minha tão bela, inteligente e, acima de tudo, alguém que sempre estará ao meu lado. ❤️❤️❤️Parabéns para você, minha vida! Te amo. ❤️",
  "Nesse dia especial, gostaria de dedicar essa mensagem a mulher que mais encanta minha vida. Um presente mais que especial, pra essa mulher que merece o mundo.Tenho sorte de você ser a mulher da minha vida e serei mais feliz ainda tendo você para todo o sempre.Eu te amo com todo o meu ser e desejo que esse dia seja muito mais que especial.❤",
  "Meu amor, hoje é o Dia das Mulheres, mas para mim, todos os dias são teus. Teu sorriso me traz felicidade, teu carinho me conforta, tua presença me envolve, e teu amor ilumina minha vida. Sou imensamente sortudo por ter você ao meu lado. Feliz dia, minha pequena, porque especial como você não existe outra!",
  "Amar você é a melhor parte da minha vida",
  "Amor, eu só queria te lembrar do quanto você é importante pra mim. Às vezes eu paro pra pensar em tudo e percebo o quanto sou grato por ter você na minha vida. Seu jeito, sua companhia, tudo em você me faz bem. Eu gosto de você de verdade, gosto de estar com você, de rir com você e de viver as coisas ao seu lado. Se hoje eu me declaro assim é porque meu coração é teu, e eu quero continuar construindo muita coisa linda com você, eu te amo muito nega❤️🫶🏽"
];

let imgs = [
  ["brendo1.jpeg","brendo2.jpeg","brendo3.jpeg","brendo4.jpeg"],
  ["gustavo1.jpeg","gustavo2.jpeg","gustavo3.jpeg","gustavo4.jpeg"],
  ["thadeu1.jpg","thadeu2.jpg","thadeu3.jpg","thadeu4.jpg"],
  ["artur1.jpg","artur2.jpg","artur3.jpg","artur4.jpg"],
  ["francis1.jpg","francis2.jpg","francis3.jpg","francis4.jpg"],
  ["gustavoGabi1.jpg","gustavoGabi2.jpg","gustavoGabi3.jpg","gustavoGabi4.jpg"]
];

let texto = [
  "Brendon ❤️ Ana Clara",
  "Gustavo ❤️ Carina",
  "Thadeu ❤️ Kary Trajano",
  "Artur ❤️ Sabrina",
  "Francis ❤️ Yohanne",
  "Gustavo ❤️ Gabi"
];

let data = [
  "2024-12-25",
  "2024-10-11",
  "2022-06-27",
  "2024-11-30",
  "2023-10-10",
  "2025-3-11"
];
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
    if(senha ==="chuchu" || senha === "xibiru" || senha ==="jubibis" || senha === "1812"|| senha === "1010" || senha === "Motoca"  ){
        let ocutos = document.querySelectorAll(".ocuto");
    ocutos.forEach(element => {
        element.style.display = "none";
    });
        document.querySelector(".conteudo").style.display = 'grid';
        document.querySelector(".senha").style.display = 'none';
        if(senha === "chuchu"){
            pessoa(0);
        }
        else if(senha === "xibiru"){
            pessoa(1);
        }
        else if(senha === "jubibis"){
            pessoa(2);
        }
        else if(senha === "1812"){
            pessoa(3);
        }
        else if(senha === "1010"){
            pessoa(4);
        }
        else if(senha === "Motoca"){
            pessoa(5);
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

    let duracao = Math.random() * 3 + 2; 
    coracao.style.animationDuration = `${duracao}s`;

    conteine.appendChild(coracao);

    setTimeout(() => {
        coracao.remove(); // Remove o coração após a animação
    }, duracao * 1000);
}


function tempoDeNamoro(DataFuturo){
    let dataFinal = new Date(DataFuturo);
    let agora = new Date();

    let anos = agora.getFullYear() - dataFinal.getFullYear();
    let meses = agora.getMonth() - dataFinal.getMonth();
    let dias = agora.getDate() - dataFinal.getDate();
    let horas = agora.getHours() - dataFinal.getHours();
    let minutos = agora.getMinutes() - dataFinal.getMinutes();
    let segundos = agora.getSeconds() - dataFinal.getSeconds();

    // Ajustes caso algum valor seja negativo
    if(segundos < 0){ segundos += 60; minutos--; }
    if(minutos < 0){ minutos += 60; horas--; }
    if(horas < 0){ horas += 24; dias--; }
    if(dias < 0){
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate(); // dias do mês anterior
        dias += ultimoMes;
        meses--;
    }
    if(meses < 0){ meses += 12; anos--; }

    document.getElementById("dataT").innerHTML = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

function MoveriMG(num){
    let tela = document.querySelectorAll(".tela")
    let bolinhas = document.querySelectorAll(".bolinha");
    let cont = 3;
    let contB = 1;
    let i = 0;
    tela.forEach(element=> {
        element.src = `/fotos/${imgs[num][i]}`
        if(i<3){
            element.style.left = "100%";
        }
        i++;
    });
    
    setInterval(() => { 
        if(contB !=0){
            bolinhas[contB].style.width = "1rem";
            bolinhas[contB].style.height = "1rem";
            bolinhas[contB-1].style.width = "0.5rem"
            bolinhas[contB-1].style.height = "0.5rem"
        }
        else{
            bolinhas[contB].style.width = "1rem"
            bolinhas[contB].style.height = "1rem"
            bolinhas[3].style.width = "0.5rem"
            bolinhas[3].style.height = "0.5rem"
        }
        contB = (contB+1)%4
    }, 3000);
    setInterval(() => { 
    if(cont!=0){
        tela[0].style.transition = "none";
        tela[0].style.left = "100%"
        tela[cont].style.transition = "0.6s";
        tela[cont].style.left = "-100%"
        tela[cont-1].style.transition = "0.6s";
        tela[cont-1].style.left = "0%"
        if(cont === 2){
            tela[3].style.transition = "none";
            tela[3].style.left = "100%"
        }
    }
    else{
        for(let i = 1; i <4; i++){
                tela[i].style.transition = "none";
                tela[i].style.left = "100%";
        }
        tela[0].style.transition = "0.6s";
        tela[0].style.left = "-100%"
        tela[3].style.transition = "0.6s";
        tela[3].style.left = "0%"

    }
    cont = (cont - 1 + 4) % 4;
}, 3000);
}

function pessoa(num) {
    let bolinhas = document.querySelectorAll(".bolinha");
    console.log(num)

    let tela = document.querySelectorAll(".tela")
    let telas = tela[0]
    bolinhas[0].style.width = "1rem"
    bolinhas[0].style.height = "1rem"
    telas.src = `/fotos/${imgs[num][0]}`
    document.querySelector("#musica").src = musicas[num];
    document.querySelector(".loveTexto").innerHTML = texto[num];
    document.querySelector("#descricao").innerHTML = textos[num];
    MoveriMG(num);  
    setInterval(() => gerarCoracao(),300);
    setInterval(() => tempoDeNamoro(data[num]),1000);
}



