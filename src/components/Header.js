import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'

import iconCalendar from '../icons/icon-calendar.svg'
import logo from '../images/vegait-logo.svg'
import quotes from './data/quotes.json'

import NewTaskModal from './NewTaskModal'

import moment from 'moment'

const quote = quotes[Math.floor(Math.random()*10)]
const urlDate = window.location.pathname.substr(1)
const date = (urlDate) ? 
      moment(urlDate, 'DD-MM-YYYY').format("DD/MM/YYYY") : 
      moment().format('DD/MM/YYYY')

const Header = ({ addTask }) => (
    <Row className="header">
        <Row className="wrap">
            <NewTaskModal addTask={addTask} date={date} />
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
                <time>{date}</time>
                </div>
            </div>
        </Row>
    </Row>
)

Header.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default Header