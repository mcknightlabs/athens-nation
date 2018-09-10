import React, { Component } from 'react';
import PrimaryButton from 'components/UI/Button';

class MemorialComposer extends React.Component {
	render() {
		return (
		<div className="memorial-composer">
			<h1>Memorial Service Composer</h1>
			<p>Compose your own memorial service. Help your family and friends celebrate your life in a more personal and meaningful way.</p>
			<form>
				<label>
				Remember me in these ways:
				<textarea placeholder="Chopin"></textarea>
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
				Readings
				<textarea placeholder="Book excerpts, poems, or letters"></textarea>
				</label>
				<label>
				Stories
				<textarea placeholder="Funny stories, stories that highlight your personality, etc."></textarea>
				</label>
				<label>
				Favorite photos of yourself
				<p>Upload</p>
				</label>
				<label>
				Set aside money for food or drinks
				<p>$500 for catering</p>
				</label>
				<input type="submit" value="Submit" class="common-button" />
			</form>
		</div>
    );
  }
}

export default MemorialComposer;