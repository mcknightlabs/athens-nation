import * as React from 'react';
import './App.css';
import MemorialComposer from './components/MemorialComposer';
import ReflectMenu from './components/ReflectMenu';
import JournalsMenu from './components/JournalsMenu';
import Journal from './components/Journal';
import EOL from './components/EOL';

{/* import logo from './logo.svg'; */}

class App extends React.Component {

    // toggles page type
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'Journal',
        };
        this.togglePage = this.togglePage.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentMode
    getPage(currentMode) {
        const pages =  {
            Journal: <Journal/>,
            Journal: <Journal/>,
            EOL: <EOL/>
        };
        return pages[currentMode];
    }
    // update currentMode when ReflectMenu triggers the callback
    togglePage(currentMode) {
        this.setState({ currentMode });
    }

    render() {
        return (
            <div className="App">
                <div className="app-alert">
                    <img src='/media/natasha.jpg' />
                    <strong>Natasha</strong> Do you want to talk later? <a href="">Reply</a>
                </div>
                <header className="app-header">
                    {/* 
                    <img src={logo} className="app-logo" alt="logo" /> 
                    */}
                    <h1 className="app-title">Athens Nation</h1>
                    <ul className="main-menu">
                        <a>reflect</a>
                        <a>connect</a>
                        <a>eat</a>
                        <a>move</a>
                    </ul>
                </header>
                <div className="container">
                    <ReflectMenu togglePage={this.togglePage} />
                    {this.getPage(this.state.currentMode)}
                </div>
            </div>
        );
    }
}

export default App;
