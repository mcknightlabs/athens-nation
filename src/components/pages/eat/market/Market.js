import React, {Component} from 'react';
import IndianMarket from 'components/pages/eat/market/subfeatures/IndianMarket';
import FrenchMarket from 'components/pages/eat/market/subfeatures/FrenchMarket';
import MarketMenu from 'components/pages/eat/market/MarketMenu';

class Market extends React.Component {
	// toggles feature or subfeature type
    constructor(props) {
        super(props);
        this.state = {
            currentSubfeature: 'IndianMarket'
        };
        this.toggleSubfeature = this.toggleSubfeature.bind(this)
    }
	getSubfeature(currentSubfeature) {
        const subfeatures =  {
            IndianMarket: <IndianMarket/>,
            FrenchMarket: <FrenchMarket/>
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
				<MarketMenu toggleSubfeature={this.toggleSubfeature} />
	    		<div className="canvas">
                    {this.getSubfeature(this.state.currentSubfeature)}
				</div>
			</div>
    	);
  	}
}

export default Market;