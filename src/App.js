import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CharactersCard from './components/characterCard'
import Footer from './components/footer'
import characters from "./character.json";
import './App.css';


//sets state to 0 
class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0
  }

  //the order of components to be rendered: navbar, Hero, CharacterCard, footer 
  render() {
    return (
      <>
        <p></p>
        <Navbar score={this.state.score} />
        <Hero />
        <section className="section is-warning wrapper">

          {this.state.characters.map(character => (
            <CharactersCard
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}

        </section>
        <Footer />
      </>
    );
  }
}
export default App;
