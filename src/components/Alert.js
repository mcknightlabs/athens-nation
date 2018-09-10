import React, { Component } from 'react';

class Alert extends React.Component {
	render() {
		return (
			<div className="app-alert">
                <img src='media/natasha.jpg' class="headshot" />
                <strong>Natasha</strong> Do you want to talk later? <a href="">Reply</a>
            </div>
    	);
  	}
}

export default Alert;