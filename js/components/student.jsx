import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Student extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student">
                <div className="student__name">
                    {this.props.name}
                </div>
                <div className="student__age">
                    {this.props.age}
                </div>
            </div>
        );
    }

}

export default Student;