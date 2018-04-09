import React, { Component } from 'react';
import {Word} from './components/Word';

import './App.css';

export class App extends Component {
  render() {
  const arr =[
    {en: 'One', vn:'Mot', isMemorized: true},
    {en: 'Two', vn:'Hai', isMemorized: true},
    {en: 'Three', vn:'Ba', isMemorized: true},
    {en: 'Four', vn:'Bon', isMemorized: true}

  ];
    return (
      <div>
        {arr.map (w => <Word wordInfo ={w}/>)}
        
      </div>
    );
  }
}





