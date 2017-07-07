import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class AddUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="addUser">
                <form>
                    Name:
                    <input type="text" name="name" /><br />
                    Age:
                    <input type="text" name="name" /><br />
                    Adres:
                    <input type="text" name="name" /><br />

                    <input type="submit" value="Submit" /><br />
                </form>
            </div>
        );
    }

}

export default AddUser;