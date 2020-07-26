import React from 'react';
import { Row } from 'react-bootstrap';
import iconCalendar from '../icons/icon-calendar.svg';
import logo from '../images/vegait-logo.svg';
import quotes from './data/quotes.json';
import NewTaskModal from './NewTaskModal.js';

class Header extends React.Component {
    render() {
        const quote = quotes[Math.floor(Math.random()*10)];

        return(
            <Row className="header">
                <Row className="wrap">
                    <NewTaskModal save={this.props.save} tasks={this.props.tasks} />
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
                        <time>{this.props.date}</time>
                        </div>
                    </div>
                </Row>
            </Row>
        );
    }
}

export { Header as default }