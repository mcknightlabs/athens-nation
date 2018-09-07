import React, { Component } from 'react';

class PrimaryButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
            {this.props.children}
            </button>
        )
    }
}

export default PrimaryButton;