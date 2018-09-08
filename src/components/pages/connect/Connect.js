import React, {Component} from 'react'; 
import Crew from 'components/pages/connect/crew/crew'; 
import IC from 'components/pages/connect/IC/IC'; 
import FeatureMenu from 'components/FeatureMenu';

class Connect extends React.Component {

	// toggles feature type
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'IC',
        };
        this.toggleFeature = this.toggleFeature.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentMode
    getFeature(currentMode) {
        const features =  {
            IC: <IC/>,
        	Crew: <Crew/>
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

export default Connect;