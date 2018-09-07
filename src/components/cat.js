import React, {PropTypes} from 'react';
import {connect} from 'react-redux';  
import PrimaryButton from './UI/Button';  
import {bindActionCreators} from 'redux';  
import * as catActions from '../../actions/catActions';  

class EOL extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	isEditing: false,
	    	cat: this.props.cat
	    };
	    this.updateCatState = this.updateCatState.bind(this);
	    this.saveCat = this.saveCat.bind(this);
    	this.toggleEdit = this.toggleEdit.bind(this);
	}
	updateCatState(event) {
	    const field = event.target.name;
	    const cat = this.state.cat;
	    cat[field] = event.target.value;
	    return this.setState({cat: cat});
  	}
  	saveCat(event) {
		event.preventDefault();
		this.props.actions.updateCat(this.state.cat);
	}
	toggleEdit() {
	    this.setState({isEditing: !this.state.isEditing})
	}
	componentWillReceiveProps(nextProps) {
	    if (this.props.cat.id != nextProps.cat.id) {
	      this.setState({cat: nextProps.cat});
	    }
	  }
	render() {
		if (this.state.isEditing) {
			return (
				<div>
					<h1>edit cat</h1>
					< cat form coming soon!/> 
				</div>
			)
		}
		return (
			<div className="col-md-8 col-md-offset-2">
	        <h1>{this.state.cat.name}</h1>
	        <p>breed: {this.state.cat.breed}</p>
	        <p>weight: {this.state.cat.weight}</p>
	        <p>temperament: {this.state.cat.temperament}</p>
	        <button onClick={this.toggleEdit}>edit</button>
	      </div>
		);
	}
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}

export default connect(mapStateToProps)(EOL);  