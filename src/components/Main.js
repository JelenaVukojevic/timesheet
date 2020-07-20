import React from 'react';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        return (
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
        );
    }
}

export { Main as default }