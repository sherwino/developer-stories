import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const STATES = require('./data/states');

var StatesField = createClass({
	displayName: 'EventsField',
	propTypes: {
		label: PropTypes.string,
		searchable: PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'Events:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'new-south-wales',
			clearable: true,
			rtl: false,
		};
	},
	switchCountry (e) {
		var newCountry = e.target.value;
		this.setState({
			country: newCountry,
			selectValue: null,
		});
	},
	updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		});
	},
	focusStateSelect () {
		this.refs.stateSelect.focus();
	},
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render () {
		var options = STATES[this.state.country];
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					id="state-select"
					ref="stateSelect"
					autoFocus
					options={options}
					simpleValue
					clearable={this.state.clearable}
					name="selected-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={this.state.rtl}
					searchable={this.state.searchable}
				/>
			</div>
		);
	}
});


module.exports = StatesField;
