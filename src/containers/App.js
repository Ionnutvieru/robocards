import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import RefreshButton from '../components/RefreshButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heart } from 'react-bootstrap-icons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    //   https://jsonplaceholder.typicode.com/users
    fetch('https://mocki.io/v1/3c5d8d36-1bc1-4546-a73c-dec83ddf67e5')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robo Cards</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <RefreshButton />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
          <footer>
            <h5>Made with <Heart className="red"/> and passion by Ionut</h5>
          </footer>
        </div>
      );
  }
}

export default App;