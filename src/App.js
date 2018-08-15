import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      objs : [ 'pho', 'ramen', 'diet'],
      rand : ''
    
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleAdd(event) {
    let currObjs = this.state.objs;
    let textBox = event.target.previousElementSibling;

    if (textBox.value) {
      currObjs.push(textBox.value);
      textBox.value = '';
      this.setState({
        objs : currObjs
      });
    }
  }

  handleDelete(event) {
    let currObj = event.target.textContent;
    let updatedObjs = this.state.objs.filter((obj) => obj.trim() !== currObj.trim());
    //const match = currObj.trim() == this.state.objs[0].trim();
    //match ? alert("YEA") : alert("NO");
    this.setState({
      objs : updatedObjs
    });
  }

  handleRandom() {
    let currObjs = this.state.objs;
    this.setState({
      rand : currObjs[Math.floor(Math.random() * currObjs.length)]
    });
  }

  handleClear() {
    this.setState({
      objs : [],
      rand : ''
    });
  }

  render() {

    let objItem = this.state.objs.map( 
      (obj, i) => {return <li className="Object" 
                              onClick={this.handleDelete} 
                              key = {i}> 
                              {obj} 
                          </li>}
    );

    return (
      <div className="App">    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Be a random person and do the right tings!</h1>
          <p className="PS"> P.S. CLICK TO DELETE</p>
        </header>

        <input className="TextBox" type="text" />

        <button className="Adding" onClick={this.handleAdd}>
          ADD
        </button>

        <ul> {objItem} </ul>

        <button className="Return" onClick={this.handleRandom}>
          RUN
        </button>

        <button className="Clear" onClick={this.handleClear}>
          CLEAR
        </button>

        <p className="Result"> {this.state.rand} </p>
      </div>
    );
  }
}

export default App;
