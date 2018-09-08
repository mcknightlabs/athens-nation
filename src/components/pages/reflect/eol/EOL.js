import React, {Component} from 'react';
import MemorialComposer from 'components/pages/reflect/eol/subfeatures/MemorialComposer';  
import EOLMenu from 'components/pages/reflect/eol/EOLMenu';

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