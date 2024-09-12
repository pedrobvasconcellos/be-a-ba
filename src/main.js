import{ game } from './game';

const newGameButtonElem = document.getElementById('new-game');
const inputElem = document.getElementById('word');
const errorElem = document.getElementById('erro');
const streakElem = document.getElementById('streak')

newGameButtonElem.addEventListener('click', function(){
    game.newGame();
    const lettersElem = document.querySelectorAll('.square');
    for(let i = 0; i < lettersElem.length; i++)
    {
        lettersElem[i].innerHTML = game.letters[i].toUpperCase();
    }
    inputElem.disabled = false;
    inputElem.value = '';
    inputElem.focus();
    errorElem.style.visibility = 'hidden';
    streakElem.style.visibility = 'hidden';
});

    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const word = formData.get('word');

        const isWordValid = game.validateWord(word);

        if(isWordValid)
        {
            streakElem.innerHTML = game.streak;
            errorElem.style.visibility = 'hidden';
        }else{

        }
    });