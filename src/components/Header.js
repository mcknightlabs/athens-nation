import React, { Component } from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key: 1 };
    }
    handleSelect(key, pageCategory) {
        this.props.togglePage(pageCategory);
        this.setState({ key });
    }
	render() {
		return (
			<header className="app-header">
                {/* 
                <img src={logo} className="app-logo" alt="logo" /> 
                */}
                <h1 className="app-title">Athens Nation</h1>
                <nav className="main-menu" bsStyle="tabs" activeKey={this.state.key}>
                    <ul>
                        <a eventKey={1} title="Reflect" onClick={() => this.handleSelect(1, 'Reflect')}>Reflect</a>
                        <a eventKey={2} title="Connect" onClick={() => this.handleSelect(2, 'Connect')}>Connect</a>
                        <a eventKey={3} title="Eat" onClick={() => this.handleSelect(3, 'Eat')}>Eat</a>
                        <a eventKey={4} title="Move" onClick={() => this.handleSelect(4, 'Move')}>Move</a>
                        <a eventKey={5} title="Engage" onClick={() => this.handleSelect(5, 'Engage')}>Engage</a>
                    </ul>
                </nav>
            </header>
    	);
  	}
}

export default Header;