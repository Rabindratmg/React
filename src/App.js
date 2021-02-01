import React, { Component } from 'react';


class App extends Component {
  state = {
    count: 0
  
    
    }
    increase=()=>{
      this.setState({ count: this.state.count+1 });
    }
    decrease=()=>{
      if(this.state.count>0){
        this.setState({ count: this.state.count-1 });
      }
      else{
        this.setState({count: 0});
      }
     
    }
  render() { 
    
    return ( 
      <div>
            <button onClick={ this.decrease }>-</button>{ this.state.count } <button  onClick={ this.increase }>+</button>
           
       </div>
     );
  }
}
 
export default App;


