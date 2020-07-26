import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import moment from 'moment';

const tasks = [];
tasks['21/07/2020'] = [
  {id: 1, title: 'item 1', hours: 3.5},
  {id: 2, title: 'item 2', hours: 1.5},
  {id: 3, title: 'item 3', hours: 3},
];
tasks['20/07/2020'] = [
  {id: 4, title: 'item 4', hours: 5},
  {id: 5, title: 'item 5', hours: 2},
  {id: 6, title: 'item 6', hours: 1},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.urlDate = window.location.pathname.substr(1);
    this.date = (this.urlDate) ? 
      moment(this.urlDate, 'DD-MM-YYYY').format("DD/MM/YYYY") : 
      moment().format('DD/MM/YYYY');
    this.state = {
      tasks: tasks
    }
  }


  save = (data) => {
    tasks[this.date] = [data];
    console.log(tasks);
    this.setState({
      tasks: tasks
    });
  }
  
  render() {
    return (
      <Container>
        <Header date={this.date} save={this.save} tasks={this.state.tasks[this.date]} />
        <Main tasks={this.state.tasks[this.date]} />
        <Footer />
      </Container>
    );
  }
}

export default App;
