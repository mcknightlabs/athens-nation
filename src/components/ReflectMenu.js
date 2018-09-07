import React, { Component } from 'react';

class ReflectMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key: 1 };
    }
    handleSelect(key, pageCategory) {
        this.props.togglePage(pageCategory);
        this.setState({ key });
    }
    render(){
        return (
            <nav className="feature-menu" bsStyle="tabs" activeKey={this.state.key}>
                <ul>
                    <a eventKey={1} title="Journals" onClick={() => this.handleSelect(1, 'Journal')}>Journals</a>
                    <a eventKey={2} title="End of Life" onClick={() => this.handleSelect(2, 'EOL')}>End of Life</a>
                </ul>
            </nav>
        );
    }
}

export default ReflectMenu;