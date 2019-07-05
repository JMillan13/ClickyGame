import React, { Component } from "react";
import CharacterCard from "./components/characterCard";
import Wrapper from "./components/Wrapper";
import MyNav from "./components/MyNav";
import Characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  removecharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    return (
      <Wrapper>
        <MyNav score={0} topScore={12}/>
        {this.state.characters.map(character => (
          <characterCard
            removecharacter={this.removecharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
