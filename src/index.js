import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, Row } from 'react-bootstrap';
import iconPlus from './icons/icon-plus.svg';
import iconCalendar from './icons/icon-calendar.svg';
import logo from './images/vegait-logo.svg';
import quotes from './components/data/quotes.json';

class Timesheet extends React.Component {
  render() {
    const quote = quotes[Math.floor(Math.random()*10)];
    
    return (
      <Container>
        <Row className="header">
          <Row className="wrap">
            <span className="btn-icon">
              <img className="icon icon-plus js-modal-init" src={iconPlus} al4t="Add New Item"/>
            </span>
            <div className="header-blockquote">
              <h1 className="header-quote">{quote.quote}</h1>
              <div className="header-cite">- {quote.author}</div>
            </div>
          </Row>
          <Row className="header-inner">
            <div className="wrap">
              <img className="logo" src={logo} alt="VegaIT"/>
              <div className="date-wrap">
                <img className="icon" src={iconCalendar} alt="Calendar"/>
                <time>02 / 08 / 2019</time>
              </div>
            </div>
          </Row>
        </Row>
        <Row className="main">
            <div className="wrap">
            {/* <!-- item --> */}
            <div className="item-row">
              <div className="check-flag">
                <span className="small-text-label">Title</span>
                <span className="small-text-label hours">Hours</span>
                <span className="check-flag-label">Ticket system integration</span>
                <span className="hours-box"></span>
              </div>
            </div>

            {/* <!-- item --> */}
            <div className="item-row">
              <div className="check-flag">
                <span className="small-text-label">Title</span>
                <span className="small-text-label hours">Hours</span>
                <span className="check-flag-label"> Integration with Google Maps API</span>
                <span className="hours-box"></span>
              </div>
            </div>

            {/* <!-- item --> */}
            <div className="item-row">
              <div className="check-flag">
                <span className="small-text-label">Title</span>
                <span className="small-text-label hours">Hours</span>
                <span className="check-flag-label">Prepare test cases</span>
                <span className="hours-box"></span>
              </div>
            </div>
            <div className="total align-right">
              <label htmlFor="" className="total-label">Total:</label>
              <input className="total-input" type="text" value="" readOnly/>
            </div>

          </div>
        </Row>
        <Row className="footer">
          <div className="wrap">
            <span className="copy">&copy; 2020 Vega IT Sourcing</span>
          </div>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Timesheet />
  </React.StrictMode>,
  document.getElementById('root')
);