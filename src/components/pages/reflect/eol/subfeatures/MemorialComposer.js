import React, { Component } from 'react';
import PrimaryButton from 'components/UI/Button';

class MemorialComposer extends React.Component {
	render() {
		return (
		<div className="memorial-composer">
			<h1>Memorial Composer</h1>
			<form>
				<label>
				Remember me in these ways:
				<textarea></textarea>
				</label>
				<label>
				Share music you want played
				<textarea></textarea>
				</label>
				<label>
				Share music you want played
				<textarea></textarea>
				</label>
				<label>
				Designate a letter, journal, or life philosophy you desire your friends and family read 
				<textarea></textarea>
				</label>
				<input type="submit" value="Submit" class="common-button" />
			</form>
		</div>
    );
  }
}

export default MemorialComposer;