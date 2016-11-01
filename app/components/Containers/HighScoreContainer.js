var React = require('react');
var ReactDOM = require('react-dom');
var HighScores = require ('../HighScore/HighScore');

var styles = {
	container:{height: "1000px", width: "400px"},
	individual:{}
	}

var HighScoreContainer = React.createClass({
	render: function(){
		return <div style={styles.container}><HighScores /></div>
	}
})

module.exports=HighScoreContainer;