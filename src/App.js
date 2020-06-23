import React, { Component, useState } from 'react';
import './App.css';

import Slides from './components/Slides';

class App extends Component {

  state = { index: 0}
  PrevFn = (i) =>  {
    if( i >0 )
      this.setState({index: i-1})
}
 Next = (i) =>{
 console.log('next', i);
  if(i < this.props.slides.length){
    console.log(' from h')
    this.setState({index: i+1})
  } 
   
}
 ReSet = () => {
 this.setState({index: 0});
}


componentDidUpdate(oldProps) {
  console.log(' ComponentDidUpdate : ', oldProps);
   if(oldProps !== this.props.data){
      //  this.setState({
      //    index: this.props.index
      //  })
       console.log(' props not Match');
   }
}

  render() {
    const { slides } = this.props;
    // let state = { index: 0};
    // this.state={index: 0};
    // const [ count, setCount] = useState(0)
   
    console.log(' this.state.index: ', this.state.index);
    return (
      <div className="App">
        <Slides slides={slides} PrevFn={this.PrevFn} Next={this.Next} ReSet={this.ReSet} index={this.state.index} />
      </div>
    );
  }
}

export default App;
