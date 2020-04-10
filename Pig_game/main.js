
let scores, roundScore, activePlayer, gamePlaying, highScore

highScore = parseInt(prompt("What is your High Score"))

let init = () => {
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true


    document.querySelector('.dice').style.display = 'none'

    // make values zero
    document.querySelector('#score-0').textContent = '0'
    document.querySelector('#score-1').textContent = '0'
    document.querySelector('#current-0').textContent = '0'
    document.querySelector('#current-1').textContent = '0'

    document.querySelector('#name-0').innerHTML = '<div>' + 'Player 1' + '</div>'
    document.querySelector('#name-1').innerHTML = '<div>' + 'Player 2' + '</div>'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

// start game
init()

let prevDice
// dice = Math.floor(Math.random() *6) + 1
// console.log(dice)

// document.querySelector('#current-' + activePlayer).textContent = dice


document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {

        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1
        console.log(dice)

        // 2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        // 3. Update the round score IF not 1
        if (prevDice == 6 && dice == 6) {
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = '0'
            nextPlayer()

        } else if (dice !== 1) {
            roundScore = roundScore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore

        } else {
            nextPlayer()
        }
    }

    prevDice = dice
})

document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gamePlaying) {

        // add current score to global score
        scores[activePlayer] = scores[activePlayer] + roundScore

        // update the global UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // check if player own the game
        if (scores[activePlayer] >= highScore) {
            document.querySelector('#name-' + activePlayer).innerHTML = '<div>' + 'WINNER!!!' + '</div>'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')

            document.querySelector('.dice').style.display = 'none'
            gamePlaying = false
        } else {
            nextPlayer()
        }
    }

})

document.querySelector('.btn-new').addEventListener('click', init)

let nextPlayer = () => {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

    roundScore = 0
    document.querySelector('#current-0').textContent = '0'
    document.querySelector('#current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}

