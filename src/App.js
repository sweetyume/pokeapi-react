import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import InputSearch from './components/InputSearch';

class App extends Component {
  state = {

  }
  updateSearchNumber = (num) => {
    this.setState({
      pokenum: num
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputSearch func={this.updateSearchNumber}/>
        <DisplayPokemon num={this.state.pokenum}/>
      </div>
    );
  }
}
// func permet de faire descendre la function en argument/props
export default App;
