import React, { Component } from 'react';

class RecipesMenu extends React.Component {
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
                    <a eventKey={1} title="French" onClick={() => this.handleSelect(1, 'French')}>French</a>
                    <a eventKey={2} title="Indian" onClick={() => this.handleSelect(2, 'Indian')}>Indian</a>
                    <a eventKey={3} title="Thai" onClick={() => this.handleSelect(3, 'Thai')}>Thai</a>
                </ul>
            </nav>
        );
    }
}

export default RecipesMenu;