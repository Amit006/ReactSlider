import React from 'react';

class Slides extends React.Component {
  render() {
    const { slides, PrevFn, Next, ReSet, index } = this.props;
    console.log(' slides: ', slides, ' index: ', index );
    return (
      <div>
        <div id="navigation">
          <button data-testid="button-restart" onClick={()=>ReSet()} >Restart</button>
          <button data-testid="button-prev" onClick={()=>PrevFn(index)}>Prev</button>
          <button data-testid="button-next" onClick={()=>Next(index)}>Next</button>
        </div>
        <div id="slide">
          <h1 data-testid="title">{slides[index].title }</h1>
          <p data-testid="text">{slides[index].text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
