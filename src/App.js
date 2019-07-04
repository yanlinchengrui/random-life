import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      objs: ['pho', 'ramen', 'diet'],
      rand: ''

    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleAdd(event) {
    const currObjs = this.state.objs;
    const textBox = event.target.previousElementSibling;

    if (textBox.value) {
      currObjs.push(textBox.value);
      textBox.value = '';
      this.setState({ objs: currObjs });
    }
  }

  handleEnter(event) {
    if ((event.keyCode === 13 || event.key === 'Enter') && event.target.value) {
      event.preventDefault();
      const currObjs = this.state.objs;
      currObjs.push(event.target.value);
      this.setState({ objs: currObjs });
      event.target.value = '';
    }
  }

  handleDelete(event) {
    let currObj = event.target.textContent;
    let updatedObjs = this.state.objs.filter((obj) => obj.trim() !== currObj.trim());
    this.setState({
      objs: updatedObjs
    });
  }

  handleRandom() {
    let currObjs = this.state.objs;
    this.setState({
      rand: currObjs[Math.floor(Math.random() * currObjs.length)]
    });
  }

  handleClear() {
    this.setState({
      objs: [],
      rand: ''
    });
  }

  render() {

    let objItem = this.state.objs.map(
      (obj, i) => {
        return (
          <ListGroupItem onClick={this.handleDelete} key={i} style={{ cursor: "pointer", border: "1px solid black", backgroundColor: "gold", marginBottom: "3px" }}>
            {obj}
          </ListGroupItem>);
      }
    );

    return (
      <div className="App">
        <Jumbotron />

        <form onKeyPress={this.handleEnter}>
          <input autoFocus type="textarea" className="textBox" name="text" placeholder="TELL ME" />
          <Button color="warning" onClick={this.handleAdd}>
            ADD
          </Button>
        </form>

        <ListGroup className="my-5" style={{ width: "50vw", margin: "0 auto", fontSize: "1.5em" }}>
          <ReactCSSTransitionGroup
            transitionName="myChoices"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

            {objItem}
          </ReactCSSTransitionGroup>
        </ListGroup>

        <form>
          <Button color="success" onClick={this.handleRandom}>
            RUN
          </Button>
          <Button color="danger" className="ml-3" onClick={this.handleClear}>
            CLEAR
          </Button>
        </form>

        {
          this.state.rand &&
          <p className="result mt-5 App-footer">
            <span role="img" aria-label="checkmark">✔️</span>️ {this.state.rand}
          </p>
        }

      </div>
    );
  }
}

export default App;
