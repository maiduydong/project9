import React, {Component} from 'react';
export class Box extends Component {
    constructor(props){
        super(props);
        this.state = {count :10};
        // setInterval(()=> {
        //     this.setState({count:this.state.count +1});
        // }, 1000);
        this.increase = this.increase.bind(this);
        
    }
    increase(){
        this.setState({count: this.state.count +1});
    }
    render(){
        return(
            <div>
            <p> value ={this.state.count}</p>
            <button onClick={ this.increase}>Increase</button>
            </div>                
        );
    }
}
