import React, { Component } from 'react';
import Clock from 'react-live-clock';
 
class MyDate extends Component {
    render() {
    	return (
        <Clock format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'US/Eastern'} />
    	)
    }
}

export default MyDate;