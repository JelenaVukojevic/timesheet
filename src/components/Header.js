import React from 'react';
import { Row } from 'react-bootstrap';
import iconCalendar from '../icons/icon-calendar.svg';
import logo from '../images/vegait-logo.svg';
import quotes from './data/quotes.json';
import NewTaskModal from './NewTaskModal.js';

class Header extends React.Component {
    render() {
        const quote = quotes[Math.floor(Math.random()*10)];
        const date = new Date(this.props.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return(
            <Row className="header">
                <Row className="wrap">
                    <NewTaskModal />
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
                        <time>{day} / {month} / {year}</time>
                        </div>
                    </div>
                </Row>
            </Row>
        );
    }
}

export { Header as default }