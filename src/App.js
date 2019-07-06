import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import MyNav from "./components/MyNav";
import Characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters: Characters,
    clickedCharacters: [],
    points: 0,
    topScore: 0,
  };

  removecharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  shuffleCharacters = () => {
    this.setState({
      characters: this.state.characters.sort(() => Math.random() - 0.5)
    })
  }

  resetGame = () => (
    this.setState({
      clickedCharacters: [],
      points: 0
    })
  )

  checkHighScore = () => {
    const {points, topScore} = this.state;
    if (points > topScore) {
      this.setState({topScore: points});
    }
  }

  handleClick = (id) => {
    const { clickedCharacters, points, topScore } = this.state;

    if(clickedCharacters.includes(id)){
      alert("You lost.")
      this.resetGame()
      this.shuffleCharacters()
      return false
    };

    this.setState({
      points: points + 1,
      clickedCharacters: [...clickedCharacters, id],
    }, () => this.checkHighScore())

    this.shuffleCharacters()
    if(clickedCharacters.length + 1 === 12){
      alert('You Won!')
      this.resetGame()
      return false
    }
  }

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    const {points, topScore} = this.state;
    return (
      <Wrapper>
        <MyNav score={points} topScore={topScore} />
        {this.state.characters.map(character => (
          <CharacterCard
            clickHandler={() => this.handleClick(character.id)}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
