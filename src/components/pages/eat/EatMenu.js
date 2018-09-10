import React, { Component } from 'react';

class EatMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key: 1 };
    }
    handleSelect(key, featureCategory) {
        this.props.toggleFeature(featureCategory);
        this.setState({ key });
    }
    render(){
        return (
            <nav className="feature-menu" bsStyle="tabs" activeKey={this.state.key}>
                <ul>
                    <a eventKey={1} title="Market" onClick={() => this.handleSelect(1, 'Market')}>Market</a>
                    <a eventKey={2} title="Recipes" onClick={() => this.handleSelect(2, 'Recipes')}>Recipes</a>
                    <a eventKey={3} title="Garden" onClick={() => this.handleSelect(3, 'Garden')}>Garden</a>
                    <a eventKey={4} title="Social Meals" onClick={() => this.handleSelect(4, 'Social Meals')}>Social Meals</a>
                </ul>
            </nav>
        );
    }
}

export default EatMenu;