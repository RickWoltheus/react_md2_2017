import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Teacher extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="teacher">
                <div className="teacher__name">
                    {this.props.name}
                </div>
                <div className="teacher__age">
                    {this.props.age}
                </div>

                    {this.props.adres}

            </div>
        );
    }

}

export default Teacher;