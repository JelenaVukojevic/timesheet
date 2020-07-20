import React from 'react';
import { Row } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return(
            <Row className="footer">
                <div className="wrap">
                    <span className="copy">&copy; 2020 Vega IT Sourcing</span>
                </div>
            </Row>
        );
    }
}

export { Footer as default }