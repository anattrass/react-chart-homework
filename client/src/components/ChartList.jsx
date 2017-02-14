var React = require ("react");

var Song = require ("./song");

var ChartList = React.createClass({
  render: function(){
    var songNodes = this.props.songs.map(function(song, index){
      return (
        <Song key = {song.id.label}>
        <div className = "song">
        <h3>No: {index + 1}</h3>
        <p>Title: {song["im:name"].label}</p>
        <img src = {song["im:image"][2].label}/>
        <p>Artist: {song["im:artist"].label}</p>
        </div>
        </Song>
        );
    });

    return(
      <div className = "chart-list">
      {songNodes}
      </div>
      );
  }
});

module.exports = ChartList;