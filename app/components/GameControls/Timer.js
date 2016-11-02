var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access')

var styles = {container:{
		background: 'white',
		height: '120px',
		width: '100%',
		display: 'inline-block',
		textAlign: 'center',
		lineHeight: '100px',
		fontSize: '100px'
	},
	displayTimes:{
		display: 'inline-block'
	},
	milliseconds:{
		display: 'inline-block',
		color: "red",
		fontSize: "50px",
	}
};

var TimerComponent = React.createClass({

	getInitialState: function(){
		return{
			startTime: controls.startTime,
			currentTime: new Date(),
			timer: '00:00:00:000',
			hours: '00:',
			minutes: '00:',
			seconds: '00',
			milliseconds: '000'
		};
	},

	updateDisplayTimes: function(hours, minutes, seconds, milliseconds){
		this.state.hours = hours + ":";
		this.state.minutes = minutes + ":";
		this.state.seconds = seconds;
		this.state.milliseconds = milliseconds;
	},

	msToTime: function(s){

		  function addZ(n) {	
		    return (n<10? '0':'') + n;
		  }

		  var ms = s % 1000;
		  s = (s - ms) / 1000;
		  var secs = s % 60;
		  s = (s - secs) / 60;
		  var mins = s % 60;
		  var hrs = (s - mins) / 60;

		  if (ms < 10){
		  	ms = '00' + ms;
		  }
		  else if(ms < 100)
		  {
		  	ms = '0' + ms;
		  }

		  this.updateDisplayTimes(addZ(hrs), addZ(mins), addZ(secs), ms);

		  return addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs) + '.' + ms;
	},

	updateTimer: function(){
		if(!controls.victory && controls.started){
			var currentTime = this.state.currentTime = new Date();
			this.state.currentTime = currentTime;
			var millisecondsPassed = currentTime - this.state.startTime;
			controls.time = this.msToTime(millisecondsPassed);
			this.setState({timer: this.msToTime(millisecondsPassed)});
		}
		else{
			this.state.startTime = new Date();
		}
	},

	interval: null,

	componentDidMount: function () {
   		this.interval = setInterval(this.updateTimer, 3);
  	},

  	componentWillUnmount: function () {
    	clearInterval(this.interval);
  	},

	render: function(){
		var timer = this.state.timer;
		return <div style={styles.container}>
			<div id="hours" style={styles.displayTimes}>{this.state.hours}</div>
			<div id="minutes" style={styles.displayTimes}>{this.state.minutes}</div>
			<div id="seconds" style={styles.displayTimes}>{this.state.seconds}</div>
			<div id="milliseconds" style={styles.milliseconds}>{this.state.milliseconds}</div>
		</div>;
	}
})

module.exports=TimerComponent;