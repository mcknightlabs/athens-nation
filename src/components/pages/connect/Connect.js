import React, {Component} from 'react'; 
import Crew from 'components/pages/connect/crew/crew'; 
import IC from 'components/pages/connect/IC/IC'; 
import FeatureMenu from 'components/FeatureMenu';
import SubfeatureMenu from 'components/SubfeatureMenu'; 

class Connect extends React.Component {

	// toggles feature type
    constructor(props) {
        super(props);
        this.state = {
            currentFeature: 'IC',
        };
        this.toggleFeature = this.toggleFeature.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentFeature
    getFeature(currentFeature) {
        const features =  {
            IC: <IC/>,
        	Crew: <Crew/>
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

export default Connect;