/*
    handles most of the hangman word mechanics like creating
    a string which holds player's current solution with hidden
    characters (eg "S _ R W _ E R R _" ) and means to reveal each
    character.
*/
class Word{

    constructor(answer){
        //make sure given word is in upper case
        this.answer = answer.toUpperCase();
        //create player's solution with hidden characters
        this.currentSolution = this.answer.replace(/[A-Z]/g, "_");
        //an array to hold player's previously used characters
        this.usedLetters = [];
    }

    //returns boolean telling wheter a given character is in the answer word
    isCharacterInWord(character){
        if(this.answer.match(character) != null){
            return true;
        }
        else{
            return false;
        }
    }

    //reveals specified characters from current solution
    revealCharacters(character){
        let solutionCharacters = this.currentSolution.split("");
        for(let i = 0; i < this.answer.length; i++){
            if(this.answer[i] === character){
                solutionCharacters[i] = character;
            }
        }
        this.currentSolution = solutionCharacters.join("");       
    }

    //use one character and reveal all matches in current solution
    useCharacter(character){
        this.usedLetters.push(character);
        if(this.isCharacterInWord(character)){
            this.revealCharacters(character);
        }
    }

    //is the current solution a complete match with answer ie no hidden chars left
    isWordSolutionComplete(){
        if(this.currentSolution.match("_") == null){
            return true;
        }
        else{
            return false;
        }
    }

    //gets a formatted current solution
    getCurrentSolution(){
        return this.formatWord(this.currentSolution);
    }

    //formats a word to have space inbetween letters
    formatWord(word){
        return word.split("").join(" ");
    }

    //returns an array holding all previously used characters for the solution
    getUsedLetters(){
        return this.usedLetters;
    }
}

export default Word;