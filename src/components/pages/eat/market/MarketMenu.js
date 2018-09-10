import React, { Component } from 'react';

class MarketMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key: 1 };
    }
    handleSelect(key, subfeatureCategory) {
        this.props.toggleSubfeature(subfeatureCategory);
        this.setState({ key });
    }
    render(){
        return (
            <nav className="feature-sub-menu" bsStyle="tabs" activeKey={this.state.key}>
                <ul>
                    <a eventKey={1} title="Indian Market" onClick={() => this.handleSelect(1, 'IndianMarket')}>Indian</a>
                    <a eventKey={2} title="French Market" onClick={() => this.handleSelect(2, 'FrenchMarket')}>French</a>
                </ul>
            </nav>
        );
    }
}

export default MarketMenu;