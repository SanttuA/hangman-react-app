import React, { Component } from 'react';
import './App.css';
import Images from './scripts/Images';
import Word from "./scripts/Word";
import WordChooser from "./scripts/WordChooser";
import LetterButton from './components/LetterButton';

class App extends Component {

  constructor(props){
    super(props);
    this.treePictures = new Images();
    this.wordChooser = new WordChooser();
    this.treeWord = new Word(this.wordChooser.getRandomWord());
    this.handleClick = this.handleClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.state = {
      theme: "Fruits",
      imageSrc : this.treePictures.getCurrentImage(),
      word: this.treeWord.getCurrentSolution(),
      usedLetters: this.treeWord.getUsedLetters(),
      gameOver: false,
      gameOverText: "Game Over"
    };
  }

  //handles restarting the game with a new word
  handleRestart(){
    this.treePictures = new Images();
    this.treeWord = new Word(this.wordChooser.getRandomWord());
    this.setState({
      imageSrc : this.treePictures.getCurrentImage(),
      word: this.treeWord.getCurrentSolution(),
      usedLetters: this.treeWord.getUsedLetters(),
      gameOver: false,
      gameOverText: "Game Over"
    });
  }

  //  handles clicks on letter buttons.
  //  clicking a letter button uses it in the hangman game.
  handleClick(letter){
    //use the letter in hangman game
    this.treeWord.useCharacter(letter);
    //if used character isn't in the word, grow tree by one
    //disable used letter button regardless
    if(!this.treeWord.isCharacterInWord(letter)){ 
      this.setState({
        imageSrc : this.treePictures.getNextImage(),
        word : this.treeWord.getCurrentSolution(),
        usedLetters: this.treeWord.getUsedLetters()
      });
      //if tree is completed, player lost
      if(this.treePictures.isLastImageReached()){
        this.setState({
          gameOverText: "Game Over",
          gameOver: true
        });
      }
    }
    //if character is in the word, check if player wins
    else{
      this.setState({
        word : this.treeWord.getCurrentSolution(),
        usedLetters: this.treeWord.getUsedLetters()
      });
      //if word is solved, player wins
      if(this.treeWord.isWordSolutionComplete()){
        this.setState({
          gameOverText: "You Won!",
          gameOver: true
        });
      }
    }  
  }

  //creates a letter button with given letter
  renderLetterButton(letter){
    let isDisabled = false;
    if(this.treeWord.usedLetters.includes(letter)){
      isDisabled = true;
    }
    return (
      <LetterButton 
        letter={letter}
        onClick={() => this.handleClick(letter)}
        disabled={isDisabled}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <h1>Theme: {this.state.theme}</h1>
        <img onClick={this.handleClick} src={this.state.imageSrc} alt="hangman tree"/>
        <p>{this.state.word}</p>

        <div className="button-row" hidden={this.state.gameOver}>
          {this.renderLetterButton("A")}
          {this.renderLetterButton("B")}
          {this.renderLetterButton("C")}
          {this.renderLetterButton("D")}
          {this.renderLetterButton("E")}
          {this.renderLetterButton("F")}
          {this.renderLetterButton("G")}
          {this.renderLetterButton("H")}
          {this.renderLetterButton("I")}
          {this.renderLetterButton("J")}
          {this.renderLetterButton("K")}
          {this.renderLetterButton("L")}
          {this.renderLetterButton("M")}
        </div>
        <div className="button-row" hidden={this.state.gameOver}>
          {this.renderLetterButton("N")}
          {this.renderLetterButton("O")}
          {this.renderLetterButton("P")}
          {this.renderLetterButton("Q")}
          {this.renderLetterButton("R")}
          {this.renderLetterButton("S")}
          {this.renderLetterButton("T")}
          {this.renderLetterButton("U")}
          {this.renderLetterButton("V")}
          {this.renderLetterButton("W")}
          {this.renderLetterButton("X")}
          {this.renderLetterButton("Y")}
          {this.renderLetterButton("Z")}
        </div>
        <p hidden={!this.state.gameOver}>{this.state.gameOverText}</p>
        <button onClick={this.handleRestart} hidden={!this.state.gameOver}>Play Again</button>
      </div>
    );
  }
}

export default App;
