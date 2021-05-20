//inciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let gameOver = false

let symbols = ['o', 'x']

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//no handleMove ele pega a posição que passamos do evento la do interface.js e pega a posição do board que passamos e adiciona a ele um symbol que começa na posição 0 de acordo com o playerTime
function handleMove(position){

    //aqui nos verificamos se o jogo acabou
    if(gameOver){
        return
    }

    //aqui ele vai verificar se o elelemnto e igual a vazio para que eu não consiga mudar o elemento que ja foi colocado.
    if(board[position] == ''){
        board[position] = symbols[playerTime]

        gameOver = isWin()

        //depois fazemos uma verificação com if para que se o playerTime for igual a 0 ele mude para 1 e se for igual a 1 ele mude para 0
        if(gameOver == false){
            //aqui simplificamos o if, se o player time for iguala a 0 ele vai pegar o numeor 1 que etsa depois do ?, senão ele pega o numero 0 que esta depois do :
            playerTime = (playerTime == 0) ? 1 : 0
        } 
    }
    return gameOver
}

//aqui criamos uma array com outras array dentro com o numero que corresponde a posição vencedora no jogo da velha
function isWin(){
    //aqui no for ele vai pegar cada um dos array que tem na winStates para verificar quem ganhou.
    for(let i = 0; i < winStates.length; i++){
        //aqui nos estamos pegando cada uma das array do winStates depois que elas passam pelo for.
        let seq = winStates[i]

        //aqui ele recebe a posição 0 do array e coloca ele na varivel de nome pos1.
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        //aqui ele verifica se na posição 1, 2, 3 são iguais e retorna true, avisando que a pessoa ganhou
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true
        }
    }
    return false
}
function reset(){
    let board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0
    gameOver = false
    result.innerHTML = ""
    restart()
}