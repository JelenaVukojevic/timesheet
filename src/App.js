import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

const tasks = [];
tasks['21-07-2020'] = [
  {id: 1, title: 'item 1', hours: 4},
  {id: 2, title: 'item 2', hours: 1},
  {id: 3, title: 'item 3', hours: 3},
];
tasks['20-07-2020'] = [
  {id: 4, title: 'item 4', hours: 5},
  {id: 5, title: 'item 5', hours: 2},
  {id: 6, title: 'item 6', hours: 1},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    }
  }

  render() {
    const urlDate = window.location.pathname.substr(1);
    return (
      <Container>
        <Header date={urlDate} />
        <Main tasks={this.state.tasks[urlDate]} />
        <Footer />
      </Container>
    );
  }
}

export default App;
