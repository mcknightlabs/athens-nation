import * as React from 'react';
import './App.css';
import Alert from 'components/Alert';
import Header from 'components/Header';
import Reflect from 'components/pages/reflect/Reflect';
import Connect from 'components/pages/connect/Connect';
import MainMenu from 'components/MainMenu';

{/* import logo from './logo.svg'; */}

class App extends React.Component {

    // toggles page type
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'Reflect',
        };
        this.togglePage = this.togglePage.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentMode
    getPage(currentMode) {
        const pages =  {
            Reflect: <Reflect/>,
            Connect: <Connect/>
           /* Eat: <Eat/>,
            Move: <Move/>,
            Engage: <Engage/> */
        };
        return pages[currentMode];
    }
    // update currentMode when MainMenu triggers the callback
    togglePage(currentMode) {
        this.setState({ currentMode });
    }

    render() {
        return (
            <div className="App">
                <Alert />
                <MainMenu togglePage={this.togglePage} />
                {this.getPage(this.state.currentMode)}
            </div>
        );
    }
}

export default App;
