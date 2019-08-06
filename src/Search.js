import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {

	render() {
		return (
			<div>
				<div >
					<input type="text" className="transparent-input" placeholder="Search..." onChange={(e) => this.props.filterBy(e.target.value)} />
				</div>
			</div>
		)
	}
}