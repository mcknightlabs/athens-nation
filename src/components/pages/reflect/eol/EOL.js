import React, {Component} from 'react';
import MemorialComposer from 'components/pages/reflect/eol/subfeatures/MemorialComposer';  
import KeyInfo from 'components/pages/reflect/eol/subfeatures/KeyInfo';  
import EOLMenu from 'components/pages/reflect/eol/EOLMenu';

class EOL extends React.Component {
	// toggles feature or subfeature type
    constructor(props) {
        super(props);
        this.state = {
            currentSubfeature: 'KeyInfo'
        };
        this.toggleSubfeature = this.toggleSubfeature.bind(this)
    }
	getSubfeature(currentSubfeature) {
        const subfeatures =  {
            KeyInfo: <KeyInfo/>,
            MemorialComposer: <MemorialComposer/>
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
				<EOLMenu toggleSubfeature={this.toggleSubfeature} />
	    		<div className="canvas">
                    {this.getSubfeature(this.state.currentSubfeature)}
				</div>
			</div>
    	);
  	}
}

export default EOL;