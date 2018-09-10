import React, { Component } from 'react';

class EOLMenu extends React.Component {
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
                    <a eventKey={1} title="Key Info" onClick={() => this.handleSelect(1, 'KeyInfo')}>Key info</a>
                    <a eventKey={2} title="Memorial Composer" onClick={() => this.handleSelect(2, 'MemorialComposer')}>Memorial</a>
                </ul>
            </nav>
        );
    }
}

export default EOLMenu;