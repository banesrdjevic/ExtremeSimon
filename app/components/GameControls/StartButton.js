var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');


var	songUrl = "https://r6---sn-vgqsrn7l.googlevideo.com/videoplayback?requiressl=yes&mime=audio%2Fwebm&signature=A3C0520136C0B6C62772A4C66B8353D4B57546D4.74A2F30F59F4D9F41CEAD705BF9B8DDCD5FBBAB4&source=youtube&pl=20&itag=171&ip=104.197.39.255&ms=au&ei=wjcaWJvyOcveuALT4ZqgBA&upn=WQeE8MFFn-A&expire=1478134819&mm=31&clen=1299692&mv=m&keepalive=yes&id=o-AAAcbFn-MNCCdYPF3CAhGE_r3ecH0drMpXkyAr-IYJn8&mt=1478113086&mn=sn-vgqsrn7l&gir=yes&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Crequiressl%2Csource%2Cupn%2Cexpire&key=yt6&lmt=1401073383923472&dur=85.445&initcwndbps=4240000&ipbits=0&ratebypass=yes&title=Holic+-+TaQ";

var styles ={
	notStarted:{
		width: "100%",
		cursor:"pointer",
		borderWidth:"0",
		fontSize:"20px",
		fontFamily: "Lato",
		padding:"1.25em 2em",
		color:"#fff",
		backgroundColor:"#272727",
		lineHeight:"1em",
		textTransform: "uppercase",
		letterSpacing:"1px",
		fontWeight: "300",
		textAlign: "center",
		whiteSpace: "nowrap",
		margin:"auto",
		border: "5px solid #272727",
		marginTop: "59px",
		marginBottom: "59px"
	},
	started:{
		width: "100%",
		borderWidth:"0",
		fontSize:"20px",
		fontFamily: "Lato",
		padding:"1.25em 2em",
		color:"#272727",
		backgroundColor:"#fff",
		lineHeight:"1em",
		textTransform: "uppercase",
		letterSpacing:"1px",
		fontWeight: "300",
		textAlign: "center",
		whiteSpace: "nowrap",
		margin:"auto",
		border: "5px solid #272727",
		marginTop: "59px",
		marginBottom: "59px"
	}
}

var StartButton = React.createClass({
	getInitialState: function(){
		return{
			clicked: false
		};
	},
	changeGameStartState: function(){
		if(!this.state.clicked){
			this.state.clicked = true;
			var number = Math.floor((Math.random() * (controls.backgroundColors.length-1)) + 1);
			controls.startTime = new Date();
			controls.started=!controls.started;
			this.setState({clicked: true});
			this.playMusic();
		}
	},

	playMusic: function(){
		var myAudio = new Audio(songUrl); 
		myAudio.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.play();
		}, false);
		myAudio.play();
	},

	render: function(){
		if(!this.state.clicked){
			var styleSelection = styles.notStarted;
			var text = "Let's Play!";
		}
		else{
			var styleSelection = styles.started;
			var text = "FOR GLORY!";
		}
		
		return <button onClick={this.changeGameStartState} style={styleSelection}>{text}</button>
	}
});



module.exports = StartButton;