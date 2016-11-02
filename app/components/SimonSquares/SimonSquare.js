var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access')

var backgroundColors = controls.backgroundColors;

var SimonSquare = React.createClass({

	getInitialState: function(){
		var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
		return{
			backgroundColor: backgroundColors[number],
			borderColor: 'black',
			clicked: false,
			correct: false,
			styles : {
				background: backgroundColors[number],
				height: '15%',
				width: '12%',
				display: 'inline-block',
				marginLeft: '5px',
				marginRight: "5px",
				marginBottom: '5px',
				border: '5px solid transparent'	
			}
		};
	},

	colorChanger: function(){
		if (!this.state.correct && !controls.victory && controls.started) {
			var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
			var color = backgroundColors[number];
			this.state.styles.background = color;
			this.setState({backgroundColor: color});
		};
	},

	changeBorderColor: function(){
		if(this.state.correct && !controls.victory && controls.started){
			var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
			var color = backgroundColors[number];
			this.state.styles.background = color;
			this.setState({backgroundColor: color});
		}
	},

	setClicked: function(){
		var state = this.state;
		if (!controls.victory){
			if (state.clicked == false && controls.started){
				this.setState({clicked: true});
				this.state.clicked = true;
				if (state.backgroundColor==controls.currentColor){
					this.props.updateSquaresLeft(-1);
					this.setState({correct: true});
					this.state.correct = true;
					this.props.victoryCheck();
				}
				else{
					state.styles.border ='5px solid red';
					this.setState({correct: false});
				}
			}
			else{
				if (state.clicked && state.correct){
					this.props.updateSquaresLeft(1);
				};
				state.styles.border ='5px solid transparent';
				this.setState({clicked: false});
				this.setState({correct: false});
			}
		}
	},

	backgroundColorinterval: null,

	borderInterval: null,

	componentDidMount: function () {
    	this.backgroundColorInterval = setInterval(this.colorChanger, controls.simonSquaresTiming);
  		this.borderInterval = setInterval(this.changeBorderColor, 150);
  	},

  	componentWillUnmount: function () {
    	clearInterval(this.backgroundColorInterval);
    	clearInterval(this.borderInterval);
  	},

	render: function(){
		return <div onClick={this.setClicked} style={this.state.styles}></div>
	}
})

module.exports = SimonSquare;