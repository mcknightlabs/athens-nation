import React, { Component } from 'react';
import MyDate from 'components/Date';
import ControlledEditor from 'components/Editor';
import JournalsMenu from 'components/pages/reflect/journal/JournalsMenu';
 
class Journal extends Component {
    render() {
    	return (
    		<div className="page-container">
	    		<JournalsMenu />
	    		<div className="canvas">
		    		<div className="journal">
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
				</div>
			</div>
    	)
    }
}

export default Journal;