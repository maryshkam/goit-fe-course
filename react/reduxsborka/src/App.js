import React, { Component } from 'react';
import {first} from './redux/actions/firstAction';
import {connect} from 'react-redux';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let {add} = this.props;
    return (
      <div>
        <button onClick={add}>+</button>
      </div>
    );
  }
}



function mapStateToProps (state) {
  return {
    value: state.first,
    
  }
}


function mapDispatchToProps (dispatch) {
return {
  add: function() {
    dispatch(first(5))
  },
}
}



export default connect(mapStateToProps,mapDispatchToProps) (App);
