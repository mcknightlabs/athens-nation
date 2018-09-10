import React, { Component } from 'react';
import MyDate from 'components/Date';
import ControlledEditor from 'components/Editor';
import JournalsMenu from 'components/pages/reflect/journal/JournalsMenu';
import New from 'components/pages/reflect/journal/subfeatures/New'; 
import Personal from 'components/pages/reflect/journal/subfeatures/Personal'; 
 
class Journal extends Component {
	
	// toggles feature or subfeature type
    constructor(props) {
        super(props);
        this.state = {
            currentSubfeature: 'New'
        };
        this.toggleSubfeature = this.toggleSubfeature.bind(this)
    }
	getSubfeature(currentSubfeature) {
        const subfeatures =  {
            New: <New/>,
            Personal: <Personal/>
        };
        return subfeatures[currentSubfeature];
    }
    // update currentSubfeature when SubfeatureMenu triggers the callback
    toggleSubfeature(currentSubfeature) {
        this.setState({ currentSubfeature });
    }
    render() {
    	return (
    		<div className="page-container">
    			<JournalsMenu toggleSubfeature={this.toggleSubfeature} />
	    		<div className="canvas">
                    {this.getSubfeature(this.state.currentSubfeature)}
				</div>
			</div>
    	)
    }
}

export default Journal;