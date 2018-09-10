import React, { Component } from 'react';
import MyDate from 'components/Date';
import ControlledEditor from 'components/Editor';
 
class New extends Component {
    render() {
    	return (
    		<div className="journal">
    			<h1>New Journal</h1>
		    	<div className="entry-meta-data">
				    <MyDate />
				</div>
				<div className="editor">
					<ControlledEditor />
				</div>
				<div className="canvas-features">
				    <button>PDF</button>
				    <button>Print</button>
				    <button>Share</button>
				    <button>Get it bound</button>
				</div>
			</div>
    	)
    }
}

export default New;