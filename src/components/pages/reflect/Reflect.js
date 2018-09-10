import React, {Component} from 'react';
import FeatureMenu from 'components/FeatureMenu'; 
import Journal from 'components/pages/reflect/journal/Journal';
import EOL from 'components/pages/reflect/eol/EOL';

class Reflect extends React.Component {

	// toggles feature or subfeature type
    constructor(props) {
        super(props);
        this.state = {
            currentFeature: 'Journal'
        };
        this.toggleFeature = this.toggleFeature.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding feature based on currentFeature
    getFeature(currentFeature) {
        const features =  {
            Journal: <Journal/>,
        	EOL: <EOL/>
        };
        return features[currentFeature];
    }
    // update currentFeature when FeatureMenu triggers the callback
    toggleFeature(currentFeature) {
        this.setState({ currentFeature });
    }
    render() {
        return (
            <div className="container">
			    <FeatureMenu toggleFeature={this.toggleFeature} />
                {this.getFeature(this.state.currentFeature)}
			</div>
        );
    }
}

export default Reflect;