import React from 'react'
import { Container } from 'react-bootstrap'
import API from './api/api'
import { date } from './components/data/date'

import Header from './containers/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidMount() {
    API.get('', {
      params:{
          date: date,
          action: 'getTasks',
          api_key: process.env.REACT_APP_API_KEY
      }
    }).then(res => {
      this.props.getTasks(res.data)
    }).catch(() => console.log('error'));
  }

  render() {
    return(
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
  }
}

export { App as default }