export const game = {
    letters: [],
    error: false,
    streak: 0,
    inputedWords: [],
    newGame: function(){
        this.letters = [];

        const alphabet = 'aabcdeefghiijlmnoopqrstuuvxz';

        this.letters = new Array(3).fill().map(function(letters){
            const randomIdex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIdex];
        });

        this.word = '';
        this.error = false;
        this.streak = 0;
    },
    validateWord: async function(word){
        const templetters = [...this.letters]
        for(let i = 0; i < this.letters.length; i++)
        {
            if(this.word.includes(tempLetters) === false) {
                return false;
            }
            templetters.slice(templetters.indexOf(tem))
        }
        if(this.inputedWords.includes(word)){
            return false;
        }

        const rawData = await fetch('https://api.dicionario-aberto.net/word/${word}');
        const data = await rawData.json();

        if(!data.length){
            return false;
        }

        this.inputedWords.push(word);
        this.streak++;
        return true;

        //https://api.dicionario-aberto.net/word/${word}
    }
}