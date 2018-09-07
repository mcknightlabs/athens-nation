import React, { Component } from 'react';
import MyDate from './Date';
import ControlledEditor from './Editor';
import JournalsMenu from './JournalsMenu';
 
class Journal extends Component {
    render() {
    	return (
    		<div className="page-container">
	    		<JournalsMenu toggleJournal={this.toggleJournal} />
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