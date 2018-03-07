
class WordChooser{

    constructor(){
        //add some words to play with...
        this.words = ["strawberry", "mango", "orange", "grapefruit", "banana", "tomato",
    "watermelon", "apple"];
    }

    //returns a random word from this instance's word array
    getRandomWord(){
        //get random word between 0 and words length-1
        let word = this.words[Math.floor((Math.random() * this.words.length-1))];
        return word;
    }
}

export default WordChooser;