//Criara o elemento que ira rodar o jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

//Criar cobrinha como vetor,ja que ela vai ser um série de cordenadas, que quando pintadas, criam os quadrinhos 
let snake = [0] ={
    x: 8 * box,
    y: 8 * box
}
//Direção
let direction = "right"

//Comida
let foot ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
//Função para criar o background
function criarBG() {
    context.fillStyle = "lightgreen";
    //Desenha o retângulo usando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//função para criar a cobrinha 
function criarCobrinha (){
    for(i = 0; i < snake.length; i==){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
//Quando um evento acontece, detecta e chama a função update 
document.addEventListener('keydown', update);

function update(event){
    if (event.KeyCode == 37 && direction != 'right') derection = 'left';
    if (event.KeyCode == 38 && direction != 'down') derection = 'up';
    if (event.KeyCode == 39 && direction != 'left') derection = 'right';
    if (event.KeyCode == 40 && direction != 'up') derection = 'down';
}
//Função principal
function iniciarJogo() {
    if (snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if (snake[0].x < 0 && direction == 'left'){
        snake[0].x = 16 * box;
        }

    if (snake[0].y > 15*box && direction == "down"){
        snake[0].y = 0;
        }
    if (snake[0].y < 0 && direction == 'up'){
        snake[0].y = 16 * box;  
}
criarBG();
criarCobrinha();
drawFood();

let snakeX = snake[0].x;
let snakeY = snake[0].y;

if(direction == "rigth") snakeX += box;
if(direction == "left") snakeX -= box;
if(direction == "up") snakeX -= box;
if(direction == "down") snakeX += box;

if(snakeX != food.x || snakeY != food.y){
    snake.pop(); //pop tira o ultimo elemento da lista
}else{
    food.x = Math.floor(Math.random()* 15 +1) * box;
    food.y = Math.floor(Math.random()* 15 +1) * box;
}
let newHead ={
    x: snakeX,
    y: snakeY
}

snake.unshift(newHead); //método unshift adiciona como primeiro quadrinho da cobrinha