import React, {Component} from 'react';
import Journal from 'components/pages/reflect/journal/Journal';
import EOL from 'components/pages/reflect/eol/EOL';
import FeatureMenu from 'components/FeatureMenu'; 

class Reflect extends React.Component {

	// toggles feature type
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'Journal',
        };
        this.toggleFeature = this.toggleFeature.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding feature based on currentMode
    getFeature(currentMode) {
        const features =  {
            Journal: <Journal/>,
        	EOL: <EOL/>
        };
        return features[currentMode];
    }
    // update currentMode when FeatureMenu triggers the callback
    toggleFeature(currentMode) {
        this.setState({ currentMode });
    }

    render() {
        return (
            <div className="container">
			    <FeatureMenu toggleFeature={this.toggleFeature} />
			    {this.getFeature(this.state.currentMode)}
			</div>
        );
    }
}

export default Reflect;