import * as React from 'react';
import './App.css';
import Alert from 'components/Alert';
import Header from 'components/Header';
import Reflect from 'components/pages/reflect/Reflect';
import Connect from 'components/pages/connect/Connect';
import Eat from 'components/pages/eat/Eat';
import MainMenu from 'components/MainMenu';

{/* import logo from './logo.svg'; */}

class App extends React.Component {

    // toggles page type
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Reflect',
        };
        this.togglePage = this.togglePage.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentPage
    getPage(currentPage) {
        const pages =  {
            Reflect: <Reflect/>,
            Connect: <Connect/>,
            Eat: <Eat/>
           /*
            Move: <Move/>,
            Engage: <Engage/> */
        };
        return pages[currentPage];
    }
    // update currentPage when MainMenu triggers the callback
    togglePage(currentPage) {
        this.setState({ currentPage });
    }

    render() {
        return (
            <div className="App">
                <Alert />
                <Header togglePage={this.togglePage} />
                {this.getPage(this.state.currentPage)}
            </div>
        );
    }
}

export default App;
