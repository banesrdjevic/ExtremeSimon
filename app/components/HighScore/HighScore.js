var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');


var styles={
	table:{width: "100%"},
	header:{height: "75px", textAlign: "center", background: "#009688", color: "white", fontFamily:"arial"},
	row:{background: "white", border: "1px solid #009688", height: "50px"}
};


var HighScore = React.createClass({
	createList: function(){
		var highScores = [];
		$.each(document.cookie.split(/; */), function(currentValue, i)  {
  			var highScore =(this.split('='));
			var identifier = "high_score_" + i;
  			// highScores.push(<tr style={styles.row} key={identifier}><td>{highScore[1]}</td></tr>)
  			highScores.push(<tr key={identifier}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 1}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 2}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 3}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 4}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 5}><td style={styles.row}>{highScore[1]}</td></tr>);
  			highScores.push(<tr key={identifier + 6}><td style={styles.row}>{highScore[1]}</td></tr>);
  			console.log(highScores);
		});

		console.log(highScores);

		return highScores;				
	},

	render: function(){
		var highScoreList = this.createList(document.cookie);
		return (<table style={styles.table}>
			<thead style={styles.header}><tr style={styles.header}><th>HIGHSCORES</th></tr></thead>
			<tbody style={styles.row}>{highScoreList}</tbody>
		</table>)
	}
})

module.exports=HighScore;