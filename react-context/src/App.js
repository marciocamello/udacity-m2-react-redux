import React from 'react';

const Context = React.createContext();

function Parent ({ name }) {
    return (
        <div>
            <h1>Pai</h1>
            <Child name={name}/>
        </div>
    );
}

function Child ({ name }) {
    return (
        <div>
            <h1>Filho</h1>
            <Grandchild name={name}/>
        </div>
    );
}

function Grandchild ({ name }) {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Neto</h1>
                    <h3>Nome: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    );
}

class App extends React.Component {
    render() {
        const name = 'Marcio';

        return (
            <Context.Provider value={name}>
                <Parent />
            </Context.Provider>
        );
    }
}

export default App;
