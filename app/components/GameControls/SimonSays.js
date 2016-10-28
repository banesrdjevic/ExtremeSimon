var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');

var backgroundColors = controls.backgroundColors;

var styles = {
		background: 'white',
		height: '50px',
		width: '800px',
		textAlign: 'center',
		marginBottom: '50px',
		verticalAlign: 'middle',
		color: 'red',
		fontSize: '50px'
	};

var SimonSays = React.createClass({
	getInitialState: function(){
		var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
		return{
			color: 'red'
		};
	},

	colorChanger: function(){
		if(!controls.victory && controls.started){
			var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
			var color = backgroundColors[number];
			styles.color = color;
			this.setState({color: color});
			controls.color = color;
		}
	},

	successText: function(){
		if(controls.victory){
			this.setState({color: "SUCCESS!"});
		}
		else if(!controls.started){
			this.setState({color: "Ready when you are..."});
		}
	},

	interval: null,

	victoryInterval: null,

	componentDidMount: function () {
    	this.interval = setInterval(this.colorChanger, controls.simonSaysTiming);
  		this.victoryInterval = setInterval(this.successText, 50);
  	},

  	componentWillUnmount: function () {
    	clearInterval(this.interval);
  	},

	render: function(){
		var color = this.state.color.toUpperCase();
		return <div style={styles}>{color}</div>
	}
})

module.exports = SimonSays;