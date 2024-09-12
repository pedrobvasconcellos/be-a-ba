export const game = {
    letters: [],
    error: false,
    streak: 0,
    newGame: function(){
        this.letters = [];

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        this.letters = new Array(3).fill().map(function(letters){
            const randomIdex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIdex];
        });

        this.word = '';
        this.error = false;
        this.streak = 0;
    },
    validateWord: function(word){
        for(let i = 0; i < letters.length; i++)
        {
            if(this.word.includes(letters[i] === false)) {
                this.error = true;
                return false;
            }
        }

        this.streak++;
        return true;
    }
}