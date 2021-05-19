//inciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']

//no handleMove ele pega a posição que passamos do evento la do interface.js e pega a posição do board que passamos e adiciona a ele um symbol que começa na posição 0 de acordo com o playerTime
function handleMove(position){
    board[position] = symbols[playerTime]

    //depois fazemos uma verificação com if para que se o playerTime for igual a 0 ele mude para 1 e se for igual a 1 ele mude para 0
    if(playerTime == 0){
        playerTime = 1
    }else{
        playerTime = 0
    }
}