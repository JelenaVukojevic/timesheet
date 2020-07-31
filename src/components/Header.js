import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import moment from 'moment'
import { date } from './data/date'

import NewTaskModal from './NewTaskModal'

import iconCalendar from '../icons/icon-calendar.svg'
import logo from '../images/vegait-logo.svg'
import quotes from './data/quotes.json'

const quote = quotes[Math.floor(Math.random()*10)]

const Header = ({ addTask }) => (
    
    <Row className="header">
        <Row className="wrap">
            <NewTaskModal 
                addTask={addTask} 
                date={date} 
            />
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
                <time>{moment(date, 'DD-MM-YYYY').format("DD/MM/YYYY")}</time>
                </div>
            </div>
        </Row>
    </Row>
)

Header.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default Header