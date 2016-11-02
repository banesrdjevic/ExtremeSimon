var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');


var styles={
	table:{width: "100%"},
	header:{height: "75px", textAlign: "center", background: "#009688", color: "white", fontFamily:"arial"},
	row:{background: "white", border: "1px solid #009688", height: "50px", textAlign: "center", verticalAlign: "middle"}
};


var HighScore = React.createClass({
	createHighScore: function(){
		var cookie = document.cookie;
		if (cookie == ""){
			var highScoreText = "No Score Yet...";
		}
		else{
			var highScoreText = cookie.split('=')[1]
		}
		return <tr><td style={styles.row}>{highScoreText}</td></tr>
	},

	render: function(){
		var highScore = this.createHighScore();
		return (<table style={styles.table}>
			<thead style={styles.header}><tr style={styles.header}><th>YOUR HIGHSCORE</th></tr></thead>
			<tbody style={styles.row}>{highScore}</tbody>
		</table>)
	}
})

module.exports=HighScore;