import './App.css';
import React, { Component } from 'react';
import StringRev from './components/StringRev.js';
import Palindrome from './components/Palindrome.js';
import ReverseInt from './components/ReverseInt.js';
import MaxChars from './components/MaxChars.js';
class App extends Component {

  render() {
    return(
      <div class="app-container">

        <div class="questions">
          <StringRev/>
        </div>

        <div class="questions">
          <Palindrome />
        </div>
        
        <div class="questions">
          <ReverseInt />
        </div>

        <div class="questions">
          <MaxChars />
        </div>

      </div>
    )
  }
}

export default App;
