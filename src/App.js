import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header name={'test name'} />
        <div>
          <input />
          <button>Test</button>
        </div>        
      </Fragment>
    );
  }
}

export default App;