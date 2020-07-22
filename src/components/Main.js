import React from 'react';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        let tasks = <div className="message">No items for selected date</div>;
        if (this.props.tasks != undefined) {
            console.log(this.props.tasks)
            tasks = this.props.tasks.map((task) =>
                <div className="item-row" key={task.title}>
                    <div className="check-flag">
                        <span className="small-text-label">Title</span>
                        <span className="small-text-label hours">Hours</span>
                        <span className="check-flag-label">{task.title}</span>
                        <span className="hours-box">{task.hours}</span>
                    </div>
                </div>
            );
        }

        return (
            <Row className="main">
                <div className="wrap">
                    {tasks}
                </div>
            </Row>
        );
    }
}

export { Main as default }