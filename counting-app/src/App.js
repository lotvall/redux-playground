import React from 'react';
import {connect} from 'react-redux'
import {plusCount, minusCount, resetCount} from './actions'

const App = ({count, plusCount, minusCount, resetCount}) => {

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCount}> Reset</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  plusCount: () => dispatch(plusCount()),
  minusCount: () => dispatch(minusCount()),
  resetCount: () => dispatch(resetCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
