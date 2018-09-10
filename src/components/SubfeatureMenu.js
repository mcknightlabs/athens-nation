import React, { Component } from 'react';

class SubfeatureMenu extends React.Component {
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
                    <a eventKey={1} title="New" onClick={() => this.handleSelect(1, 'New')} class="action">Write</a>
                    <a eventKey={2} title="Personal" onClick={() => this.handleSelect(2, 'Personal')}>Personal</a>
                </ul>
            </nav>
        );
    }
}

export default SubfeatureMenu;