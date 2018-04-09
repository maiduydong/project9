import React, {Component} from 'react';


export class Word extends Component{
    render(){
      const {en, vn, isMemorized} = this.props.wordInfo;

      return(
        <div>
          <h3 className ={isMemorized ? 'green' : 'red'}> {en}</h3>
          <p className = "green">{vn}</p>
        </div>
      );
    }
  }

