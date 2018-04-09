import React, {Component} from 'react';
export class Box extends Component {
    constructor(props){
        super(props);
        this.state = {count :10};
    }
    render(){
        return(
            <p> value :{this.state.count}</p>
        );
    }
}
