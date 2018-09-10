import React, {Component} from 'react';
import RecipesMenu from 'components/pages/eat/recipes/RecipesMenu';
import MealPlanner from 'components/pages/eat/recipes/subfeatures/MealPlanner';
import FrenchRecipes from 'components/pages/eat/recipes/subfeatures/FrenchRecipes';
import IndianRecipes from 'components/pages/eat/recipes/subfeatures/IndianRecipes';
import ThaiRecipes from 'components/pages/eat/recipes/subfeatures/ThaiRecipes';

class Recipes extends React.Component {
	// toggles feature or subfeature type
    constructor(props) {
        super(props);
        this.state = {
            currentSubfeature: 'MealPlanner'
        };
        this.toggleSubfeature = this.toggleSubfeature.bind(this)
    }
	getSubfeature(currentSubfeature) {
        const subfeatures =  {
            MealPlanner: <MealPlanner/>,
            FrenchRecipes: <FrenchRecipes/>,
            IndianRecipes: <IndianRecipes/>,
            ThaiRecipes: <ThaiRecipes/>
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
				<RecipesMenu toggleSubfeature={this.toggleSubfeature} />
	    		<div className="canvas">
                    {this.getSubfeature(this.state.currentSubfeature)}
				</div>
			</div>
    	);
  	}
}

export default Recipes;