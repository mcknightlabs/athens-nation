import React, {Component} from 'react';
import PrimaryButton from './UI/Button'; 
import MemorialComposer from './MemorialComposer';  
import EOLMenu from './EOLMenu';

class EOL extends React.Component {
	render() {
		return (
			<div className="page-container">
				<EOLMenu />
	    		<div className="canvas">
					<MemorialComposer />
				</div>
			</div>
    	);
  	}
}

export default EOL;