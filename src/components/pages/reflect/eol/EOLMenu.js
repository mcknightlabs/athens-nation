import React, { Component } from 'react';

class EOLMenu extends React.Component {
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
            <nav className="feature-sub-menu" bsStyle="tabs" activeKey={this.state.key}>
                <ul>
                    <a eventKey={1} title="Memorial Composer" onClick={() => this.handleSelect(1, 'MemorialComposer')}>Memorial Composer</a>
                </ul>
            </nav>
        );
    }
}

export default EOLMenu;