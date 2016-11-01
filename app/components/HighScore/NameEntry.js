var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');

var NameEntry = React.createClass({
	getInitialState: function(){
		return {name: "Average Joe"}
	}
	render: function(){
		return <div></div>
	}
})

module.exports = NameEntry;