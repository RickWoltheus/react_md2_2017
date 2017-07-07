import React from 'react';
import Student from './components/student';
import Teacher from './components/teacher';
import AddUser from './components/addUser';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                MD2 React app
                <Student
                    name="Berend"
                    age="12"
                    adres="idkstraat"
                />
                <Student
                    name="Rick"
                    age="19"
                    adres="paardenakker 27"
                />
                <Student
                    name="Quenten"
                    age="19"
                    adres="idkstraat"
                />
                <Student
                    name="Coen"
                    age="22"
                    adres="idkstraat"
                />
                <Student
                    name="Amin"
                    age="22"
                    adres="idkstraat"
                />

                <Teacher
                    name="Amin"
                    age="22"
                    adres="idkstraat"
                />
                <AddUser />
            </div>

        );
    }

}

export default App;