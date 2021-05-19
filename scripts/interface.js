//primeira criamos um listener que vai ser executado quando a pagina for carregada.
document.addEventListener('DOMContentLoaded',()=>{
    //nesse listener ele pegar os quadrados do nosso jogo e coloca na variavel squares.
    let squares = document.querySelectorAll(".square")

    //depois ele vai fazer um forEach() que vai executar uma função em cada um dos elemento do squares.
    squares.forEach((square)=>{
        //ele adiciona um evento de click nos elementos, e passamos a função que ele vai executar ao clicar nos elelemtos.
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    //no target ele vai pegar o elemento que recebeu o evento e colocar em uma variavel square.
    let square = event.target
    //aqui nos pegamos o id do square que recebeu o target acima e vamos chama-lo de position.
    let position = square.id
    
    //ai aqui nos passamos a position que e o id do nosso elemento para o handleMove que esta la no game.js.
    handleMove(position)
    //e aqui rodamos outra função que vai atualizar nossos objetos colocando o escudo ou a as espadas.
    updateSquares()
}
