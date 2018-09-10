import React, {Component} from 'react'; 
import Market from 'components/pages/eat/market/Market'; 
import Recipes from 'components/pages/eat/recipes/Recipes';  
import Garden from 'components/pages/eat/garden/Garden';  
import SocialMeals from 'components/pages/eat/socialmeals/SocialMeals';  
import EatMenu from 'components/pages/eat/EatMenu'; 

class Eat extends React.Component {

	// toggles feature type
    constructor(props) {
        super(props);
        this.state = {
            currentFeature: 'Market',
        };
        this.toggleFeature = this.toggleFeature.bind(this) // must bind because "this.setState is not a function"
    }
    // returns the corresponding page based on currentFeature
    getFeature(currentFeature) {
        const features =  {
            Market: <Market/>,
            Recipes: <Recipes/>,
            Garden: <Garden/>,
        	SocialMeals: <SocialMeals/>
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
			    <EatMenu toggleFeature={this.toggleFeature} />
                {this.getFeature(this.state.currentFeature)}
			</div>
        );
    }
}

export default Eat;