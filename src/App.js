import React, { Component } from 'react'
import './index.css';
import Table from './Table';
import {characters} from "./Data"

class App extends Component {

  render (){
    
    return (
      <Table characterData = {characters}/>
    );
  }

}

export default App;
