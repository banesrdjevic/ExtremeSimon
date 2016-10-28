var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access')

var styles = {
		background: 'white',
		height: '150px',
		width: '800px',
		display: 'inline-block',
		textAlign: 'center',
		verticalAlign: 'middle',
		lineHeight: '100px',
		fontSize: '100px'
	};

var TimerComponent = React.createClass({

	getInitialState: function(){
		return{
			startTime: new Date(),
			currentTime: new Date(),
			timer: '00:00:00:000'
		};
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

		  return addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs) + '.' + ms;
	},

	updateTimer: function(){
		if(!controls.victory && controls.started){
			var currentTime = this.state.currentTime = new Date();
			this.state.currentTime = currentTime;
			var millisecondsPassed = currentTime - this.state.startTime;
			this.setState({timer: this.msToTime(millisecondsPassed)});
		}
	},

	interval: null,

	componentDidMount: function () {
    	this.interval = setInterval(this.updateTimer, 1);
  	},

  	componentWillUnmount: function () {
    	clearInterval(this.interval);
  	},

	render: function(){
		var timer = this.state.timer;
		return <div style={styles}>{timer}</div>;
	}
})

module.exports=TimerComponent;